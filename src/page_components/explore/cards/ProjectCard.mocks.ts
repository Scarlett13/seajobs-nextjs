import { IAmplifyProjectCard } from '../../../constants/exploreformconstants/ProjectCard';
import { IProjectCard } from './ProjectCard';

const dummyProject: IAmplifyProjectCard = 
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
  }

	const base: IProjectCard={
		project: dummyProject,
		taId: "ta id",
		isTa: false
	}


export const mockProjectCardProps = {
  base,
};