import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Checkbox from "../../../components/forms/Checkbox";
import { IAmplifyProjectCard } from "../../../constants/exploreformconstants/ProjectCard";
import { useUser } from "../../../contexts/AmplifyAuthContext";
import ProjectCard from "../../../page_components/explore/cards/ProjectCard";
import ExploreMainLayout from "../../../page_components/explore/layouts/ExploreMainLayout";
import ExploreSectionLayout from "../../../page_components/explore/layouts/ExploreSectionLayout";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  GetTenagaAhliQuery,
  ListProjectsQuery,
  ListProjectsQueryVariables,
} from "../../../API";
import * as queries from "../../../graphql/queries";
import usePush from "@utils/UsePush";
import { DateTime } from "luxon";
import { filter } from "smart-array-filter";
import { keahlianDbToValue } from "@utils/StringUtils";

interface IProjectFilter {
  projectCategories: string[];
  projectLocation: string[];
}

const today = DateTime.now().toFormat("yyyy-MM-dd");

export default function Explore() {
  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();

  const [projectFilter, setProjectFilter] = useState<IProjectFilter>({
    projectCategories: [],
    projectLocation: [],
  });
  const [filterKeahlian, setFilterKeahlian] = useState<string[]>([]);
  const [filterArea, setFilterArea] = useState<string[]>([]);
  const [listAllProjects, setListAllProjects] = useState<IAmplifyProjectCard[]>(
    []
  );
  const [filteredProjects, setFilteredProject] = useState<
    IAmplifyProjectCard[]
  >([]);
  const [userId, setUserId] = useState<string>("");

  const push = usePush();

  const methods = useForm({
    mode: "onTouched",
  });

  //------------------ Check user START ----------------------//

  useEffect(() => {
    async function checkUser() {
      setLoading(true);
      try {
        const amplifyUser = await Auth.currentAuthenticatedUser();
        if (!userId) {
          setUserId(amplifyUser.getUsername());
          setLoading(false);
        } else {
          setLoading(false);
          return false;
        }

        console.log("masuk ke loading false 1");
      } catch (error) {
        // No current signed in user.
        console.error("error getuser: ", error);
        setLoading(false);
      }
    }

    checkUser();
  }, []);

  //------------------ Check user END ----------------------//

  //------------------ Fetch data START ----------------------//
  useEffect(() => {
    const getTa = async () => {
      if (!user || !userId) {
        return;
      }
      setLoading(true);

      const getTa = await API.graphql<GraphQLQuery<GetTenagaAhliQuery>>(
        graphqlOperation(queries.getTenagaAhli, {
          taId: userId,
        })
      );

      if (!getTa.data || !getTa.data.getTenagaAhli) {
        push(`/ta/profile/editprofile/${user.getUsername()}`);
      }

      const filter: ListProjectsQueryVariables = {
        filter: {
          and: [
            {
              isActive: { eq: "true" },
              isDeleted: { ne: true },
              projectDeadline: { gt: today },
              projectStatus: { eq: "Aktif" },
            },
          ],
        },
      };

      const listProjectsResults = await API.graphql<
        GraphQLQuery<ListProjectsQuery>
      >({ query: queries.listProjects, variables: filter });

      // console.log("listProjectsResults: ", listProjectsResults);

      if (
        listProjectsResults.data &&
        listProjectsResults.data.listProjects &&
        listProjectsResults.data.listProjects.items
      ) {
        const tempdummy: IAmplifyProjectCard[] = listProjectsResults.data
          .listProjects.items as IAmplifyProjectCard[];
        setListAllProjects(tempdummy);

        setFilteredProject(tempdummy);

        const tempListAllKeahlian = tempdummy.map(function (el) {
          return el.projectCategories;
        });

        const tempListAllArea = tempdummy.map(function (el) {
          return el.projectLocation;
        });

        console.log(tempListAllKeahlian);

        let tempListAllKeahlianString: string[] = [];
        let tempListAllAreaString: string[] = [];

        tempListAllKeahlian.forEach((item) => {
          const listitems = keahlianDbToValue(item);

          if (!listitems || listitems.length === 0) {
            return;
          }

          listitems.forEach((keahlian) => {
            tempListAllKeahlianString = [
              ...tempListAllKeahlianString,
              keahlian,
            ];
          });
        });

        tempListAllArea.forEach((item) => {
          tempListAllAreaString = [...tempListAllAreaString, item];
        });

        tempListAllKeahlianString = tempListAllKeahlianString.filter(
          (value, index) => tempListAllKeahlianString.indexOf(value) === index
        );

        tempListAllAreaString = tempListAllAreaString.filter(
          (value, index) => tempListAllAreaString.indexOf(value) === index
        );

        tempListAllAreaString.sort((one, two) => (one > two ? 1 : -1));

        setFilterKeahlian(tempListAllKeahlianString);
        setFilterArea(tempListAllAreaString);
      }

      setLoading(false);
    };

    // if (submitStatus) {
    getTa();
  }, [user, userId]);

  //------------------ Fetch data END ----------------------//

  //------------------ Filter handler START ----------------------//
  useEffect(() => {
    // console.log(projectFilter);
    const keywordcategories = projectFilter.projectCategories
      .join(",")
      .replace(/Ahli/g, "");
    const keywordlocation = projectFilter.projectLocation.join(",");
    let keyword = `${
      keywordcategories ? "projectCategories:" + keywordcategories : ""
    } ${keywordlocation ? "projectLocation:" + keywordlocation : ""}`;

    let filtered;

    if (keywordcategories && keywordcategories.length > 5) {
      filtered = filter(listAllProjects, {
        predicate: "OR",
        keywords: `projectCategories:${keywordcategories}`,
      });
      if (keywordlocation && keywordlocation.length > 5) {
        //filter lokasi berdasarkan hasil dari categories
        filtered = filter(filtered, {
          predicate: "OR",
          keywords: `projectLocation:${keywordlocation}`,
        });
      }
    } else {
      if (keywordlocation && keywordlocation.length > 5) {
        //filter lokasi berdasarkan hasil dari categories
        filtered = filter(listAllProjects, {
          predicate: "OR",
          keywords: `projectLocation:${keywordlocation}`,
        });
      } else {
        filtered = listAllProjects;
      }
    }

    setFilteredProject(filtered);
  }, [projectFilter]);

  //------------------ Filter handler END ----------------------//

  //------------------ Checkbox handler START ----------------------//

  function onKeahlianCheckBoxChanged(checked: boolean, label: string) {
    let temparraykeahlian = projectFilter.projectCategories;

    if (!checked) {
      temparraykeahlian.forEach((item, index) => {
        if (item === label) temparraykeahlian.splice(index, 1);
      });
    } else {
      temparraykeahlian = [...temparraykeahlian, label];
    }

    const tempArrayFilterProject: IProjectFilter = {
      projectCategories: temparraykeahlian,
      projectLocation: projectFilter.projectLocation,
    };

    setProjectFilter(tempArrayFilterProject);
  }

  function onLocationCheckBoxChanged(checked: boolean, label: string) {
    let temparraylocation = projectFilter.projectLocation;

    if (!checked) {
      temparraylocation.forEach((item, index) => {
        if (item === label) temparraylocation.splice(index, 1);
      });
    } else {
      temparraylocation = [...temparraylocation, label];
    }

    const tempArrayFilterProject: IProjectFilter = {
      projectCategories: projectFilter.projectCategories,
      projectLocation: temparraylocation,
    };

    setProjectFilter(tempArrayFilterProject);
  }

  //------------------ Checkbox handler END ----------------------//

  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setValue,
  } = methods;

  return (
    <ExploreMainLayout user={user}>
      <div className="layout relative flex min-h-screen flex-row justify-center py-12 text-center bg-black ">
        <div className="bg-black lg:w-1/4 md:w-1/3 pr-12 hidden md:block pl-12 md:pl-8 md:pr-8">
          <aside className="self-start position-relative w-100 sticky top-0 pb-12">
            <h1 className="ml-1 text-white text-left mb-2">Filter</h1>
            <div className=" ps-5 text-white bg-form-bg">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(() => {})}>
                  <div className="border-2 border-black ">
                    <div className="text-left  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center pb-4">
                      <p className="mb-2">Keahlian</p>
                      <section className="max-h-80 overflow-y-auto">
                        {filterKeahlian.map((keahlian) => {
                          return (
                            <Checkbox
                              key={keahlian}
                              customTextClass="text-white"
                              label={keahlian}
                              name={keahlian}
                              onChange={(value) => {
                                onKeahlianCheckBoxChanged(
                                  value.target.checked,
                                  value.target.name
                                );
                                // console.log(value.target.name);
                              }}
                            ></Checkbox>
                          );
                        })}
                      </section>
                    </div>
                  </div>

                  <div className="h-2/6 border-2 border-black ">
                    <div className="text-left pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center pb-8">
                      <p className="mb-2">Area proyek</p>
                      <section className="max-h-80 overflow-y-auto">
                        {filterArea.map((area) => {
                          return (
                            <Checkbox
                              key={area}
                              customTextClass="text-white"
                              label={area}
                              name={area}
                              onChange={(value) => {
                                onLocationCheckBoxChanged(
                                  value.target.checked,
                                  value.target.name
                                );
                                // console.log(value.target.name);
                              }}
                            ></Checkbox>
                          );
                        })}
                      </section>
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          </aside>
        </div>

        <div className="mx-4 mt-4 mb-24 w-2/3 lg:w-3/4 xl:w-6/12 xl:pr-12 lg:pr-12 md:pr-8">
          <ExploreSectionLayout isTa={true}>
            {loading ? (
              <p className="text-white">Sedang mencari proyek...</p>
            ) : filteredProjects.length < 1 ? (
              <p className="text-white">Belum ada proyek available</p>
            ) : (
              filteredProjects.map((project) => {
                return (
                  <section className="pb-4" key={project.projectId}>
                    <ProjectCard project={project} taId={userId} isTa={true} />
                  </section>
                );
              })
            )}
          </ExploreSectionLayout>
        </div>
      </div>
    </ExploreMainLayout>
  );
}

Explore.authenticate = true;
