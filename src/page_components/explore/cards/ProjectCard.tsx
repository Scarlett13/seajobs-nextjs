import MainCtaButton from "../../../components/buttons/mainctabutton/MainCtaButton";
import { IAmplifyProjectCard } from "../../../constants/exploreformconstants/ProjectCard";
import ModalDetailProyek from "../modals/ModalDetailProyek";
import styles from "./ProjectCard.module.css";

export interface IProjectCard {
  project: IAmplifyProjectCard;
  // key: string;
}

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  return (
    <div
      className={
        " flex flex-row rounded-none bg-form-bg shadow-lg dark:bg-neutral-700  px-6 py-6"
      }
    >
      <div className={"flex flex-col justify-center w-full"}>
        <h2 className={"text-white text-lg text-bold pb-4"}>
          {project.projectTitle}
        </h2>
        <p className={"text-white text-sm pb-16"}>
          {project.projectCategories}
        </p>
        <span className="h-1 w-full bg-white mb-4"></span>
        <div className={"flex flex-col md:flex-row justify-between"}>
          <div className={"flex flex-col justify-between sm:pb-4 mr-4"}>
            <p className={"text-white text-sm "}>Area proyek</p>
            <p className={"text-white text-sm "}>{project.projectLocation}</p>
          </div>
          <div className={"flex flex-col justify-between sm:pb-4 mr-4"}>
            <p className={"text-white text-sm "}>Nilai proyek</p>
            <p
              className={"text-white text-sm "}
            >{`IDR ${project.projectValue}`}</p>
          </div>
          <div className={"flex flex-col justify-between sm:pb-4 mr-4"}>
            <p className={"text-white text-sm "}>Durasi proyek</p>
            <p className={"text-white text-sm "}>{project.projectDuration}</p>
          </div>
          <div className={"flex flex-col justify-between sm:pb-4 mr-4"}>
            <p className={"text-white text-sm "}>Start proyek</p>
            <p className={"text-white text-sm "}>{project.projectStart}</p>
          </div>
          <div className={"flex flex-col justify-between sm:pb-4"}>
            <ModalDetailProyek project={project} taId={"taId"}>
              {({ openModal }) => (
                <MainCtaButton
                  className=" w-24 text-center xl:w-48 group relative flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-main-cta-button-bg hover:bg-main-cta-button-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  buttonName={"Detail"}
                  onClick={openModal}
                ></MainCtaButton>
              )}
            </ModalDetailProyek>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
