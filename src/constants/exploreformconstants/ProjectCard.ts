  export interface IAmplifyProjectCard {
	typename?:string;
	projectId: string,
  projectTitle: string, 
  projectLocation: string,
  projectValue: string , 
  projectDuration: string,
  projectStart: string, 
  projectCategories: string,
  projectDescription: string,
  projectClient?: string | null,
  projectDeadline: string,
	projecImageUrl?: Array< string | null > | null,
  projectOwner: string,
  isActive: string,
  projectStatus: string,
  isDeleted: boolean,
	createdOn?: string;
	updatedOn?: string;
	arrayProjectAreas?: string[];
	arrayProjectategories?: string[];
}