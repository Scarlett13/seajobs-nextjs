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
