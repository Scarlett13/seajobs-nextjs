import React, { useEffect, useRef, useState } from "react";

import { useUser } from "../../../../contexts/AmplifyAuthContext";
import usePush from "@utils/UsePush";
import PrimaryLayout from "../../../../components/layouts/primary/PrimaryLayout";
import { Auth } from "aws-amplify";
import {
  CompanyProjectBidderByTaQuery,
  CompanyProjectBidderByTaQueryVariables,
  EnumBiddingStatus,
  GetTenagaAhliQuery,
} from "../../../../API";
import { DateTime } from "luxon";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as queries from "../../../../graphql/queries";
import * as custom_queries from "../../../../customgraphql/queries";
import { IAmplifyProjectBidderByTa } from "../../../../constants/dashboardconstants/ProjectBid";
import StatisticsCard from "../../../../components/cards/StatisticsCard";
import { Files } from "lucide-react";
import { useRouter } from "next/router";
import CustomMessage from "../../../../components/custommessage/CustomMessage";
import { FormProvider, useForm } from "react-hook-form";
import { filter } from "smart-array-filter";
import ExploreMainLayout from "../../../../page_components/explore/layouts/ExploreMainLayout";
import ExploreSectionLayout from "../../../../page_components/explore/layouts/ExploreSectionLayout";
import Checkbox from "../../../../components/forms/Checkbox";
import {
  keahlianDbToValue,
  keahlianValueToDb,
} from "../../../../libs/StringUtils";
import Typography from "../../../../components/typography/Typography";
import ProjectBiddedCard from "../../../../page_components/explore/cards/projectbiddedcards/ProjectBiddedCard";
import Button from "../../../../components/buttons/custombuttons/Button";

// interface IProjectFilter {
//   projectCategories: string[];
//   projectLocation: string[];
// }

export default function ListProjects() {
  const router = useRouter();
  const { project_status } = router.query;
  const push = usePush();

  const [isGood, setIsGood] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(
    "Status proyek tidak dikenali"
  );

  useEffect(() => {
    if (
      project_status &&
      (project_status === "SUBMITTED" ||
        project_status === "APPROVED" ||
        project_status === "REJECTED")
    ) {
      setIsGood(true);
    }
  }, [project_status]);

  console.log("update data: ", isGood, " - ", project_status);

  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();

  // const [projectFilter, setProjectFilter] = useState<IProjectFilter>({
  //   projectCategories: [],
  //   projectLocation: [],
  // });
  // const [filterKeahlian, setFilterKeahlian] = useState<string[]>([]);
  // const [filterArea, setFilterArea] = useState<string[]>([]);
  const [listAllProjects, setListAllProjects] = useState<
    IAmplifyProjectBidderByTa[]
  >([]);
  const [filteredProjects, setFilteredProject] = useState<
    IAmplifyProjectBidderByTa[]
  >([]);
  const [userId, setUserId] = useState<string>("");

  const methods = useForm({
    mode: "onTouched",
  });

  //------------------ Check user START ----------------------//

  useEffect(() => {
    async function checkUser() {
      setLoading(true);
      try {
        const amplifyUser = await Auth.currentAuthenticatedUser();
        if (!userId || userId.length < 5) {
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
    const getTaFunction = async () => {
      if (!userId) {
        return;
      }
      setLoading(true);

      const getTa = await API.graphql<GraphQLQuery<GetTenagaAhliQuery>>(
        graphqlOperation(queries.getTenagaAhli, {
          taId: userId,
        })
      );

      if (!getTa.data || !getTa.data.getTenagaAhli) {
        push(`/ta/profile/editprofile/${userId}`);
      }

      const variablesResult: CompanyProjectBidderByTaQueryVariables = {
        taId: userId,
        filter: {
          and: [
            {
              biddingStatus: { eq: project_status as EnumBiddingStatus },
            },
          ],
        },
      };

      console.log("variablenya: ", variablesResult);

      const result = await API.graphql<
        GraphQLQuery<CompanyProjectBidderByTaQuery>
      >({
        query: custom_queries.companyProjectBidderByTaCard,
        variables: variablesResult,
      });

      console.log("get data: ", result);

      let tempProjectList;

      if (
        result &&
        result.data &&
        result.data.companyProjectBidderByTa &&
        result.data.companyProjectBidderByTa.items
      ) {
        tempProjectList = result.data.companyProjectBidderByTa
          .items as IAmplifyProjectBidderByTa[];
      }

      if (!tempProjectList || tempProjectList.length < 1) {
        setIsGood(false);
        setLoading(false);
        setMessage(`proyek dengan status ${project_status} tidak ditemukan `);
        return;
      }

      if (
        result.data &&
        result.data.companyProjectBidderByTa &&
        result.data.companyProjectBidderByTa.items
      ) {
        const tempdummy: IAmplifyProjectBidderByTa[] = result.data
          .companyProjectBidderByTa.items as IAmplifyProjectBidderByTa[];

        setListAllProjects(tempdummy);

        setFilteredProject(tempdummy);

        // const tempListAllKeahlian = tempdummy.map(function (el) {
        //   return keahlianDbToValue(el.projectCategories)
        //     .toString()
        //     .replaceAll(",", ", ");
        // });

        // const tempListAllArea = tempdummy.map(function (el) {
        //   return el.projectLocation;
        // });

        // let tempListAllKeahlianString: string[] = [];
        // let tempListAllAreaString: string[] = [];

        // tempListAllKeahlian.forEach((item) => {
        //   tempListAllKeahlianString = [
        //     ...tempListAllKeahlianString,
        //     ...item.split(", "),
        //   ];
        // });

        // tempListAllArea.forEach((item) => {
        //   tempListAllAreaString = [...tempListAllAreaString, item];
        // });

        // tempListAllKeahlianString = tempListAllKeahlianString.filter(
        //   (value, index) => tempListAllKeahlianString.indexOf(value) === index
        // );

        // tempListAllAreaString = tempListAllAreaString.filter(
        //   (value, index) => tempListAllAreaString.indexOf(value) === index
        // );

        // tempListAllAreaString.sort((one, two) => (one > two ? 1 : -1));

        // setFilterKeahlian(tempListAllKeahlianString);
        // setFilterArea(tempListAllAreaString);
      }

      setLoading(false);
    };

    if (isGood) {
      getTaFunction();
    }
  }, [isGood, userId]);
  //------------------ Fetch data END ----------------------//

  //------------------ Filter handler START ----------------------//
  // useEffect(() => {
  //   // console.log(projectFilter);
  //   const keywordcategories = projectFilter.projectCategories
  //     .join(",")
  //     .replace(/Ahli/g, "");
  //   const keywordlocation = projectFilter.projectLocation.join(",");
  //   let keyword = `${
  //     keywordcategories ? "projectCategories:" + keywordcategories : ""
  //   } ${keywordlocation ? "projectLocation:" + keywordlocation : ""}`;

  //   let filtered;

  //   if (keywordcategories && keywordcategories.length > 5) {
  //     filtered = filter(listAllProjects, {
  //       predicate: "OR",
  //       keywords: `projectCategories:${keywordcategories}`,
  //     });
  //     if (keywordlocation && keywordlocation.length > 5) {
  //       //filter lokasi berdasarkan hasil dari categories
  //       filtered = filter(filtered, {
  //         predicate: "OR",
  //         keywords: `projectLocation:${keywordlocation}`,
  //       });
  //     }
  //   } else {
  //     if (keywordlocation && keywordlocation.length > 5) {
  //       //filter lokasi berdasarkan hasil dari categories
  //       filtered = filter(listAllProjects, {
  //         predicate: "OR",
  //         keywords: `projectLocation:${keywordlocation}`,
  //       });
  //     } else {
  //       filtered = listAllProjects;
  //     }
  //   }

  //   setFilteredProject(filtered);
  // }, [projectFilter]);

  //------------------ Filter handler END ----------------------//

  //------------------ Checkbox handler START ----------------------//

  // function onKeahlianCheckBoxChanged(checked: boolean, label: string) {
  //   let temparraykeahlian = projectFilter.projectCategories;

  //   if (!checked) {
  //     temparraykeahlian.forEach((item, index) => {
  //       if (item === label) temparraykeahlian.splice(index, 1);
  //     });
  //   } else {
  //     temparraykeahlian = [...temparraykeahlian, label];
  //   }

  //   const tempArrayFilterProject: IProjectFilter = {
  //     projectCategories: temparraykeahlian,
  //     projectLocation: projectFilter.projectLocation,
  //   };

  //   setProjectFilter(tempArrayFilterProject);
  // }

  // function onLocationCheckBoxChanged(checked: boolean, label: string) {
  //   let temparraylocation = projectFilter.projectLocation;

  //   if (!checked) {
  //     temparraylocation.forEach((item, index) => {
  //       if (item === label) temparraylocation.splice(index, 1);
  //     });
  //   } else {
  //     temparraylocation = [...temparraylocation, label];
  //   }

  //   const tempArrayFilterProject: IProjectFilter = {
  //     projectCategories: projectFilter.projectCategories,
  //     projectLocation: temparraylocation,
  //   };

  //   setProjectFilter(tempArrayFilterProject);
  // }

  //------------------ Checkbox handler END ----------------------//

  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setValue,
  } = methods;

  return isGood ? (
    <ExploreMainLayout user={user}>
      <div className="layout relative flex min-h-screen flex-row justify-center py-12 text-center bg-black ">
        <div className="bg-black lg:w-1/4 md:w-1/3 pr-12 hidden md:block pl-12 md:pl-8 md:pr-8">
          <aside className="self-start position-relative w-100 sticky top-0 pb-12">
            {/* <h1 className="ml-1 text-white text-left mb-2">Filter</h1> */}
            <div className=" ps-5 text-white bg-form-bg">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(() => {})}>
                  {/* <div className="border-2 border-gray-300 ">
                    <div className="text-left  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center pb-4">
                      <p className="mb-2">Keahlian</p>
                      <section className="max-h-80 overflow-y-auto">
                        {filterKeahlian.map((keahlian) => {
                          return (
                            <Checkbox
                              key={keahlian}
                              customTextClass="text-gray-900"
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
                  </div> */}

                  {/* <div className="h-2/6 border-2 border-gray-300 ">
                    <div className="text-left pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center pb-8">
                      <p className="mb-2">Area proyek</p>
                      <section className="max-h-80 overflow-y-auto">
                        {filterArea.map((area) => {
                          return (
                            <Checkbox
                              key={area}
                              customTextClass="text-gray-900"
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
                  </div> */}
                </form>
              </FormProvider>
              <Button
                className="w-full border-gray-400 text-red-400 hover:text-red-500"
                onClick={() => router.back()}
              >
                Kembali ke halaman sebelumnya
              </Button>
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
              <>
                <Typography variant="h2" color="custom_white" className="mb-4">
                  {`Daftar Proyek ${project_status}`}
                </Typography>
                {filteredProjects.map((project) => {
                  return (
                    <section className="pb-4" key={project.projectId}>
                      <ProjectBiddedCard
                        project={project.projectDetail}
                        taId={userId}
                        isTa={true}
                      />
                    </section>
                  );
                })}
              </>
            )}
          </ExploreSectionLayout>
        </div>
      </div>
    </ExploreMainLayout>
  ) : (
    <CustomMessage success={false} message={message} />
  );
}

ListProjects.authenticate = true;
