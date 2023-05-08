export interface IAmplifyProjectBidder {
	__typename: string,
  projectId: string,
  taId: string,
  taDetail?: any | null,
  konsultanId: string,
  konsultanDetail?: any | null,
  biddingStatus: string,
  comments?: string[] | null,
  createdOn: string,
  updatedOn: string,
  projectBiddersId?: string | null,
}