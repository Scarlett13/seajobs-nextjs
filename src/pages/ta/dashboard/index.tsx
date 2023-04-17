import React, { useEffect, useRef, useState } from "react";

import { useUser } from "../../../contexts/AmplifyAuthContext";
import usePush from "@utils/UsePush";
import {
  FormFields,
  identitasDiriFields,
  infoKontakFields,
} from "../../../constants/profileformconstants/ProfileFormConstants";
import PrimaryLayout from "../../../components/layouts/primary/PrimaryLayout";
import { Auth } from "aws-amplify";
import {
  CompanyProjectBidder,
  CompanyProjectBidderByTaQuery,
  GetTenagaAhliQuery,
} from "../../../API";
import v4 from "uuid-browser/v4";
import { DateTime } from "luxon";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as queries from "../../../graphql/queries";
import { IAmplifyCompanyProjectBidder } from "../../../constants/dashboardconstants/ProjectBid";
import StatisticsCard from "../../../components/cards/StatisticsCard";
import { Files } from "lucide-react";

export default function Dashboard() {
  const [listProyekBid, setListProyekBid] = useState<
    IAmplifyCompanyProjectBidder[]
  >([]);

  const [totalSubmitted, setaTotalSubmitted] = useState<number>(0);
  const [totalApproved, setaTotalApproved] = useState<number>(0);
  const [totalRejected, setaTotalRejected] = useState<number>(0);
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

      console.log("woi: ", user.getUsername());

      const getTa = await API.graphql<GraphQLQuery<GetTenagaAhliQuery>>(
        graphqlOperation(queries.getTenagaAhli, {
          taId: user.getUsername(),
        })
      );

      if (!getTa.data || !getTa.data.getTenagaAhli) {
        push(`/ta/profile/editprofile/${user.getUsername()}`);
      }

      const result = await API.graphql<
        GraphQLQuery<CompanyProjectBidderByTaQuery>
      >(
        graphqlOperation(queries.companyProjectBidderByTa, {
          taId: user.getUsername(),
        })
      );

      let tempProjectList;

      if (
        result &&
        result.data &&
        result.data.companyProjectBidderByTa &&
        result.data.companyProjectBidderByTa.items
      ) {
        tempProjectList = result.data.companyProjectBidderByTa
          .items as IAmplifyCompanyProjectBidder[];
      }
      let counterSubmitted = 0;
      let counterApproved = 0;
      let counterRejected = 0;

      if (tempProjectList && tempProjectList.length > 0) {
        tempProjectList.forEach((item) => {
          if (item.biddingStatus === "SUBMITTED") {
            counterSubmitted++;
          } else if (item.biddingStatus === "APPROVED") {
            counterApproved++;
          } else if (item.biddingStatus === "REJECTED") {
            counterRejected++;
          }
        });
      }

      setaTotalSubmitted(counterSubmitted);
      setaTotalApproved(counterApproved);
      setaTotalRejected(counterRejected);

      setLoading(false);
    };

    if (!loading) {
      getTa();
    }
  }, []);

  return (
    <PrimaryLayout user={user}>
      <main className="bg-black h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex flex-row space-x-4">
            <StatisticsCard
              variant="primary"
              icon={Files}
              label="Project bid disubmit"
              value={totalSubmitted}
              isLoading={loading}
            />
            <StatisticsCard
              variant="secondary"
              icon={Files}
              label="Project bid diterima"
              value={totalApproved}
              isLoading={loading}
            />
            <StatisticsCard
              variant="danger"
              icon={Files}
              label="Project bid ditolak"
              value={totalRejected}
              isLoading={loading}
            />
          </div>
          <button
            className="mt-2 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md"
            onClick={() => {
              push(`/ta/profile/${user?.getUsername()}`);
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
