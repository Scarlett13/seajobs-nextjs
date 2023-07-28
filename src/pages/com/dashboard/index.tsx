import React, { useEffect, useRef, useState } from "react";

import { useUser } from "../../../contexts/AmplifyAuthContext";
import usePush from "@utils/UsePush";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";
import { Auth } from "aws-amplify";
import {
  GetKonsultanQuery,
  ProjectByOwnerQuery,
  UpdateProjectMutation,
} from "../../../API";
import { DateTime } from "luxon";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as queries from "../../../graphql/queries";
import {
  IAmplifyCompanyProjectBidder,
  IAmplifyProjectByOwner,
} from "../../../constants/dashboardconstants/ProjectBid";
import StatisticsCard from "../../../components/cards/StatisticsCard";
import { Files, FolderPlusIcon } from "lucide-react";
import * as mutations from "../../../graphql/mutations";

export default function Dashboard() {
  const [listProyekBid, setListProyekBid] = useState<
    IAmplifyCompanyProjectBidder[]
  >([]);

  const [totalActive, setTotalActive] = useState<number>(0);
  const [totalDone, setTotalDone] = useState<number>(0);
  const [totalCancelled, setTotalCancelled] = useState<number>(0);
  const push = usePush();

  const {
    user,
    authenticated,
    setUser,
    setAuthenticated,
    setLoading,
    loading,
  } = useUser();

  useEffect(() => {
    const getTa = async () => {
      if (!user || !authenticated) {
        return;
      }
      setLoading(true);

      const getComp = await API.graphql<GraphQLQuery<GetKonsultanQuery>>(
        graphqlOperation(queries.getKonsultan, {
          konsultanId: user.getUsername(),
        })
      );

      if (!getComp.data || !getComp.data.getKonsultan) {
        push(`/com/profile/editprofile/${user.getUsername()}`);
      }

      const result = await API.graphql<GraphQLQuery<ProjectByOwnerQuery>>(
        graphqlOperation(queries.projectByOwner, {
          projectOwner: user.getUsername(),
        })
      );

      console.log("get data: ", result);

      let tempProjectList;

      if (
        result &&
        result.data &&
        result.data.projectByOwner &&
        result.data.projectByOwner.items
      ) {
        tempProjectList = result.data.projectByOwner
          .items as IAmplifyProjectByOwner[];
      }

      let counterActive = 0;
      let counterDone = 0;
      let counterCancelled = 0;

      if (tempProjectList && tempProjectList.length > 0) {
        tempProjectList.forEach((item) => {
          if (item.projectStatus === "Aktif") {
            if (
              item.projectDeadline >=
              DateTime.fromISO(new Date().toISOString()).toFormat("yyyy-MM-dd")
            ) {
              counterActive++;
            } else {
              counterDone++;
              item.projectStatus = "Selesai";
              item.isActive = "false";
              let newTa;

              newTa = API.graphql<GraphQLQuery<UpdateProjectMutation>>({
                query: mutations.updateProject,
                variables: { input: item },
              });
            }
          } else if (item.projectStatus === "Selesai") {
            counterDone++;
          } else if (item.projectStatus === "Dibatalkan") {
            counterCancelled++;
          }
        });
      }

      setTotalActive(counterActive);
      setTotalDone(counterDone);
      setTotalCancelled(counterCancelled);

      setLoading(false);
    };

    // if (!loading) {
    getTa();
    // }
  }, []);

  return (
    <PrimaryLayout user={user}>
      <main className="bg-white h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-row md:space-x-4 sm:flex-col sm:space-y-4">
            <button>
              <StatisticsCard
                variant="primary"
                icon={Files}
                label="Project Aktif"
                value={totalActive}
                isLoading={loading}
                onClick={() => {
                  push("/com/projects/Aktif");
                }}
              />
            </button>

            <button>
              <StatisticsCard
                variant="success"
                icon={Files}
                label="Project Selesai"
                value={totalDone}
                isLoading={loading}
                onClick={() => {
                  push("/com/projects/Selesai");
                }}
              />
            </button>

            <button>
              <StatisticsCard
                variant="danger"
                icon={Files}
                label="Project Dibatalkan"
                value={totalCancelled}
                isLoading={loading}
                onClick={() => {
                  push("/com/projects/Dibatalkan");
                }}
              />
            </button>

            <button>
              <StatisticsCard
                variant="success"
                icon={FolderPlusIcon}
                label="Tambah Project"
                isLoading={loading}
                onClick={() => {
                  push("/com/projects/addproject");
                }}
              />
            </button>
          </div>
          <button
            className="mt-2 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md"
            onClick={() => {
              push(`/com/profile/${user?.getUsername()}`);
            }}
          >
            Lihat profile
          </button>

          <button
            className="mt-2 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md"
            onClick={async () => {
              await Auth.signOut();
              setUser(null);
              setAuthenticated(false);
            }}
          >
            Log out
          </button>
        </div>
      </main>
    </PrimaryLayout>
  );
}

Dashboard.authenticate = true;
