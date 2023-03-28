/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateKonsultanInput = {
  konsultanId: string,
  konsultanName: string,
  konsultanLocation: string,
  konsultanAddress: string,
  konsultanEmail: Array< string >,
  konsultanPhoneNumber: Array< string >,
  konsultanRangeTotalEmployees: string,
  konsultanPIC: string,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type ModelKonsultanConditionInput = {
  konsultanName?: ModelStringInput | null,
  konsultanLocation?: ModelStringInput | null,
  konsultanAddress?: ModelStringInput | null,
  konsultanEmail?: ModelStringInput | null,
  konsultanPhoneNumber?: ModelStringInput | null,
  konsultanRangeTotalEmployees?: ModelStringInput | null,
  konsultanPIC?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelKonsultanConditionInput | null > | null,
  or?: Array< ModelKonsultanConditionInput | null > | null,
  not?: ModelKonsultanConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Konsultan = {
  __typename: "Konsultan",
  konsultanId: string,
  konsultanName: string,
  konsultanLocation: string,
  konsultanAddress: string,
  konsultanEmail: Array< string >,
  konsultanPhoneNumber: Array< string >,
  konsultanRangeTotalEmployees: string,
  konsultanPIC: string,
  projectBidders?: ModelCompanyProjectBidderConnection | null,
  projects?:  Array<Project | null > | null,
  createdOn: string,
  updatedOn: string,
};

export type ModelCompanyProjectBidderConnection = {
  __typename: "ModelCompanyProjectBidderConnection",
  items:  Array<CompanyProjectBidder | null >,
  nextToken?: string | null,
};

export type CompanyProjectBidder = {
  __typename: "CompanyProjectBidder",
  projectId: string,
  taId: string,
  konsultanId: string,
  biddingStatus: EnumBiddingStatus,
  comments?: Array< string > | null,
  createdOn: string,
  updatedOn: string,
  projectBiddersId?: string | null,
  projectBiddersIsActive?: string | null,
  projectBiddersProjectDeadline?: string | null,
  projectBiddersProjectStart?: string | null,
};

export enum EnumBiddingStatus {
  SUBMITTED = "SUBMITTED",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}


export type Project = {
  __typename: "Project",
  projectId: string,
  projectTitle: string,
  projectLocation: string,
  projectValue: string,
  projectDuration: string,
  projectStart: string,
  projectCategories: Array< string >,
  projectDeadline: string,
  projectSubCategory: Array< EnumExpertise >,
  bidders?: ModelCompanyProjectBidderConnection | null,
  projectOwner: string,
  isActive: string,
  isDeleted: boolean,
  createdOn: string,
  updatedOn: string,
};

export enum EnumExpertise {
  Hukum = "Hukum",
  Keuangan_dan_Ekonomi = "Keuangan_dan_Ekonomi",
  Kerja_Sama = "Kerja_Sama",
  Manajemen_Resiko = "Manajemen_Resiko",
  Sosial_dan_LARAP = "Sosial_dan_LARAP",
  Pengadaan = "Pengadaan",
}


export type UpdateKonsultanInput = {
  konsultanId: string,
  konsultanName?: string | null,
  konsultanLocation?: string | null,
  konsultanAddress?: string | null,
  konsultanEmail?: Array< string > | null,
  konsultanPhoneNumber?: Array< string > | null,
  konsultanRangeTotalEmployees?: string | null,
  konsultanPIC?: string | null,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type DeleteKonsultanInput = {
  konsultanId: string,
};

export type CreateTenagaAhliInput = {
  taId: string,
  taFullName: string,
  taNikPassport: string,
  taDob: string,
  taCitizenship: string,
  taResidentStatus: string,
  taExpertise: string,
  taAddress: string,
  taEmail: string,
  taPhoneNumber: string,
  taPortfolioLink?: Array< string > | null,
  taSelfDescription?: string | null,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type ModelTenagaAhliConditionInput = {
  taFullName?: ModelStringInput | null,
  taNikPassport?: ModelStringInput | null,
  taDob?: ModelStringInput | null,
  taCitizenship?: ModelStringInput | null,
  taResidentStatus?: ModelStringInput | null,
  taExpertise?: ModelStringInput | null,
  taAddress?: ModelStringInput | null,
  taEmail?: ModelStringInput | null,
  taPhoneNumber?: ModelStringInput | null,
  taPortfolioLink?: ModelStringInput | null,
  taSelfDescription?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelTenagaAhliConditionInput | null > | null,
  or?: Array< ModelTenagaAhliConditionInput | null > | null,
  not?: ModelTenagaAhliConditionInput | null,
};

export type TenagaAhli = {
  __typename: "TenagaAhli",
  taId: string,
  taFullName: string,
  taNikPassport: string,
  taDob: string,
  taCitizenship: string,
  taResidentStatus: string,
  taExpertise: string,
  taAddress: string,
  taEmail: string,
  taPhoneNumber: string,
  taPortfolioLink?: Array< string > | null,
  taSelfDescription?: string | null,
  pengalamanKerja?: ModelPengalamanKerjaConnection | null,
  projectBidded?: ModelCompanyProjectBidderConnection | null,
  pendidikanSertifikasi?: ModelPendidikanSertifikasiConnection | null,
  createdOn: string,
  updatedOn: string,
};

export type ModelPengalamanKerjaConnection = {
  __typename: "ModelPengalamanKerjaConnection",
  items:  Array<PengalamanKerja | null >,
  nextToken?: string | null,
};

export type PengalamanKerja = {
  __typename: "PengalamanKerja",
  taId: string,
  projectId: string,
  companyName: string,
  companyId: string,
  companyaddress: string,
  projectName: string,
  sanitisedCompanyName: string,
  sanitisedProjectName: string,
  employmentType: string,
  projectClient: string,
  position: string,
  contractStart: string,
  projectStartMonth: string,
  projectStartYear: string,
  projectEndMonth: string,
  projectEndYear: string,
  isFinished: string,
  projectLocation: string,
  projectDescription: string,
  createdOn: string,
  updatedOn: string,
};

export type ModelPendidikanSertifikasiConnection = {
  __typename: "ModelPendidikanSertifikasiConnection",
  items:  Array<PendidikanSertifikasi | null >,
  nextToken?: string | null,
};

export type PendidikanSertifikasi = {
  __typename: "PendidikanSertifikasi",
  taId: string,
  pendidikanId: string,
  pendidikanType: string,
  institutionName: string,
  sanitisedInstitutionName: string,
  courseName: string,
  pendidikanDescription?: string | null,
  institutionAddress?: string | null,
  institutionUrl?: string | null,
  entryMonth: string,
  entryYear: string,
  endMonth: string,
  endYear: string,
  createdOn: string,
  updatedOn: string,
};

export type UpdateTenagaAhliInput = {
  taId: string,
  taFullName?: string | null,
  taNikPassport?: string | null,
  taDob?: string | null,
  taCitizenship?: string | null,
  taResidentStatus?: string | null,
  taExpertise?: string | null,
  taAddress?: string | null,
  taEmail?: string | null,
  taPhoneNumber?: string | null,
  taPortfolioLink?: Array< string > | null,
  taSelfDescription?: string | null,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type DeleteTenagaAhliInput = {
  taId: string,
};

export type CreatePengalamanKerjaInput = {
  taId: string,
  projectId: string,
  companyName: string,
  companyId: string,
  companyaddress: string,
  projectName: string,
  sanitisedCompanyName: string,
  sanitisedProjectName: string,
  employmentType: string,
  projectClient: string,
  position: string,
  contractStart: string,
  projectStartMonth: string,
  projectStartYear: string,
  projectEndMonth: string,
  projectEndYear: string,
  isFinished: string,
  projectLocation: string,
  projectDescription: string,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type ModelPengalamanKerjaConditionInput = {
  companyName?: ModelStringInput | null,
  companyaddress?: ModelStringInput | null,
  projectName?: ModelStringInput | null,
  sanitisedCompanyName?: ModelStringInput | null,
  sanitisedProjectName?: ModelStringInput | null,
  employmentType?: ModelStringInput | null,
  projectClient?: ModelStringInput | null,
  position?: ModelStringInput | null,
  contractStart?: ModelStringInput | null,
  projectStartMonth?: ModelStringInput | null,
  projectStartYear?: ModelStringInput | null,
  projectEndMonth?: ModelStringInput | null,
  projectEndYear?: ModelStringInput | null,
  isFinished?: ModelStringInput | null,
  projectLocation?: ModelStringInput | null,
  projectDescription?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelPengalamanKerjaConditionInput | null > | null,
  or?: Array< ModelPengalamanKerjaConditionInput | null > | null,
  not?: ModelPengalamanKerjaConditionInput | null,
};

export type UpdatePengalamanKerjaInput = {
  taId: string,
  projectId: string,
  companyName?: string | null,
  companyId: string,
  companyaddress?: string | null,
  projectName?: string | null,
  sanitisedCompanyName?: string | null,
  sanitisedProjectName?: string | null,
  employmentType?: string | null,
  projectClient?: string | null,
  position?: string | null,
  contractStart?: string | null,
  projectStartMonth?: string | null,
  projectStartYear?: string | null,
  projectEndMonth?: string | null,
  projectEndYear?: string | null,
  isFinished?: string | null,
  projectLocation?: string | null,
  projectDescription?: string | null,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type DeletePengalamanKerjaInput = {
  taId: string,
  companyId: string,
  projectId: string,
};

export type CreatePendidikanSertifikasiInput = {
  taId: string,
  pendidikanId: string,
  pendidikanType: string,
  institutionName: string,
  sanitisedInstitutionName: string,
  courseName: string,
  pendidikanDescription?: string | null,
  institutionAddress?: string | null,
  institutionUrl?: string | null,
  entryMonth: string,
  entryYear: string,
  endMonth: string,
  endYear: string,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type ModelPendidikanSertifikasiConditionInput = {
  pendidikanType?: ModelStringInput | null,
  institutionName?: ModelStringInput | null,
  sanitisedInstitutionName?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  pendidikanDescription?: ModelStringInput | null,
  institutionAddress?: ModelStringInput | null,
  institutionUrl?: ModelStringInput | null,
  entryMonth?: ModelStringInput | null,
  entryYear?: ModelStringInput | null,
  endMonth?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelPendidikanSertifikasiConditionInput | null > | null,
  or?: Array< ModelPendidikanSertifikasiConditionInput | null > | null,
  not?: ModelPendidikanSertifikasiConditionInput | null,
};

export type UpdatePendidikanSertifikasiInput = {
  taId: string,
  pendidikanId: string,
  pendidikanType?: string | null,
  institutionName?: string | null,
  sanitisedInstitutionName?: string | null,
  courseName?: string | null,
  pendidikanDescription?: string | null,
  institutionAddress?: string | null,
  institutionUrl?: string | null,
  entryMonth?: string | null,
  entryYear?: string | null,
  endMonth?: string | null,
  endYear: string,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type DeletePendidikanSertifikasiInput = {
  taId: string,
  endYear: string,
  pendidikanId: string,
};

export type CreateProjectInput = {
  projectId: string,
  projectTitle: string,
  projectLocation: string,
  projectValue: string,
  projectDuration: string,
  projectStart: string,
  projectCategories: Array< string >,
  projectDeadline: string,
  projectSubCategory: Array< EnumExpertise >,
  projectOwner: string,
  isActive: string,
  isDeleted: boolean,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type ModelProjectConditionInput = {
  projectTitle?: ModelStringInput | null,
  projectLocation?: ModelStringInput | null,
  projectValue?: ModelStringInput | null,
  projectDuration?: ModelStringInput | null,
  projectCategories?: ModelStringInput | null,
  projectSubCategory?: ModelEnumExpertiseInput | null,
  projectOwner?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelEnumExpertiseInput = {
  eq?: EnumExpertise | null,
  ne?: EnumExpertise | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProjectInput = {
  projectId: string,
  projectTitle?: string | null,
  projectLocation?: string | null,
  projectValue?: string | null,
  projectDuration?: string | null,
  projectStart: string,
  projectCategories?: Array< string > | null,
  projectDeadline: string,
  projectSubCategory?: Array< EnumExpertise > | null,
  projectOwner?: string | null,
  isActive: string,
  isDeleted?: boolean | null,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type DeleteProjectInput = {
  projectId: string,
  isActive: string,
  projectDeadline: string,
  projectStart: string,
};

export type CreateCompanyProjectBidderInput = {
  projectId: string,
  taId: string,
  konsultanId: string,
  biddingStatus: EnumBiddingStatus,
  comments?: Array< string > | null,
  createdOn?: string | null,
  updatedOn?: string | null,
  projectBiddersId?: string | null,
  projectBiddersIsActive?: string | null,
  projectBiddersProjectDeadline?: string | null,
  projectBiddersProjectStart?: string | null,
};

export type ModelCompanyProjectBidderConditionInput = {
  taId?: ModelStringInput | null,
  konsultanId?: ModelStringInput | null,
  biddingStatus?: ModelEnumBiddingStatusInput | null,
  comments?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelCompanyProjectBidderConditionInput | null > | null,
  or?: Array< ModelCompanyProjectBidderConditionInput | null > | null,
  not?: ModelCompanyProjectBidderConditionInput | null,
  projectBiddersId?: ModelIDInput | null,
  projectBiddersIsActive?: ModelStringInput | null,
  projectBiddersProjectDeadline?: ModelStringInput | null,
  projectBiddersProjectStart?: ModelStringInput | null,
};

export type ModelEnumBiddingStatusInput = {
  eq?: EnumBiddingStatus | null,
  ne?: EnumBiddingStatus | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCompanyProjectBidderInput = {
  projectId: string,
  taId?: string | null,
  konsultanId?: string | null,
  biddingStatus?: EnumBiddingStatus | null,
  comments?: Array< string > | null,
  createdOn?: string | null,
  updatedOn?: string | null,
  projectBiddersId?: string | null,
  projectBiddersIsActive?: string | null,
  projectBiddersProjectDeadline?: string | null,
  projectBiddersProjectStart?: string | null,
};

export type DeleteCompanyProjectBidderInput = {
  projectId: string,
};

export type ModelKonsultanFilterInput = {
  konsultanId?: ModelStringInput | null,
  konsultanName?: ModelStringInput | null,
  konsultanLocation?: ModelStringInput | null,
  konsultanAddress?: ModelStringInput | null,
  konsultanEmail?: ModelStringInput | null,
  konsultanPhoneNumber?: ModelStringInput | null,
  konsultanRangeTotalEmployees?: ModelStringInput | null,
  konsultanPIC?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelKonsultanFilterInput | null > | null,
  or?: Array< ModelKonsultanFilterInput | null > | null,
  not?: ModelKonsultanFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelKonsultanConnection = {
  __typename: "ModelKonsultanConnection",
  items:  Array<Konsultan | null >,
  nextToken?: string | null,
};

export type ModelTenagaAhliFilterInput = {
  taId?: ModelStringInput | null,
  taFullName?: ModelStringInput | null,
  taNikPassport?: ModelStringInput | null,
  taDob?: ModelStringInput | null,
  taCitizenship?: ModelStringInput | null,
  taResidentStatus?: ModelStringInput | null,
  taExpertise?: ModelStringInput | null,
  taAddress?: ModelStringInput | null,
  taEmail?: ModelStringInput | null,
  taPhoneNumber?: ModelStringInput | null,
  taPortfolioLink?: ModelStringInput | null,
  taSelfDescription?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelTenagaAhliFilterInput | null > | null,
  or?: Array< ModelTenagaAhliFilterInput | null > | null,
  not?: ModelTenagaAhliFilterInput | null,
};

export type ModelTenagaAhliConnection = {
  __typename: "ModelTenagaAhliConnection",
  items:  Array<TenagaAhli | null >,
  nextToken?: string | null,
};

export type ModelPengalamanKerjaPrimaryCompositeKeyConditionInput = {
  eq?: ModelPengalamanKerjaPrimaryCompositeKeyInput | null,
  le?: ModelPengalamanKerjaPrimaryCompositeKeyInput | null,
  lt?: ModelPengalamanKerjaPrimaryCompositeKeyInput | null,
  ge?: ModelPengalamanKerjaPrimaryCompositeKeyInput | null,
  gt?: ModelPengalamanKerjaPrimaryCompositeKeyInput | null,
  between?: Array< ModelPengalamanKerjaPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelPengalamanKerjaPrimaryCompositeKeyInput | null,
};

export type ModelPengalamanKerjaPrimaryCompositeKeyInput = {
  companyId?: string | null,
  projectId?: string | null,
};

export type ModelPengalamanKerjaFilterInput = {
  taId?: ModelStringInput | null,
  projectId?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  companyId?: ModelStringInput | null,
  companyaddress?: ModelStringInput | null,
  projectName?: ModelStringInput | null,
  sanitisedCompanyName?: ModelStringInput | null,
  sanitisedProjectName?: ModelStringInput | null,
  employmentType?: ModelStringInput | null,
  projectClient?: ModelStringInput | null,
  position?: ModelStringInput | null,
  contractStart?: ModelStringInput | null,
  projectStartMonth?: ModelStringInput | null,
  projectStartYear?: ModelStringInput | null,
  projectEndMonth?: ModelStringInput | null,
  projectEndYear?: ModelStringInput | null,
  isFinished?: ModelStringInput | null,
  projectLocation?: ModelStringInput | null,
  projectDescription?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelPengalamanKerjaFilterInput | null > | null,
  or?: Array< ModelPengalamanKerjaFilterInput | null > | null,
  not?: ModelPengalamanKerjaFilterInput | null,
};

export type ModelPendidikanSertifikasiPrimaryCompositeKeyConditionInput = {
  eq?: ModelPendidikanSertifikasiPrimaryCompositeKeyInput | null,
  le?: ModelPendidikanSertifikasiPrimaryCompositeKeyInput | null,
  lt?: ModelPendidikanSertifikasiPrimaryCompositeKeyInput | null,
  ge?: ModelPendidikanSertifikasiPrimaryCompositeKeyInput | null,
  gt?: ModelPendidikanSertifikasiPrimaryCompositeKeyInput | null,
  between?: Array< ModelPendidikanSertifikasiPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelPendidikanSertifikasiPrimaryCompositeKeyInput | null,
};

export type ModelPendidikanSertifikasiPrimaryCompositeKeyInput = {
  endYear?: string | null,
  pendidikanId?: string | null,
};

export type ModelPendidikanSertifikasiFilterInput = {
  taId?: ModelStringInput | null,
  pendidikanId?: ModelStringInput | null,
  pendidikanType?: ModelStringInput | null,
  institutionName?: ModelStringInput | null,
  sanitisedInstitutionName?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  pendidikanDescription?: ModelStringInput | null,
  institutionAddress?: ModelStringInput | null,
  institutionUrl?: ModelStringInput | null,
  entryMonth?: ModelStringInput | null,
  entryYear?: ModelStringInput | null,
  endMonth?: ModelStringInput | null,
  endYear?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelPendidikanSertifikasiFilterInput | null > | null,
  or?: Array< ModelPendidikanSertifikasiFilterInput | null > | null,
  not?: ModelPendidikanSertifikasiFilterInput | null,
};

export type ModelProjectPrimaryCompositeKeyConditionInput = {
  eq?: ModelProjectPrimaryCompositeKeyInput | null,
  le?: ModelProjectPrimaryCompositeKeyInput | null,
  lt?: ModelProjectPrimaryCompositeKeyInput | null,
  ge?: ModelProjectPrimaryCompositeKeyInput | null,
  gt?: ModelProjectPrimaryCompositeKeyInput | null,
  between?: Array< ModelProjectPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelProjectPrimaryCompositeKeyInput | null,
};

export type ModelProjectPrimaryCompositeKeyInput = {
  isActive?: string | null,
  projectDeadline?: string | null,
  projectStart?: string | null,
};

export type ModelProjectFilterInput = {
  projectId?: ModelStringInput | null,
  projectTitle?: ModelStringInput | null,
  projectLocation?: ModelStringInput | null,
  projectValue?: ModelStringInput | null,
  projectDuration?: ModelStringInput | null,
  projectStart?: ModelStringInput | null,
  projectCategories?: ModelStringInput | null,
  projectDeadline?: ModelStringInput | null,
  projectSubCategory?: ModelEnumExpertiseInput | null,
  projectOwner?: ModelStringInput | null,
  isActive?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelCompanyProjectBidderFilterInput = {
  projectId?: ModelStringInput | null,
  taId?: ModelStringInput | null,
  konsultanId?: ModelStringInput | null,
  biddingStatus?: ModelEnumBiddingStatusInput | null,
  comments?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelCompanyProjectBidderFilterInput | null > | null,
  or?: Array< ModelCompanyProjectBidderFilterInput | null > | null,
  not?: ModelCompanyProjectBidderFilterInput | null,
  projectBiddersId?: ModelIDInput | null,
  projectBiddersIsActive?: ModelStringInput | null,
  projectBiddersProjectDeadline?: ModelStringInput | null,
  projectBiddersProjectStart?: ModelStringInput | null,
};

export type ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyConditionInput = {
  eq?: ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyInput | null,
  le?: ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyInput | null,
  lt?: ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyInput | null,
  ge?: ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyInput | null,
  gt?: ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyInput | null,
  between?: Array< ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyInput | null > | null,
  beginsWith?: ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyInput | null,
};

export type ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyInput = {
  contractStart?: string | null,
  isFinished?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyConditionInput = {
  eq?: ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyInput | null,
  le?: ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyInput | null,
  lt?: ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyInput | null,
  ge?: ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyInput | null,
  gt?: ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyInput | null,
  between?: Array< ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyInput | null > | null,
  beginsWith?: ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyInput | null,
};

export type ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyInput = {
  pendidikanId?: string | null,
  courseName?: string | null,
};

export type ModelProjectProjectByOwnerCompositeKeyConditionInput = {
  eq?: ModelProjectProjectByOwnerCompositeKeyInput | null,
  le?: ModelProjectProjectByOwnerCompositeKeyInput | null,
  lt?: ModelProjectProjectByOwnerCompositeKeyInput | null,
  ge?: ModelProjectProjectByOwnerCompositeKeyInput | null,
  gt?: ModelProjectProjectByOwnerCompositeKeyInput | null,
  between?: Array< ModelProjectProjectByOwnerCompositeKeyInput | null > | null,
  beginsWith?: ModelProjectProjectByOwnerCompositeKeyInput | null,
};

export type ModelProjectProjectByOwnerCompositeKeyInput = {
  projectStart?: string | null,
  isActive?: string | null,
};

export type ModelSubscriptionKonsultanFilterInput = {
  konsultanId?: ModelSubscriptionStringInput | null,
  konsultanName?: ModelSubscriptionStringInput | null,
  konsultanLocation?: ModelSubscriptionStringInput | null,
  konsultanAddress?: ModelSubscriptionStringInput | null,
  konsultanEmail?: ModelSubscriptionStringInput | null,
  konsultanPhoneNumber?: ModelSubscriptionStringInput | null,
  konsultanRangeTotalEmployees?: ModelSubscriptionStringInput | null,
  konsultanPIC?: ModelSubscriptionStringInput | null,
  createdOn?: ModelSubscriptionStringInput | null,
  updatedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionKonsultanFilterInput | null > | null,
  or?: Array< ModelSubscriptionKonsultanFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTenagaAhliFilterInput = {
  taId?: ModelSubscriptionStringInput | null,
  taFullName?: ModelSubscriptionStringInput | null,
  taNikPassport?: ModelSubscriptionStringInput | null,
  taDob?: ModelSubscriptionStringInput | null,
  taCitizenship?: ModelSubscriptionStringInput | null,
  taResidentStatus?: ModelSubscriptionStringInput | null,
  taExpertise?: ModelSubscriptionStringInput | null,
  taAddress?: ModelSubscriptionStringInput | null,
  taEmail?: ModelSubscriptionStringInput | null,
  taPhoneNumber?: ModelSubscriptionStringInput | null,
  taPortfolioLink?: ModelSubscriptionStringInput | null,
  taSelfDescription?: ModelSubscriptionStringInput | null,
  createdOn?: ModelSubscriptionStringInput | null,
  updatedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTenagaAhliFilterInput | null > | null,
  or?: Array< ModelSubscriptionTenagaAhliFilterInput | null > | null,
};

export type ModelSubscriptionPengalamanKerjaFilterInput = {
  taId?: ModelSubscriptionStringInput | null,
  projectId?: ModelSubscriptionStringInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  companyId?: ModelSubscriptionStringInput | null,
  companyaddress?: ModelSubscriptionStringInput | null,
  projectName?: ModelSubscriptionStringInput | null,
  sanitisedCompanyName?: ModelSubscriptionStringInput | null,
  sanitisedProjectName?: ModelSubscriptionStringInput | null,
  employmentType?: ModelSubscriptionStringInput | null,
  projectClient?: ModelSubscriptionStringInput | null,
  position?: ModelSubscriptionStringInput | null,
  contractStart?: ModelSubscriptionStringInput | null,
  projectStartMonth?: ModelSubscriptionStringInput | null,
  projectStartYear?: ModelSubscriptionStringInput | null,
  projectEndMonth?: ModelSubscriptionStringInput | null,
  projectEndYear?: ModelSubscriptionStringInput | null,
  isFinished?: ModelSubscriptionStringInput | null,
  projectLocation?: ModelSubscriptionStringInput | null,
  projectDescription?: ModelSubscriptionStringInput | null,
  createdOn?: ModelSubscriptionStringInput | null,
  updatedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPengalamanKerjaFilterInput | null > | null,
  or?: Array< ModelSubscriptionPengalamanKerjaFilterInput | null > | null,
};

export type ModelSubscriptionPendidikanSertifikasiFilterInput = {
  taId?: ModelSubscriptionStringInput | null,
  pendidikanId?: ModelSubscriptionStringInput | null,
  pendidikanType?: ModelSubscriptionStringInput | null,
  institutionName?: ModelSubscriptionStringInput | null,
  sanitisedInstitutionName?: ModelSubscriptionStringInput | null,
  courseName?: ModelSubscriptionStringInput | null,
  pendidikanDescription?: ModelSubscriptionStringInput | null,
  institutionAddress?: ModelSubscriptionStringInput | null,
  institutionUrl?: ModelSubscriptionStringInput | null,
  entryMonth?: ModelSubscriptionStringInput | null,
  entryYear?: ModelSubscriptionStringInput | null,
  endMonth?: ModelSubscriptionStringInput | null,
  endYear?: ModelSubscriptionStringInput | null,
  createdOn?: ModelSubscriptionStringInput | null,
  updatedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPendidikanSertifikasiFilterInput | null > | null,
  or?: Array< ModelSubscriptionPendidikanSertifikasiFilterInput | null > | null,
};

export type ModelSubscriptionProjectFilterInput = {
  projectId?: ModelSubscriptionStringInput | null,
  projectTitle?: ModelSubscriptionStringInput | null,
  projectLocation?: ModelSubscriptionStringInput | null,
  projectValue?: ModelSubscriptionStringInput | null,
  projectDuration?: ModelSubscriptionStringInput | null,
  projectStart?: ModelSubscriptionStringInput | null,
  projectCategories?: ModelSubscriptionStringInput | null,
  projectDeadline?: ModelSubscriptionStringInput | null,
  projectSubCategory?: ModelSubscriptionStringInput | null,
  projectOwner?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionStringInput | null,
  isDeleted?: ModelSubscriptionBooleanInput | null,
  createdOn?: ModelSubscriptionStringInput | null,
  updatedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCompanyProjectBidderFilterInput = {
  projectId?: ModelSubscriptionStringInput | null,
  taId?: ModelSubscriptionStringInput | null,
  konsultanId?: ModelSubscriptionStringInput | null,
  biddingStatus?: ModelSubscriptionStringInput | null,
  comments?: ModelSubscriptionStringInput | null,
  createdOn?: ModelSubscriptionStringInput | null,
  updatedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyProjectBidderFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyProjectBidderFilterInput | null > | null,
};

export type CreateKonsultanMutationVariables = {
  input: CreateKonsultanInput,
  condition?: ModelKonsultanConditionInput | null,
};

export type CreateKonsultanMutation = {
  createKonsultan?:  {
    __typename: "Konsultan",
    konsultanId: string,
    konsultanName: string,
    konsultanLocation: string,
    konsultanAddress: string,
    konsultanEmail: Array< string >,
    konsultanPhoneNumber: Array< string >,
    konsultanRangeTotalEmployees: string,
    konsultanPIC: string,
    projectBidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projects?:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null > | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdateKonsultanMutationVariables = {
  input: UpdateKonsultanInput,
  condition?: ModelKonsultanConditionInput | null,
};

export type UpdateKonsultanMutation = {
  updateKonsultan?:  {
    __typename: "Konsultan",
    konsultanId: string,
    konsultanName: string,
    konsultanLocation: string,
    konsultanAddress: string,
    konsultanEmail: Array< string >,
    konsultanPhoneNumber: Array< string >,
    konsultanRangeTotalEmployees: string,
    konsultanPIC: string,
    projectBidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projects?:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null > | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeleteKonsultanMutationVariables = {
  input: DeleteKonsultanInput,
  condition?: ModelKonsultanConditionInput | null,
};

export type DeleteKonsultanMutation = {
  deleteKonsultan?:  {
    __typename: "Konsultan",
    konsultanId: string,
    konsultanName: string,
    konsultanLocation: string,
    konsultanAddress: string,
    konsultanEmail: Array< string >,
    konsultanPhoneNumber: Array< string >,
    konsultanRangeTotalEmployees: string,
    konsultanPIC: string,
    projectBidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projects?:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null > | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type CreateTenagaAhliMutationVariables = {
  input: CreateTenagaAhliInput,
  condition?: ModelTenagaAhliConditionInput | null,
};

export type CreateTenagaAhliMutation = {
  createTenagaAhli?:  {
    __typename: "TenagaAhli",
    taId: string,
    taFullName: string,
    taNikPassport: string,
    taDob: string,
    taCitizenship: string,
    taResidentStatus: string,
    taExpertise: string,
    taAddress: string,
    taEmail: string,
    taPhoneNumber: string,
    taPortfolioLink?: Array< string > | null,
    taSelfDescription?: string | null,
    pengalamanKerja?:  {
      __typename: "ModelPengalamanKerjaConnection",
      nextToken?: string | null,
    } | null,
    projectBidded?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    pendidikanSertifikasi?:  {
      __typename: "ModelPendidikanSertifikasiConnection",
      nextToken?: string | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdateTenagaAhliMutationVariables = {
  input: UpdateTenagaAhliInput,
  condition?: ModelTenagaAhliConditionInput | null,
};

export type UpdateTenagaAhliMutation = {
  updateTenagaAhli?:  {
    __typename: "TenagaAhli",
    taId: string,
    taFullName: string,
    taNikPassport: string,
    taDob: string,
    taCitizenship: string,
    taResidentStatus: string,
    taExpertise: string,
    taAddress: string,
    taEmail: string,
    taPhoneNumber: string,
    taPortfolioLink?: Array< string > | null,
    taSelfDescription?: string | null,
    pengalamanKerja?:  {
      __typename: "ModelPengalamanKerjaConnection",
      nextToken?: string | null,
    } | null,
    projectBidded?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    pendidikanSertifikasi?:  {
      __typename: "ModelPendidikanSertifikasiConnection",
      nextToken?: string | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeleteTenagaAhliMutationVariables = {
  input: DeleteTenagaAhliInput,
  condition?: ModelTenagaAhliConditionInput | null,
};

export type DeleteTenagaAhliMutation = {
  deleteTenagaAhli?:  {
    __typename: "TenagaAhli",
    taId: string,
    taFullName: string,
    taNikPassport: string,
    taDob: string,
    taCitizenship: string,
    taResidentStatus: string,
    taExpertise: string,
    taAddress: string,
    taEmail: string,
    taPhoneNumber: string,
    taPortfolioLink?: Array< string > | null,
    taSelfDescription?: string | null,
    pengalamanKerja?:  {
      __typename: "ModelPengalamanKerjaConnection",
      nextToken?: string | null,
    } | null,
    projectBidded?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    pendidikanSertifikasi?:  {
      __typename: "ModelPendidikanSertifikasiConnection",
      nextToken?: string | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type CreatePengalamanKerjaMutationVariables = {
  input: CreatePengalamanKerjaInput,
  condition?: ModelPengalamanKerjaConditionInput | null,
};

export type CreatePengalamanKerjaMutation = {
  createPengalamanKerja?:  {
    __typename: "PengalamanKerja",
    taId: string,
    projectId: string,
    companyName: string,
    companyId: string,
    companyaddress: string,
    projectName: string,
    sanitisedCompanyName: string,
    sanitisedProjectName: string,
    employmentType: string,
    projectClient: string,
    position: string,
    contractStart: string,
    projectStartMonth: string,
    projectStartYear: string,
    projectEndMonth: string,
    projectEndYear: string,
    isFinished: string,
    projectLocation: string,
    projectDescription: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdatePengalamanKerjaMutationVariables = {
  input: UpdatePengalamanKerjaInput,
  condition?: ModelPengalamanKerjaConditionInput | null,
};

export type UpdatePengalamanKerjaMutation = {
  updatePengalamanKerja?:  {
    __typename: "PengalamanKerja",
    taId: string,
    projectId: string,
    companyName: string,
    companyId: string,
    companyaddress: string,
    projectName: string,
    sanitisedCompanyName: string,
    sanitisedProjectName: string,
    employmentType: string,
    projectClient: string,
    position: string,
    contractStart: string,
    projectStartMonth: string,
    projectStartYear: string,
    projectEndMonth: string,
    projectEndYear: string,
    isFinished: string,
    projectLocation: string,
    projectDescription: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeletePengalamanKerjaMutationVariables = {
  input: DeletePengalamanKerjaInput,
  condition?: ModelPengalamanKerjaConditionInput | null,
};

export type DeletePengalamanKerjaMutation = {
  deletePengalamanKerja?:  {
    __typename: "PengalamanKerja",
    taId: string,
    projectId: string,
    companyName: string,
    companyId: string,
    companyaddress: string,
    projectName: string,
    sanitisedCompanyName: string,
    sanitisedProjectName: string,
    employmentType: string,
    projectClient: string,
    position: string,
    contractStart: string,
    projectStartMonth: string,
    projectStartYear: string,
    projectEndMonth: string,
    projectEndYear: string,
    isFinished: string,
    projectLocation: string,
    projectDescription: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type CreatePendidikanSertifikasiMutationVariables = {
  input: CreatePendidikanSertifikasiInput,
  condition?: ModelPendidikanSertifikasiConditionInput | null,
};

export type CreatePendidikanSertifikasiMutation = {
  createPendidikanSertifikasi?:  {
    __typename: "PendidikanSertifikasi",
    taId: string,
    pendidikanId: string,
    pendidikanType: string,
    institutionName: string,
    sanitisedInstitutionName: string,
    courseName: string,
    pendidikanDescription?: string | null,
    institutionAddress?: string | null,
    institutionUrl?: string | null,
    entryMonth: string,
    entryYear: string,
    endMonth: string,
    endYear: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdatePendidikanSertifikasiMutationVariables = {
  input: UpdatePendidikanSertifikasiInput,
  condition?: ModelPendidikanSertifikasiConditionInput | null,
};

export type UpdatePendidikanSertifikasiMutation = {
  updatePendidikanSertifikasi?:  {
    __typename: "PendidikanSertifikasi",
    taId: string,
    pendidikanId: string,
    pendidikanType: string,
    institutionName: string,
    sanitisedInstitutionName: string,
    courseName: string,
    pendidikanDescription?: string | null,
    institutionAddress?: string | null,
    institutionUrl?: string | null,
    entryMonth: string,
    entryYear: string,
    endMonth: string,
    endYear: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeletePendidikanSertifikasiMutationVariables = {
  input: DeletePendidikanSertifikasiInput,
  condition?: ModelPendidikanSertifikasiConditionInput | null,
};

export type DeletePendidikanSertifikasiMutation = {
  deletePendidikanSertifikasi?:  {
    __typename: "PendidikanSertifikasi",
    taId: string,
    pendidikanId: string,
    pendidikanType: string,
    institutionName: string,
    sanitisedInstitutionName: string,
    courseName: string,
    pendidikanDescription?: string | null,
    institutionAddress?: string | null,
    institutionUrl?: string | null,
    entryMonth: string,
    entryYear: string,
    endMonth: string,
    endYear: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    projectId: string,
    projectTitle: string,
    projectLocation: string,
    projectValue: string,
    projectDuration: string,
    projectStart: string,
    projectCategories: Array< string >,
    projectDeadline: string,
    projectSubCategory: Array< EnumExpertise >,
    bidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projectOwner: string,
    isActive: string,
    isDeleted: boolean,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    projectId: string,
    projectTitle: string,
    projectLocation: string,
    projectValue: string,
    projectDuration: string,
    projectStart: string,
    projectCategories: Array< string >,
    projectDeadline: string,
    projectSubCategory: Array< EnumExpertise >,
    bidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projectOwner: string,
    isActive: string,
    isDeleted: boolean,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    projectId: string,
    projectTitle: string,
    projectLocation: string,
    projectValue: string,
    projectDuration: string,
    projectStart: string,
    projectCategories: Array< string >,
    projectDeadline: string,
    projectSubCategory: Array< EnumExpertise >,
    bidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projectOwner: string,
    isActive: string,
    isDeleted: boolean,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type CreateCompanyProjectBidderMutationVariables = {
  input: CreateCompanyProjectBidderInput,
  condition?: ModelCompanyProjectBidderConditionInput | null,
};

export type CreateCompanyProjectBidderMutation = {
  createCompanyProjectBidder?:  {
    __typename: "CompanyProjectBidder",
    projectId: string,
    taId: string,
    konsultanId: string,
    biddingStatus: EnumBiddingStatus,
    comments?: Array< string > | null,
    createdOn: string,
    updatedOn: string,
    projectBiddersId?: string | null,
    projectBiddersIsActive?: string | null,
    projectBiddersProjectDeadline?: string | null,
    projectBiddersProjectStart?: string | null,
  } | null,
};

export type UpdateCompanyProjectBidderMutationVariables = {
  input: UpdateCompanyProjectBidderInput,
  condition?: ModelCompanyProjectBidderConditionInput | null,
};

export type UpdateCompanyProjectBidderMutation = {
  updateCompanyProjectBidder?:  {
    __typename: "CompanyProjectBidder",
    projectId: string,
    taId: string,
    konsultanId: string,
    biddingStatus: EnumBiddingStatus,
    comments?: Array< string > | null,
    createdOn: string,
    updatedOn: string,
    projectBiddersId?: string | null,
    projectBiddersIsActive?: string | null,
    projectBiddersProjectDeadline?: string | null,
    projectBiddersProjectStart?: string | null,
  } | null,
};

export type DeleteCompanyProjectBidderMutationVariables = {
  input: DeleteCompanyProjectBidderInput,
  condition?: ModelCompanyProjectBidderConditionInput | null,
};

export type DeleteCompanyProjectBidderMutation = {
  deleteCompanyProjectBidder?:  {
    __typename: "CompanyProjectBidder",
    projectId: string,
    taId: string,
    konsultanId: string,
    biddingStatus: EnumBiddingStatus,
    comments?: Array< string > | null,
    createdOn: string,
    updatedOn: string,
    projectBiddersId?: string | null,
    projectBiddersIsActive?: string | null,
    projectBiddersProjectDeadline?: string | null,
    projectBiddersProjectStart?: string | null,
  } | null,
};

export type GetKonsultanQueryVariables = {
  konsultanId: string,
};

export type GetKonsultanQuery = {
  getKonsultan?:  {
    __typename: "Konsultan",
    konsultanId: string,
    konsultanName: string,
    konsultanLocation: string,
    konsultanAddress: string,
    konsultanEmail: Array< string >,
    konsultanPhoneNumber: Array< string >,
    konsultanRangeTotalEmployees: string,
    konsultanPIC: string,
    projectBidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projects?:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null > | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListKonsultansQueryVariables = {
  konsultanId?: string | null,
  filter?: ModelKonsultanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListKonsultansQuery = {
  listKonsultans?:  {
    __typename: "ModelKonsultanConnection",
    items:  Array< {
      __typename: "Konsultan",
      konsultanId: string,
      konsultanName: string,
      konsultanLocation: string,
      konsultanAddress: string,
      konsultanEmail: Array< string >,
      konsultanPhoneNumber: Array< string >,
      konsultanRangeTotalEmployees: string,
      konsultanPIC: string,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTenagaAhliQueryVariables = {
  taId: string,
};

export type GetTenagaAhliQuery = {
  getTenagaAhli?:  {
    __typename: "TenagaAhli",
    taId: string,
    taFullName: string,
    taNikPassport: string,
    taDob: string,
    taCitizenship: string,
    taResidentStatus: string,
    taExpertise: string,
    taAddress: string,
    taEmail: string,
    taPhoneNumber: string,
    taPortfolioLink?: Array< string > | null,
    taSelfDescription?: string | null,
    pengalamanKerja?:  {
      __typename: "ModelPengalamanKerjaConnection",
      nextToken?: string | null,
    } | null,
    projectBidded?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    pendidikanSertifikasi?:  {
      __typename: "ModelPendidikanSertifikasiConnection",
      nextToken?: string | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListTenagaAhlisQueryVariables = {
  taId?: string | null,
  filter?: ModelTenagaAhliFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTenagaAhlisQuery = {
  listTenagaAhlis?:  {
    __typename: "ModelTenagaAhliConnection",
    items:  Array< {
      __typename: "TenagaAhli",
      taId: string,
      taFullName: string,
      taNikPassport: string,
      taDob: string,
      taCitizenship: string,
      taResidentStatus: string,
      taExpertise: string,
      taAddress: string,
      taEmail: string,
      taPhoneNumber: string,
      taPortfolioLink?: Array< string > | null,
      taSelfDescription?: string | null,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPengalamanKerjaQueryVariables = {
  taId: string,
  companyId: string,
  projectId: string,
};

export type GetPengalamanKerjaQuery = {
  getPengalamanKerja?:  {
    __typename: "PengalamanKerja",
    taId: string,
    projectId: string,
    companyName: string,
    companyId: string,
    companyaddress: string,
    projectName: string,
    sanitisedCompanyName: string,
    sanitisedProjectName: string,
    employmentType: string,
    projectClient: string,
    position: string,
    contractStart: string,
    projectStartMonth: string,
    projectStartYear: string,
    projectEndMonth: string,
    projectEndYear: string,
    isFinished: string,
    projectLocation: string,
    projectDescription: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListPengalamanKerjasQueryVariables = {
  taId?: string | null,
  companyIdProjectId?: ModelPengalamanKerjaPrimaryCompositeKeyConditionInput | null,
  filter?: ModelPengalamanKerjaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPengalamanKerjasQuery = {
  listPengalamanKerjas?:  {
    __typename: "ModelPengalamanKerjaConnection",
    items:  Array< {
      __typename: "PengalamanKerja",
      taId: string,
      projectId: string,
      companyName: string,
      companyId: string,
      companyaddress: string,
      projectName: string,
      sanitisedCompanyName: string,
      sanitisedProjectName: string,
      employmentType: string,
      projectClient: string,
      position: string,
      contractStart: string,
      projectStartMonth: string,
      projectStartYear: string,
      projectEndMonth: string,
      projectEndYear: string,
      isFinished: string,
      projectLocation: string,
      projectDescription: string,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPendidikanSertifikasiQueryVariables = {
  taId: string,
  endYear: string,
  pendidikanId: string,
};

export type GetPendidikanSertifikasiQuery = {
  getPendidikanSertifikasi?:  {
    __typename: "PendidikanSertifikasi",
    taId: string,
    pendidikanId: string,
    pendidikanType: string,
    institutionName: string,
    sanitisedInstitutionName: string,
    courseName: string,
    pendidikanDescription?: string | null,
    institutionAddress?: string | null,
    institutionUrl?: string | null,
    entryMonth: string,
    entryYear: string,
    endMonth: string,
    endYear: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListPendidikanSertifikasisQueryVariables = {
  taId?: string | null,
  endYearPendidikanId?: ModelPendidikanSertifikasiPrimaryCompositeKeyConditionInput | null,
  filter?: ModelPendidikanSertifikasiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPendidikanSertifikasisQuery = {
  listPendidikanSertifikasis?:  {
    __typename: "ModelPendidikanSertifikasiConnection",
    items:  Array< {
      __typename: "PendidikanSertifikasi",
      taId: string,
      pendidikanId: string,
      pendidikanType: string,
      institutionName: string,
      sanitisedInstitutionName: string,
      courseName: string,
      pendidikanDescription?: string | null,
      institutionAddress?: string | null,
      institutionUrl?: string | null,
      entryMonth: string,
      entryYear: string,
      endMonth: string,
      endYear: string,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  projectId: string,
  isActive: string,
  projectDeadline: string,
  projectStart: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    projectId: string,
    projectTitle: string,
    projectLocation: string,
    projectValue: string,
    projectDuration: string,
    projectStart: string,
    projectCategories: Array< string >,
    projectDeadline: string,
    projectSubCategory: Array< EnumExpertise >,
    bidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projectOwner: string,
    isActive: string,
    isDeleted: boolean,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  projectId?: string | null,
  isActiveProjectDeadlineProjectStart?: ModelProjectPrimaryCompositeKeyConditionInput | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyProjectBidderQueryVariables = {
  projectId: string,
};

export type GetCompanyProjectBidderQuery = {
  getCompanyProjectBidder?:  {
    __typename: "CompanyProjectBidder",
    projectId: string,
    taId: string,
    konsultanId: string,
    biddingStatus: EnumBiddingStatus,
    comments?: Array< string > | null,
    createdOn: string,
    updatedOn: string,
    projectBiddersId?: string | null,
    projectBiddersIsActive?: string | null,
    projectBiddersProjectDeadline?: string | null,
    projectBiddersProjectStart?: string | null,
  } | null,
};

export type ListCompanyProjectBiddersQueryVariables = {
  projectId?: string | null,
  filter?: ModelCompanyProjectBidderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompanyProjectBiddersQuery = {
  listCompanyProjectBidders?:  {
    __typename: "ModelCompanyProjectBidderConnection",
    items:  Array< {
      __typename: "CompanyProjectBidder",
      projectId: string,
      taId: string,
      konsultanId: string,
      biddingStatus: EnumBiddingStatus,
      comments?: Array< string > | null,
      createdOn: string,
      updatedOn: string,
      projectBiddersId?: string | null,
      projectBiddersIsActive?: string | null,
      projectBiddersProjectDeadline?: string | null,
      projectBiddersProjectStart?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PengalamanKerjaByTenagaAhliByTimelineQueryVariables = {
  taId: string,
  contractStartIsFinished?: ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPengalamanKerjaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PengalamanKerjaByTenagaAhliByTimelineQuery = {
  pengalamanKerjaByTenagaAhliByTimeline?:  {
    __typename: "ModelPengalamanKerjaConnection",
    items:  Array< {
      __typename: "PengalamanKerja",
      taId: string,
      projectId: string,
      companyName: string,
      companyId: string,
      companyaddress: string,
      projectName: string,
      sanitisedCompanyName: string,
      sanitisedProjectName: string,
      employmentType: string,
      projectClient: string,
      position: string,
      contractStart: string,
      projectStartMonth: string,
      projectStartYear: string,
      projectEndMonth: string,
      projectEndYear: string,
      isFinished: string,
      projectLocation: string,
      projectDescription: string,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PengalamanKerjaByTenagaAhliByPerusahaanQueryVariables = {
  taId: string,
  sanitisedCompanyName?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPengalamanKerjaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PengalamanKerjaByTenagaAhliByPerusahaanQuery = {
  pengalamanKerjaByTenagaAhliByPerusahaan?:  {
    __typename: "ModelPengalamanKerjaConnection",
    items:  Array< {
      __typename: "PengalamanKerja",
      taId: string,
      projectId: string,
      companyName: string,
      companyId: string,
      companyaddress: string,
      projectName: string,
      sanitisedCompanyName: string,
      sanitisedProjectName: string,
      employmentType: string,
      projectClient: string,
      position: string,
      contractStart: string,
      projectStartMonth: string,
      projectStartYear: string,
      projectEndMonth: string,
      projectEndYear: string,
      isFinished: string,
      projectLocation: string,
      projectDescription: string,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PendidikanByTenagaAhliByCourseQueryVariables = {
  taId: string,
  pendidikanIdCourseName?: ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPendidikanSertifikasiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PendidikanByTenagaAhliByCourseQuery = {
  pendidikanByTenagaAhliByCourse?:  {
    __typename: "ModelPendidikanSertifikasiConnection",
    items:  Array< {
      __typename: "PendidikanSertifikasi",
      taId: string,
      pendidikanId: string,
      pendidikanType: string,
      institutionName: string,
      sanitisedInstitutionName: string,
      courseName: string,
      pendidikanDescription?: string | null,
      institutionAddress?: string | null,
      institutionUrl?: string | null,
      entryMonth: string,
      entryYear: string,
      endMonth: string,
      endYear: string,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectByOwnerQueryVariables = {
  projectOwner: string,
  projectStartIsActive?: ModelProjectProjectByOwnerCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectByOwnerQuery = {
  projectByOwner?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CompanyProjectBidderByTaQueryVariables = {
  taId: string,
  konsultanId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyProjectBidderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CompanyProjectBidderByTaQuery = {
  companyProjectBidderByTa?:  {
    __typename: "ModelCompanyProjectBidderConnection",
    items:  Array< {
      __typename: "CompanyProjectBidder",
      projectId: string,
      taId: string,
      konsultanId: string,
      biddingStatus: EnumBiddingStatus,
      comments?: Array< string > | null,
      createdOn: string,
      updatedOn: string,
      projectBiddersId?: string | null,
      projectBiddersIsActive?: string | null,
      projectBiddersProjectDeadline?: string | null,
      projectBiddersProjectStart?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CompanyProjectBidderByKonsultanQueryVariables = {
  konsultanId: string,
  taId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompanyProjectBidderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CompanyProjectBidderByKonsultanQuery = {
  companyProjectBidderByKonsultan?:  {
    __typename: "ModelCompanyProjectBidderConnection",
    items:  Array< {
      __typename: "CompanyProjectBidder",
      projectId: string,
      taId: string,
      konsultanId: string,
      biddingStatus: EnumBiddingStatus,
      comments?: Array< string > | null,
      createdOn: string,
      updatedOn: string,
      projectBiddersId?: string | null,
      projectBiddersIsActive?: string | null,
      projectBiddersProjectDeadline?: string | null,
      projectBiddersProjectStart?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateKonsultanSubscriptionVariables = {
  filter?: ModelSubscriptionKonsultanFilterInput | null,
};

export type OnCreateKonsultanSubscription = {
  onCreateKonsultan?:  {
    __typename: "Konsultan",
    konsultanId: string,
    konsultanName: string,
    konsultanLocation: string,
    konsultanAddress: string,
    konsultanEmail: Array< string >,
    konsultanPhoneNumber: Array< string >,
    konsultanRangeTotalEmployees: string,
    konsultanPIC: string,
    projectBidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projects?:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null > | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdateKonsultanSubscriptionVariables = {
  filter?: ModelSubscriptionKonsultanFilterInput | null,
};

export type OnUpdateKonsultanSubscription = {
  onUpdateKonsultan?:  {
    __typename: "Konsultan",
    konsultanId: string,
    konsultanName: string,
    konsultanLocation: string,
    konsultanAddress: string,
    konsultanEmail: Array< string >,
    konsultanPhoneNumber: Array< string >,
    konsultanRangeTotalEmployees: string,
    konsultanPIC: string,
    projectBidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projects?:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null > | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeleteKonsultanSubscriptionVariables = {
  filter?: ModelSubscriptionKonsultanFilterInput | null,
};

export type OnDeleteKonsultanSubscription = {
  onDeleteKonsultan?:  {
    __typename: "Konsultan",
    konsultanId: string,
    konsultanName: string,
    konsultanLocation: string,
    konsultanAddress: string,
    konsultanEmail: Array< string >,
    konsultanPhoneNumber: Array< string >,
    konsultanRangeTotalEmployees: string,
    konsultanPIC: string,
    projectBidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projects?:  Array< {
      __typename: "Project",
      projectId: string,
      projectTitle: string,
      projectLocation: string,
      projectValue: string,
      projectDuration: string,
      projectStart: string,
      projectCategories: Array< string >,
      projectDeadline: string,
      projectSubCategory: Array< EnumExpertise >,
      projectOwner: string,
      isActive: string,
      isDeleted: boolean,
      createdOn: string,
      updatedOn: string,
    } | null > | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnCreateTenagaAhliSubscriptionVariables = {
  filter?: ModelSubscriptionTenagaAhliFilterInput | null,
};

export type OnCreateTenagaAhliSubscription = {
  onCreateTenagaAhli?:  {
    __typename: "TenagaAhli",
    taId: string,
    taFullName: string,
    taNikPassport: string,
    taDob: string,
    taCitizenship: string,
    taResidentStatus: string,
    taExpertise: string,
    taAddress: string,
    taEmail: string,
    taPhoneNumber: string,
    taPortfolioLink?: Array< string > | null,
    taSelfDescription?: string | null,
    pengalamanKerja?:  {
      __typename: "ModelPengalamanKerjaConnection",
      nextToken?: string | null,
    } | null,
    projectBidded?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    pendidikanSertifikasi?:  {
      __typename: "ModelPendidikanSertifikasiConnection",
      nextToken?: string | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdateTenagaAhliSubscriptionVariables = {
  filter?: ModelSubscriptionTenagaAhliFilterInput | null,
};

export type OnUpdateTenagaAhliSubscription = {
  onUpdateTenagaAhli?:  {
    __typename: "TenagaAhli",
    taId: string,
    taFullName: string,
    taNikPassport: string,
    taDob: string,
    taCitizenship: string,
    taResidentStatus: string,
    taExpertise: string,
    taAddress: string,
    taEmail: string,
    taPhoneNumber: string,
    taPortfolioLink?: Array< string > | null,
    taSelfDescription?: string | null,
    pengalamanKerja?:  {
      __typename: "ModelPengalamanKerjaConnection",
      nextToken?: string | null,
    } | null,
    projectBidded?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    pendidikanSertifikasi?:  {
      __typename: "ModelPendidikanSertifikasiConnection",
      nextToken?: string | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeleteTenagaAhliSubscriptionVariables = {
  filter?: ModelSubscriptionTenagaAhliFilterInput | null,
};

export type OnDeleteTenagaAhliSubscription = {
  onDeleteTenagaAhli?:  {
    __typename: "TenagaAhli",
    taId: string,
    taFullName: string,
    taNikPassport: string,
    taDob: string,
    taCitizenship: string,
    taResidentStatus: string,
    taExpertise: string,
    taAddress: string,
    taEmail: string,
    taPhoneNumber: string,
    taPortfolioLink?: Array< string > | null,
    taSelfDescription?: string | null,
    pengalamanKerja?:  {
      __typename: "ModelPengalamanKerjaConnection",
      nextToken?: string | null,
    } | null,
    projectBidded?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    pendidikanSertifikasi?:  {
      __typename: "ModelPendidikanSertifikasiConnection",
      nextToken?: string | null,
    } | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnCreatePengalamanKerjaSubscriptionVariables = {
  filter?: ModelSubscriptionPengalamanKerjaFilterInput | null,
};

export type OnCreatePengalamanKerjaSubscription = {
  onCreatePengalamanKerja?:  {
    __typename: "PengalamanKerja",
    taId: string,
    projectId: string,
    companyName: string,
    companyId: string,
    companyaddress: string,
    projectName: string,
    sanitisedCompanyName: string,
    sanitisedProjectName: string,
    employmentType: string,
    projectClient: string,
    position: string,
    contractStart: string,
    projectStartMonth: string,
    projectStartYear: string,
    projectEndMonth: string,
    projectEndYear: string,
    isFinished: string,
    projectLocation: string,
    projectDescription: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdatePengalamanKerjaSubscriptionVariables = {
  filter?: ModelSubscriptionPengalamanKerjaFilterInput | null,
};

export type OnUpdatePengalamanKerjaSubscription = {
  onUpdatePengalamanKerja?:  {
    __typename: "PengalamanKerja",
    taId: string,
    projectId: string,
    companyName: string,
    companyId: string,
    companyaddress: string,
    projectName: string,
    sanitisedCompanyName: string,
    sanitisedProjectName: string,
    employmentType: string,
    projectClient: string,
    position: string,
    contractStart: string,
    projectStartMonth: string,
    projectStartYear: string,
    projectEndMonth: string,
    projectEndYear: string,
    isFinished: string,
    projectLocation: string,
    projectDescription: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeletePengalamanKerjaSubscriptionVariables = {
  filter?: ModelSubscriptionPengalamanKerjaFilterInput | null,
};

export type OnDeletePengalamanKerjaSubscription = {
  onDeletePengalamanKerja?:  {
    __typename: "PengalamanKerja",
    taId: string,
    projectId: string,
    companyName: string,
    companyId: string,
    companyaddress: string,
    projectName: string,
    sanitisedCompanyName: string,
    sanitisedProjectName: string,
    employmentType: string,
    projectClient: string,
    position: string,
    contractStart: string,
    projectStartMonth: string,
    projectStartYear: string,
    projectEndMonth: string,
    projectEndYear: string,
    isFinished: string,
    projectLocation: string,
    projectDescription: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnCreatePendidikanSertifikasiSubscriptionVariables = {
  filter?: ModelSubscriptionPendidikanSertifikasiFilterInput | null,
};

export type OnCreatePendidikanSertifikasiSubscription = {
  onCreatePendidikanSertifikasi?:  {
    __typename: "PendidikanSertifikasi",
    taId: string,
    pendidikanId: string,
    pendidikanType: string,
    institutionName: string,
    sanitisedInstitutionName: string,
    courseName: string,
    pendidikanDescription?: string | null,
    institutionAddress?: string | null,
    institutionUrl?: string | null,
    entryMonth: string,
    entryYear: string,
    endMonth: string,
    endYear: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdatePendidikanSertifikasiSubscriptionVariables = {
  filter?: ModelSubscriptionPendidikanSertifikasiFilterInput | null,
};

export type OnUpdatePendidikanSertifikasiSubscription = {
  onUpdatePendidikanSertifikasi?:  {
    __typename: "PendidikanSertifikasi",
    taId: string,
    pendidikanId: string,
    pendidikanType: string,
    institutionName: string,
    sanitisedInstitutionName: string,
    courseName: string,
    pendidikanDescription?: string | null,
    institutionAddress?: string | null,
    institutionUrl?: string | null,
    entryMonth: string,
    entryYear: string,
    endMonth: string,
    endYear: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeletePendidikanSertifikasiSubscriptionVariables = {
  filter?: ModelSubscriptionPendidikanSertifikasiFilterInput | null,
};

export type OnDeletePendidikanSertifikasiSubscription = {
  onDeletePendidikanSertifikasi?:  {
    __typename: "PendidikanSertifikasi",
    taId: string,
    pendidikanId: string,
    pendidikanType: string,
    institutionName: string,
    sanitisedInstitutionName: string,
    courseName: string,
    pendidikanDescription?: string | null,
    institutionAddress?: string | null,
    institutionUrl?: string | null,
    entryMonth: string,
    entryYear: string,
    endMonth: string,
    endYear: string,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    projectId: string,
    projectTitle: string,
    projectLocation: string,
    projectValue: string,
    projectDuration: string,
    projectStart: string,
    projectCategories: Array< string >,
    projectDeadline: string,
    projectSubCategory: Array< EnumExpertise >,
    bidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projectOwner: string,
    isActive: string,
    isDeleted: boolean,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    projectId: string,
    projectTitle: string,
    projectLocation: string,
    projectValue: string,
    projectDuration: string,
    projectStart: string,
    projectCategories: Array< string >,
    projectDeadline: string,
    projectSubCategory: Array< EnumExpertise >,
    bidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projectOwner: string,
    isActive: string,
    isDeleted: boolean,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    projectId: string,
    projectTitle: string,
    projectLocation: string,
    projectValue: string,
    projectDuration: string,
    projectStart: string,
    projectCategories: Array< string >,
    projectDeadline: string,
    projectSubCategory: Array< EnumExpertise >,
    bidders?:  {
      __typename: "ModelCompanyProjectBidderConnection",
      nextToken?: string | null,
    } | null,
    projectOwner: string,
    isActive: string,
    isDeleted: boolean,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnCreateCompanyProjectBidderSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyProjectBidderFilterInput | null,
};

export type OnCreateCompanyProjectBidderSubscription = {
  onCreateCompanyProjectBidder?:  {
    __typename: "CompanyProjectBidder",
    projectId: string,
    taId: string,
    konsultanId: string,
    biddingStatus: EnumBiddingStatus,
    comments?: Array< string > | null,
    createdOn: string,
    updatedOn: string,
    projectBiddersId?: string | null,
    projectBiddersIsActive?: string | null,
    projectBiddersProjectDeadline?: string | null,
    projectBiddersProjectStart?: string | null,
  } | null,
};

export type OnUpdateCompanyProjectBidderSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyProjectBidderFilterInput | null,
};

export type OnUpdateCompanyProjectBidderSubscription = {
  onUpdateCompanyProjectBidder?:  {
    __typename: "CompanyProjectBidder",
    projectId: string,
    taId: string,
    konsultanId: string,
    biddingStatus: EnumBiddingStatus,
    comments?: Array< string > | null,
    createdOn: string,
    updatedOn: string,
    projectBiddersId?: string | null,
    projectBiddersIsActive?: string | null,
    projectBiddersProjectDeadline?: string | null,
    projectBiddersProjectStart?: string | null,
  } | null,
};

export type OnDeleteCompanyProjectBidderSubscriptionVariables = {
  filter?: ModelSubscriptionCompanyProjectBidderFilterInput | null,
};

export type OnDeleteCompanyProjectBidderSubscription = {
  onDeleteCompanyProjectBidder?:  {
    __typename: "CompanyProjectBidder",
    projectId: string,
    taId: string,
    konsultanId: string,
    biddingStatus: EnumBiddingStatus,
    comments?: Array< string > | null,
    createdOn: string,
    updatedOn: string,
    projectBiddersId?: string | null,
    projectBiddersIsActive?: string | null,
    projectBiddersProjectDeadline?: string | null,
    projectBiddersProjectStart?: string | null,
  } | null,
};
