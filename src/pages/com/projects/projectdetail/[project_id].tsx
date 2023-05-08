import usePush from "@utils/UsePush";
import { useUser } from "../../../../contexts/AmplifyAuthContext";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import PrimaryLayout from "../../../../components/layouts/primary/PrimaryLayout";
import { addProject } from "../../../../constants/addprojectconstants/AddProjectConstants";
import SearchableSelectInput from "../../../../components/forms/SearchableSelectInput";
import Typography from "../../../../components/typography/Typography";
import TextArea from "../../../../components/forms/TextArea";
import DatePicker from "../../../../components/forms/DatePicker";
import Input from "../../../../components/forms/Input";
import MainCtaButton from "../../../../components/buttons/mainctabutton/MainCtaButton";
import { keahlianDbToValue, keahlianValueToDb } from "@utils/StringUtils";
import v4 from "uuid-browser/v4";
import { DateTime } from "luxon";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as mutations from "../../../../graphql/mutations";
import * as queries from "../../../../graphql/queries";
import {
  CompanyProjectBidderByKonsultanQuery,
  CompanyProjectBidderByKonsultanQueryVariables,
  CreateProjectMutation,
  GetProjectQuery,
  GetTenagaAhliQuery,
  UpdateProjectMutation,
} from "../../../../API";
import { useRouter } from "next/router";
import React from "react";
import CustomMessage from "../../../../components/custommessage/CustomMessage";
import { IAmplifyProjectCard } from "../../../../constants/exploreformconstants/ProjectCard";
import { IAmplifyProjectBidder } from "../../../../constants/tacardconstants/TaCardConstants";
import { filter } from "smart-array-filter";
import Checkbox from "../../../../components/forms/Checkbox";
import ExploreMainLayout from "../../../../page_components/explore/layouts/ExploreMainLayout";
import ExploreSectionLayout from "../../../../page_components/explore/layouts/ExploreSectionLayout";
import Button from "../../../../components/buttons/custombuttons/Button";
import ProjectBidderCards from "../../../../page_components/projectbidder/cards/ProjectBidderCards";

interface IProjectFilter {
  biddingStatus: string[];
}

export default function ProjectDetail() {
  const listProvince = require("../../../../constants/addprojectconstants/ProvinsiConstants.json");

  const router = useRouter();
  const push = usePush();

  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    loading,
    setLoading,
  } = useUser();

  const [userId, setUserId] = useState<string>("");
  const { project_id } = router.query;
  const [isProjectAvailable, setIsProjectAvailable] = useState<boolean>(false);
  const [projectMessage, setProjectMessage] = useState<string>("");

  const [bidderFilter, setBidderFilter] = useState<IProjectFilter>({
    biddingStatus: [],
  });
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [listAllBidder, setListAllBidder] = useState<IAmplifyProjectBidder[]>(
    []
  );
  const [filteredBidder, setFilteredBidder] = useState<IAmplifyProjectBidder[]>(
    []
  );

  const [project, setProject] = useState<IAmplifyProjectCard>();

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
  const testgg = keahlianDbToValue(
    "ahli_hukum,ahli_risiko,arsitektur,ahli_sosial_larap"
  );
  if (testgg) {
    const testgg2 = keahlianValueToDb(testgg);
    console.log("testgg: ", testgg);
  }

  //------------------ Initial Get Data START ----------------------//
  React.useEffect(() => {
    // if (submitStatus) {
    getData();
    // }
  }, [project_id, userId]);

  const getData = async () => {
    if (!userId) {
      return;
    }
    if (!project_id || project_id.length < 1 || project_id === "undefined") {
      // console.log("project id: ", project_id);
      setProjectMessage("Proyek tidak ditemukan");
      setIsProjectAvailable(false);
      return;
    }

    const getProject = await API.graphql<GraphQLQuery<GetProjectQuery>>(
      graphqlOperation(queries.getProject, { projectId: project_id })
    );

    if (!getProject || !getProject.data || !getProject.data.getProject) {
      setProjectMessage("Proyek tidak ditemukan");
      setIsProjectAvailable(false);
      return;
    }

    setProject(getProject.data.getProject);

    const variableResult: CompanyProjectBidderByKonsultanQueryVariables = {
      konsultanId: userId,
      filter: {
        and: [
          {
            projectId: {
              eq: project_id as string,
            },
          },
        ],
      },
    };

    setLoading(true);
    const getTa = await API.graphql<
      GraphQLQuery<CompanyProjectBidderByKonsultanQuery>
    >({
      query: queries.companyProjectBidderByKonsultan,
      variables: variableResult,
    });
    if (
      getTa.data &&
      getTa.data.companyProjectBidderByKonsultan &&
      getTa.data.companyProjectBidderByKonsultan.items
    ) {
      const project: IAmplifyProjectBidder[] = getTa.data
        .companyProjectBidderByKonsultan.items as IAmplifyProjectBidder[];

      setListAllBidder(project);
      setFilteredBidder(project);

      const tempListAllStatus = project.map(function (el) {
        return el.biddingStatus;
      });

      let tempListAllStatusString: string[] = [];

      tempListAllStatus.forEach((item) => {
        tempListAllStatusString = [...tempListAllStatusString, item];
      });

      tempListAllStatusString = tempListAllStatus.filter(
        (value, index) => tempListAllStatus.indexOf(value) === index
      );

      setFilterStatus(tempListAllStatusString);
      setIsProjectAvailable(true);
      setProjectMessage("");
    } else {
      setIsProjectAvailable(false);
      setProjectMessage("Proyek tidak ditemukan");
    }

    setLoading(false);
  };
  //------------------ Initial Form END ----------------------//

  //------------------ Filter handler START ----------------------//
  useEffect(() => {
    const keywordStatus = bidderFilter.biddingStatus.join(",");

    let filtered;

    if (keywordStatus && keywordStatus.length > 3) {
      filtered = filter(listAllBidder, {
        predicate: "OR",
        keywords: `biddingStatus:${keywordStatus}`,
      });
      console.log("filtered: if");
    } else {
      console.log("filtered: else");
      filtered = listAllBidder;
    }

    console.log("filtered: ", keywordStatus);

    setFilteredBidder(filtered);
  }, [bidderFilter]);

  //------------------ Filter handler END ----------------------//

  //------------------ Checkbox handler START ----------------------//

  function onProjectStatusBoxChanged(checked: boolean, label: string) {
    let temparraystatus = bidderFilter.biddingStatus;

    if (!checked) {
      temparraystatus.forEach((item, index) => {
        if (item === label) temparraystatus.splice(index, 1);
      });
    } else {
      temparraystatus = [...temparraystatus, label];
    }

    const tempArrayFilterProject: IProjectFilter = {
      biddingStatus: temparraystatus,
    };

    setBidderFilter(tempArrayFilterProject);
  }

  //------------------ Checkbox handler END ----------------------//

  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    setValue,
  } = methods;

  const dataKeahlian = require("../../../../constants/profileformconstants/bidang_keahlian.json");

  return isProjectAvailable ? (
    <ExploreMainLayout user={user}>
      <div className="layout relative flex min-h-screen flex-row justify-center py-12 text-center bg-white ">
        <div className="bg-white lg:w-3/12 md:w-2/5 pr-12 hidden md:block pl-12 md:pl-8 md:pr-8">
          <aside className="self-start position-relative w-100 sticky top-0 pb-12">
            <div className="ml-1 text-gray-900 text-left mb-2">
              Project:
              <div className="flex flex-col ps-5 text-gray-900 bg-gray-200">
                <Typography variant="h2" color="primary" className="mx-4 mt-4">
                  {" "}
                  {project?.projectTitle}
                </Typography>
                <Button
                  variant="primary"
                  className="mt-8 mx-4 bg-yellow-500 mb-8"
                  onClick={() => {
                    push(`/com/projects/editproject/${project_id}`);
                  }}
                >
                  Edit proyek
                </Button>
              </div>
            </div>
            <h1 className="ml-1 text-gray-900 text-left mb-2">Filter</h1>
            <div className=" ps-5 text-gray-900 bg-gray-200">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(() => {})}>
                  <div className="border-2 border-gray-200 ">
                    <div className="text-left  pt-2 dark:border-black0 mx-2 text-lg ml-4 py-2 items-center pb-4">
                      <p className="mb-2">Status</p>
                      <section className="max-h-80 overflow-y-auto">
                        {filterStatus.map((status) => {
                          return (
                            <Checkbox
                              key={status}
                              customTextClass="text-gray-900"
                              label={status}
                              name={status}
                              onChange={(value) => {
                                onProjectStatusBoxChanged(
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
          <ExploreSectionLayout isTa={false}>
            {loading ? (
              <p className="text-white">Sedang mencari proyek...</p>
            ) : filteredBidder.length < 1 ? (
              <p className="text-white">Belum ada proyek available</p>
            ) : (
              <>
                <Typography variant="h2" color="primary" className="mb-4">
                  {`Daftar pelamar untuk proyek "${project?.projectTitle}" `}
                  {/** (${filteredBidder.length} pelamar) */}
                </Typography>
                {filteredBidder.map((bidder) => {
                  return (
                    <section
                      className="pb-4"
                      key={`${bidder.projectId}-${bidder.konsultanId}-${bidder.taId}`}
                    >
                      <ProjectBidderCards
                        tenagaAhli={bidder.taDetail}
                        isTa={false}
                        biddingStatus={bidder.biddingStatus}
                        konsultanId={userId}
                        projectId={bidder.projectId}
                        functiongg={getData}
                        projectStatus={project?.projectStatus as string}
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
    <CustomMessage success={false} message={projectMessage} />
  );
}

ProjectDetail.authenticate = true;
