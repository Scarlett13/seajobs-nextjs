import { keahlianDbToValue } from "@utils/StringUtils";
import { IAmplifyProjectCard } from "../../../constants/exploreformconstants/ProjectCard";
import { DateTime } from "luxon";
import MainCtaButton from "../../../components/buttons/mainctabutton/MainCtaButton";
import Button from "../../../components/buttons/custombuttons/Button";
import React from "react";
import { API, GraphQLQuery } from "@aws-amplify/api";
import { UpdateCompanyProjectBidderMutation } from "../../../API";
import * as mutations from "../../../graphql/mutations";
import * as queries from "../../../graphql/queries";
import { Toaster, toast } from "react-hot-toast";

export interface IProjectCard {
  tenagaAhli: any;
  konsultanId: string;
  biddingStatus: string;
  projectId: string;
  isTa: boolean;
  functiongg: Function;
  projectStatus: string;
}

const ProjectBidderCards: React.FC<IProjectCard> = ({
  tenagaAhli,
  isTa,
  biddingStatus,
  konsultanId,
  projectId,
  functiongg,
  projectStatus,
}) => {
  const [biddingStatusState, setBiddingStatusState] =
    React.useState<string>(biddingStatus);

  async function updateBiddingStatus(status: string) {
    const input = {
      konsultanId: konsultanId,
      taId: tenagaAhli.taId,
      projectId: projectId,
      biddingStatus: status,
    };

    try {
      const updatedStatus = await API.graphql<
        GraphQLQuery<UpdateCompanyProjectBidderMutation>
      >({
        query: mutations.updateCompanyProjectBidder,
        variables: { input: input },
      });

      setBiddingStatusState(status);
      functiongg();
      toast.success("Status penerimaan berhasil diubah");
      console.log(updatedStatus);
    } catch (error) {
      toast.error("Status penerimaan gagal diubah");

      console.log(error);
    }

    console.log("input: ", input);
  }
  return (
    <div
      className={`${
        isTa ? "bg-neutral-700" : "bg-gray-100"
      } flex flex-row rounded-none  shadow-lg   px-6 py-6`}
    >
      <Toaster />
      <div className={"flex flex-col justify-center w-full"}>
        <h2
          className={`${
            isTa ? "text-white" : "text-gray-900"
          } text-lg text-bold pb-4`}
        >
          {tenagaAhli.taFullName}
        </h2>
        <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm pb-4`}>
          {keahlianDbToValue(tenagaAhli.taExpertise)
            .toString()
            .replaceAll(",", ", ")}
        </p>
        <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm pb-16`}>
          {`Status penerimaan: ${biddingStatusState}`}
        </p>
        <span
          className={`h-1 w-full mb-4 ${isTa ? "bg-white" : "bg-gray-900"}`}
        ></span>
        <div
          className={`flex flex-col sm:flex-row justify-end ${
            projectStatus !== "Aktif" ? "hidden" : "block"
          }`}
        >
          <div className={"justify-end mb-2 mr-8"}>
            <Button
              variant="primary"
              className={` w-48 text-center xl:w-48 group relative flex justify-center py-2 border border-transparent text-sm font-medium rounded-md bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    text-white focus:ring-white disabled:bg-gray-500
                  `}
              onClick={() => {
                updateBiddingStatus("APPROVED");
              }}
              disabled={biddingStatusState === "APPROVED"}
            >
              Terima permintaan
            </Button>
          </div>
          <div className={"justify-between mb-2"}>
            <Button
              variant="primary"
              className={` w-48 text-center xl:w-48 group relative flex justify-center py-2 border border-transparent text-sm font-medium rounded-md bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    text-white focus:ring-white disabled:bg-gray-500
                  `}
              onClick={() => {
                updateBiddingStatus("REJECTED");
              }}
              disabled={biddingStatusState === "REJECTED"}
            >
              Tolak permintaan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBidderCards;
