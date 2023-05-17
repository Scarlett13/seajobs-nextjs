export interface IAmplifyCompanyProjectBidder {
  projectId: string;
  taId: string;
  konsultanId: string;
  biddingStatus: string;
  createdOn: string;
  updatedOn: string;
  projectBiddersId?: string | null;
  projectBiddersProjectOwner?: string | null;
  projectBiddersIsActive?: string | null;
}

export interface IAmplifyProjectByOwner {
  projectId: string;
  projectTitle: string;
  projectLocation: string;
  projectValue: string;
  projectDuration: string;
  projectStart: string;
  projectCategories: string;
  projectDescription: string;
  projectClient: string;
  projectDeadline: string;
  projecImageUrl: (string | null)[] | null | undefined;
  projectOwner: string;
  isActive: string;
  companyOwner?: any;
  projectStatus: string;
  isDeleted: Boolean;
}
