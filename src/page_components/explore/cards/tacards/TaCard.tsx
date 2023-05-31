import { keahlianDbToValue } from "../../../../libs/StringUtils";
import Button from "../../../..//components/buttons/custombuttons/Button";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import usePush from "@utils/UsePush";
import { IAmplifyExploreTaCards } from "../../../../constants/tacardconstants/TaCardConstants";

export interface ITaCard {
  taDetail: IAmplifyExploreTaCards;
  isTa: boolean;
}

const TaCards: React.FC<ITaCard> = ({ isTa, taDetail }) => {
  const push = usePush();

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
          {taDetail.taFullName}
        </h2>
        <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm pb-4`}>
          {keahlianDbToValue(taDetail.taExpertise)
            .toString()
            .replaceAll(",", ", ")}
        </p>
        {/* <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}>
          {`Status penerimaan: ${biddingStatusState}`}
        </p> */}
        <Button
          variant="primary"
          className={` w-48 text-center xl:w-48 group relative flex justify-center py-2 border border-transparent text-sm font-medium rounded-md bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
									text-white focus:ring-white disabled:bg-gray-500 mb-8 mt-4
								`}
          onClick={() => {
            push(`/com/explore/tadetail/${taDetail.taId}`);
          }}
        >
          Detail Tenaga ahli
        </Button>
        <span
          className={`h-1 w-full mb-4 ${isTa ? "bg-white" : "bg-gray-900"}`}
        ></span>
      </div>
    </div>
  );
};

export default TaCards;
