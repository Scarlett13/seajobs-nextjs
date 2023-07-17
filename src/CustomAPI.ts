import { EnumBiddingStatus } from "./API";

export type CustomProjectByOwnerQuery = {
  projectByOwner?: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      projectId: string;
      projectTitle: string;
      projectLocation: string;
      projectValue: string;
      projectDuration: string;
      projectStart: string;
      projectCategories: string;
      projectDescription: string;
      projectClient?: string | null;
      projectDeadline: string;
      companyOwner?: {
        __typename: "Konsultan";
        konsultanId: string;
        konsultanName: string;
        konsultanLocation?: string | null;
        konsultanAddress: string;
        konsultanEmail: string;
        konsultanPhoneNumber: string;
        konsultanRangeTotalEmployees: string;
        konsultanPIC: string;
        konsultanDescription: string;
        createdOn: string;
        updatedOn: string;
      } | null;
      projecImageUrl?: Array<string | null> | null;
      projectOwner: string;
      isActive: string;
      projectStatus: string;
      isDeleted: boolean;
      createdOn: string;
      updatedOn: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export const customProjectByOwner = /* GraphQL */ `
  query ProjectByOwner(
    $projectOwner: String!
    $projectStartIsActive: ModelProjectProjectByOwnerCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectByOwner(
      projectOwner: $projectOwner
      projectStartIsActive: $projectStartIsActive
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        projectId
        projectTitle
        projectLocation
        projectValue
        projectDuration
        projectStart
        projectCategories
        projectDescription
        projectClient
        projectDeadline
        projecImageUrl
        projectOwner
        isActive
        projectStatus
        isDeleted
        createdOn
        updatedOn
        companyOwner {
          konsultanId
          konsultanName
          konsultanLocation
          konsultanAddress
          konsultanEmail
          konsultanPhoneNumber
          konsultanRangeTotalEmployees
          konsultanPIC
          konsultanDescription
          createdOn
          updatedOn
        }
      }
      nextToken
    }
  }
`;

export type CustomCompanyProjectBidderByKonsultanQuery = {
  companyProjectBidderByKonsultan?: {
    __typename: "ModelCompanyProjectBidderConnection";
    items: Array<{
      __typename: "CompanyProjectBidder";
      projectId: string;
      taId: string;
      konsultanId: string;
      biddingStatus: EnumBiddingStatus;
      comments?: Array<string> | null;
      createdOn: string;
      updatedOn: string;
      projectBiddersId?: string | null;
      taDetail?: {
        __typename: "TenagaAhli";
        taId: string;
        taFullName: string;
        taNikPassport: string;
        taDob: string;
        taCitizenship: string;
        taResidentStatus: string;
        taExpertise: string;
        taAddress: string;
        taEmail: string;
        taPhoneNumber: string;
        taPortfolioLink?: Array<string> | null;
        taSelfDescription?: string | null;
        createdOn: string;
        updatedOn: string;
      } | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export const customCompanyProjectBidderByKonsultan = /* GraphQL */ `
  query CompanyProjectBidderByKonsultan(
    $konsultanId: String!
    $taId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyProjectBidderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyProjectBidderByKonsultan(
      konsultanId: $konsultanId
      taId: $taId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        projectId
        taId
        konsultanId
        biddingStatus
        comments
        createdOn
        updatedOn
        projectBiddersId
        taDetail {
          taId
          taFullName
          taNikPassport
          taDob
          taCitizenship
          taResidentStatus
          taExpertise
          taAddress
          taEmail
          taPhoneNumber
          taPortfolioLink
          taSelfDescription
          createdOn
          updatedOn
        }
      }
      nextToken
    }
  }
`;
