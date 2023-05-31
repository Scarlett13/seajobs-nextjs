import { useState } from "react";
import MainCtaButton from "../../../../components/buttons/mainctabutton/MainCtaButton";
import { IAmplifyProjectCard } from "../../../../constants/exploreformconstants/ProjectCard";
import ModalDetailProyek from "../../modals/ModalDetailProyek";
import { keahlianDbToValue } from "../../../../libs/StringUtils";
import { DateTime } from "luxon";

export interface IProjectCard {
  project: IAmplifyProjectCard;
  taId: string;
  isTa: boolean;
}

const ProjectBiddedCard: React.FC<IProjectCard> = ({ project, taId, isTa }) => {
  return (
    <div
      className={`${
        isTa ? "bg-neutral-700" : "bg-gray-100"
      } flex flex-row rounded-none  shadow-lg   px-6 py-6`}
    >
      <div className={"flex flex-col justify-center w-full"}>
        <h2
          className={`${
            isTa ? "text-white" : "text-gray-900"
          } text-lg text-bold pb-4`}
        >
          {project.projectTitle}
        </h2>
        <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm pb-16`}>
          {keahlianDbToValue(project.projectCategories)
            .toString()
            .replaceAll(",", ", ")}
        </p>
        <span
          className={`h-1 w-full mb-4 ${isTa ? "bg-white" : "bg-gray-900"}`}
        ></span>
        <div className={"flex flex-col sm:flex-row justify-between"}>
          <div className={"justify-between mb-4 mr-4"}>
            <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}>
              Area proyek
            </p>
            <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}>
              {project.projectLocation}
            </p>
          </div>
          <div className={"justify-between mb-4 mr-4"}>
            <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}>
              Nilai proyek
            </p>
            <p
              className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}
            >{`IDR ${project.projectValue}`}</p>
          </div>
          <div className={"justify-between mb-4 mr-4"}>
            <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}>
              Durasi proyek
            </p>
            <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}>
              {`${project.projectDuration} bulan`}
            </p>
          </div>
          <div className={"justify-between mb-4 mr-4"}>
            <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}>
              Start proyek
            </p>
            <p className={`${isTa ? "text-white" : "text-gray-900"} text-sm `}>
              {DateTime.fromISO(
                new Date(project.projectStart).toISOString()
              ).toFormat("dd MMMM yyyy", { locale: "id" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBiddedCard;
