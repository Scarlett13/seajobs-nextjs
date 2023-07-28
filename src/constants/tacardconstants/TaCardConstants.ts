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

export interface IAmplifyExploreTaCards {
	taId: string,
	taFullName: string,
	taNikPassport: string,
	taDob: string,
	taCitizenship: string,
	taResidentStatus: string,
	taExpertise: string,
	taAddress: string,
	taSelfDescription?: string | null,
}