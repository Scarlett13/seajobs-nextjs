import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Checkbox from "../../components/forms/Checkbox";
import { IAmplifyProjectCard } from "../../constants/exploreformconstants/ProjectCard";
import { useUser } from "../../contexts/AmplifyAuthContext";
import ProjectCard from "../../page_components/explore/cards/ProjectCard";
import ExploreMainLayout from "../../page_components/explore/layouts/ExploreMainLayout";
import ExploreSectionLayout from "../../page_components/explore/layouts/ExploreSectionLayout";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  GetTenagaAhliQuery,
  ListProjectsQuery,
  ListProjectsQueryVariables,
} from "../../API";
import * as queries from "../../graphql/queries";
import usePush from "@utils/UsePush";

interface projectFilter {
  projectCategories?: string[];
  projectLocation?: string[];
}

const dummyProject: IAmplifyProjectCard[] = [
  {
    projectId: "pid",
    projectTitle: "Project Perusahaan Dummy",
    projectLocation: "Jakarta",
    projectValue: "500,000,000",
    projectDuration: "6 Bulan",
    projectStart: "28 Oktober 2023",
    projectCategories: "Finance",
    projectDescription: "Disini project description yang panjang",
    projectClient: "Pemprov DKI",
    projectDeadline: "Sebelum 20 September 2023",
    projectOwner: "PT Adhikari",
    isActive: "true",
    projectStatus: "Bidding",
    isDeleted: false,
  },
  {
    projectId: "pid2",
    projectTitle: "Project Perusahaan Dummy 2",
    projectLocation: "Bandung",
    projectValue: "180,000,000",
    projectDuration: "1 tahun 6 Bulan",
    projectStart: "28 Oktober 2023",
    projectCategories: "Arsitektur, Komputer, Finance, Ahli Hukum",
    projectDescription: "Disini project description yang panjang",
    projectClient: "Pemprov DKI",
    projectDeadline: "Sebelum 20 September 2023",
    projectOwner: "PT Adhikari",
    isActive: "true",
    projectStatus: "Bidding",
    isDeleted: false,
  },
];

const dummyProject2 = [
  {
    projectId: "pid",
    projectTitle: "Project Perusahaan Dummy",
    projectLocation: "Jakarta",
    projectValue: "500,000,000",
    projectDuration: "6 Bulan",
    projectStart: "28 Oktober 2023",
    projectCategories: ["Ahli Hukum", "Ahli LARAP", "FINANCE"],
    projectDescription: "Disini project description yang panjang",
    projectClient: "Pemprov DKI",
    projectDeadline: "Sebelum 20 September 2023",
    projectOwner: "PT Adhikari",
    isActive: "true",
    projectStatus: "Bidding",
    isDeleted: false,
  },
  {
    projectId: "pid2",
    projectTitle: "Project Perusahaan Dummy 2",
    projectLocation: "Bandung",
    projectValue: "180,000,000",
    projectDuration: "1 tahun 6 Bulan",
    projectStart: "28 Oktober 2023",
    projectCategories: ["Arsitektur", "Komputer", "FINANCE", "Ahli Hukum"],
    projectDescription: "Disini project description yang panjang",
    projectClient: "Pemprov DKI",
    projectDeadline: "Sebelum 20 September 2023",
    projectOwner: "PT Adhikari",
    isActive: "true",
    projectStatus: "Bidding",
    isDeleted: false,
  },
];

export default function Explore() {
  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();

  const [filterKeahlian, setFilterKeahlian] = useState<string[]>([]);
  const [filterArea, setFilterArea] = useState<string[]>([]);
  const [listAllProjects, setListAllProjects] = useState<IAmplifyProjectCard[]>(
    []
  );
  const [userId, setUserId] = useState<string>("");

  const push = usePush();

  const methods = useForm({
    mode: "onTouched",
  });

  async function checkUser() {
    setLoading(true);
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      if (!userId) {
        setUserId(amplifyUser.getUsername());
      }

      setLoading(false);
      console.log("masuk ke loading false 1");
    } catch (error) {
      // No current signed in user.
      console.error("error getuser: ", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    checkUser();
  }, [userId]);

  //fetch data
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
        push(`/profile/editprofile/${user.getUsername}`);
      }

      const filter: ListProjectsQueryVariables = {
        filter: {
          and: [
            {
              isActive: { eq: "true" },
              isDeleted: { ne: true },
              projectStart: { gt: "2023-03-30" },
            },
          ],
        },
      };

      const listProjectsResults = await API.graphql<
        GraphQLQuery<ListProjectsQuery>
      >({ query: queries.listProjects, variables: filter });

      console.log(listProjectsResults);

      if (
        listProjectsResults.data &&
        listProjectsResults.data.listProjects &&
        listProjectsResults.data.listProjects.items
      ) {
        setListAllProjects(
          listProjectsResults.data.listProjects.items as IAmplifyProjectCard[]
        );
      }

      // if (getTa.data && getTa.data.getTenagaAhli) {
      //   const tadob = new Date(getTa.data.getTenagaAhli.taDob);

      //   setValue("fullname", getTa.data.getTenagaAhli.taFullName);
      //   setValue("ic_number", getTa.data.getTenagaAhli.taNikPassport);
      //   setValue("dob", tadob);
      //   setValue("nationality", getTa.data.getTenagaAhli.taCitizenship);
      //   setValue("res_status_id", getTa.data.getTenagaAhli.taResidentStatus);
      //   setValue("deskripsi_diri", getTa.data.getTenagaAhli.taSelfDescription);
      //   setValue("address", getTa.data.getTenagaAhli.taAddress);
      //   setValue("email", getTa.data.getTenagaAhli.taEmail);
      //   setValue("phone_number", getTa.data.getTenagaAhli.taPhoneNumber);
      //   setValue(
      //     "portfolio_link",
      //     getTa.data.getTenagaAhli.taPortfolioLink?.join(", ")
      //   );
      //   setValue(
      //     "keahlian_id",
      //     getTa.data.getTenagaAhli.taExpertise.split(",")
      //   );
      // }

      // const getPend = await API.graphql<
      //   GraphQLQuery<PendidikanByTenagaAhliByCourseQuery>
      // >(
      //   graphqlOperation(queries.pendidikanByTenagaAhliByCourse, {
      //     taId: profile_id,
      //   })
      // );

      // if (
      //   getPend.data &&
      //   getPend.data.pendidikanByTenagaAhliByCourse &&
      //   getPend.data.pendidikanByTenagaAhliByCourse.items
      // ) {
      //   setListPendidikan(
      //     getPend.data.pendidikanByTenagaAhliByCourse
      //       .items as IPendidikanSertifikasi[]
      //   );
      // }

      // const getProjects = await API.graphql<
      //   GraphQLQuery<PengalamanKerjaByTenagaAhliByPerusahaanQuery>
      // >(
      //   graphqlOperation(queries.pengalamanKerjaByTenagaAhliByPerusahaan, {
      //     taId: profile_id,
      //   })
      // );

      // if (
      //   getProjects.data &&
      //   getProjects.data.pengalamanKerjaByTenagaAhliByPerusahaan &&
      //   getProjects.data.pengalamanKerjaByTenagaAhliByPerusahaan.items
      // ) {
      //   setListKerja(
      //     getProjects.data.pengalamanKerjaByTenagaAhliByPerusahaan
      //       .items as PengalamanKerja[]
      //   );
      // }

      setLoading(false);
    };

    // if (submitStatus) {
    getTa();
  }, [user, loading, userId]);

  useEffect(() => {
    const tempListAllKeahlian = listAllProjects.map(function (el) {
      return el.projectCategories;
    });

    const tempListAllArea = listAllProjects.map(function (el) {
      return el.projectLocation;
    });

    let tempListAllKeahlianString: string[] = [];
    let tempListAllAreaString: string[] = [];

    tempListAllKeahlian.forEach((item) => {
      tempListAllKeahlianString = [
        ...tempListAllKeahlianString,
        ...item.split(", "),
      ];
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
  }, [listAllProjects]);

  // useEffect(() => {
  //   const getValue = (value: string) =>
  //     typeof value === "string" ? value.toUpperCase() : value;

  //   function filterPlainArray(array: any[], filters: { [x: string]: any[] }) {
  //     const filterKeys = Object.keys(filters);
  //     console.log("keys: ", filterKeys);
  //     return array.filter((item) => {
  //       // validates all filter criteria
  //       return filterKeys.every((key) => {
  //         // ignores an empty filter
  //         if (!filters[key].length) return true;
  //         return filters[key].find(
  //           (filter) => getValue(filter) === getValue(item[key])
  //         );
  //       });
  //     });
  //   }

  //   const filters = {
  //     projectCategories: ["Finance"],
  //   };

  //   const filtered = filterPlainArray(dummyProject, filters);

  //   console.log(filtered);
  // });

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
          <div className="position-relative w-100 sticky top-0">
            <h1 className="ml-1 text-white text-left mb-2">Filter</h1>
            <div className=" ps-5 text-white bg-form-bg">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(() => {})}>
                  <div className="border-2 border-black ">
                    <div className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center pb-4">
                      <p className="mb-2">Keahlian</p>
                      <section>
                        {filterKeahlian.map((keahlian) => {
                          return (
                            <Checkbox
                              key={keahlian}
                              customTextClass="text-white"
                              label={keahlian}
                              name={keahlian}
                            ></Checkbox>
                          );
                        })}
                      </section>
                    </div>
                  </div>

                  <div className="border-2 border-black ">
                    <div className="text-left pl-4  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center pb-8">
                      <p className="mb-2">Area proyek</p>
                      <section>
                        {filterArea.map((area) => {
                          return (
                            <Checkbox
                              key={area}
                              customTextClass="text-white"
                              label={area}
                              name={area}
                            ></Checkbox>
                          );
                        })}
                      </section>
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>

        <div className="mx-4 mt-4 mb-24 w-2/3 lg:w-3/4 xl:w-6/12 xl:pr-12 lg:pr-12 md:pr-8">
          <ExploreSectionLayout>
            {loading ? (
              <p className="text-white">Sedang mencari proyek...</p>
            ) : listAllProjects.length < 1 ? (
              <p className="text-white">Belum ada proyek available</p>
            ) : (
              listAllProjects.map((project) => {
                return (
                  <section className="pb-4" key={project.projectId}>
                    <ProjectCard project={project} />
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
