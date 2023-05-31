export const getTenagaAhliCard = /* GraphQL */ `
  query GetTenagaAhli($taId: String!) {
    getTenagaAhli(taId: $taId) {
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
      pengalamanKerja {
				items{
					companyName
					companyaddress
					projectName
					sanitisedCompanyName
					sanitisedProjectName
					employmentType
					projectClient
					position
					contractStart
					projectStartMonth
					projectStartYear
					projectEndMonth
					projectEndYear
					isFinished
					projectLocation
					projectDescription
				}
        nextToken
      }
      projectBidded {
        nextToken
      }
      pendidikanSertifikasi {
				items{
					pendidikanId
					pendidikanType
					institutionName
					sanitisedInstitutionName
					courseName
					pendidikanDescription
					institutionAddress
					institutionUrl
					entryMonth
					entryYear
					endMonth
					endYear
				}
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;

export const companyProjectBidderByTaCard = /* GraphQL */ `
  query CompanyProjectBidderByTa(
    $taId: String!
    $konsultanId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyProjectBidderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    companyProjectBidderByTa(
      taId: $taId
      konsultanId: $konsultanId
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
				projectDetail {
					projectOwner
					projectStart
					projectStatus
					projectTitle
					projectValue
					projectLocation
					projectId
					projectDuration
					projectDeadline
					projectDescription
					projectClient
					projectCategories
					isActive
				}
      }
      nextToken
    }
  }
`;