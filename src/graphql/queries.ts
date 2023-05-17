/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKonsultan = /* GraphQL */ `
  query GetKonsultan($konsultanId: String!) {
    getKonsultan(konsultanId: $konsultanId) {
      konsultanId
      konsultanName
      konsultanLocation
      konsultanAddress
      konsultanEmail
      konsultanPhoneNumber
      konsultanRangeTotalEmployees
      konsultanPIC
      konsultanDescription
      projectBidders {
        nextToken
      }
      projects {
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const listKonsultans = /* GraphQL */ `
  query ListKonsultans(
    $konsultanId: String
    $filter: ModelKonsultanFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listKonsultans(
      konsultanId: $konsultanId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTenagaAhli = /* GraphQL */ `
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
        nextToken
      }
      projectBidded {
        nextToken
      }
      pendidikanSertifikasi {
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const listTenagaAhlis = /* GraphQL */ `
  query ListTenagaAhlis(
    $taId: String
    $filter: ModelTenagaAhliFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTenagaAhlis(
      taId: $taId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPengalamanKerja = /* GraphQL */ `
  query GetPengalamanKerja(
    $taId: String!
    $companyId: String!
    $projectId: String!
  ) {
    getPengalamanKerja(
      taId: $taId
      companyId: $companyId
      projectId: $projectId
    ) {
      taId
      projectId
      companyName
      companyId
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
      createdOn
      updatedOn
    }
  }
`;
export const listPengalamanKerjas = /* GraphQL */ `
  query ListPengalamanKerjas(
    $taId: String
    $companyIdProjectId: ModelPengalamanKerjaPrimaryCompositeKeyConditionInput
    $filter: ModelPengalamanKerjaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPengalamanKerjas(
      taId: $taId
      companyIdProjectId: $companyIdProjectId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        taId
        projectId
        companyName
        companyId
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
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getPendidikanSertifikasi = /* GraphQL */ `
  query GetPendidikanSertifikasi(
    $taId: String!
    $endYear: String!
    $pendidikanId: String!
  ) {
    getPendidikanSertifikasi(
      taId: $taId
      endYear: $endYear
      pendidikanId: $pendidikanId
    ) {
      taId
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
      createdOn
      updatedOn
    }
  }
`;
export const listPendidikanSertifikasis = /* GraphQL */ `
  query ListPendidikanSertifikasis(
    $taId: String
    $endYearPendidikanId: ModelPendidikanSertifikasiPrimaryCompositeKeyConditionInput
    $filter: ModelPendidikanSertifikasiFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPendidikanSertifikasis(
      taId: $taId
      endYearPendidikanId: $endYearPendidikanId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        taId
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
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($projectId: String!) {
    getProject(projectId: $projectId) {
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
      bidders {
        nextToken
      }
      projectOwner
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
      isActive
      projectStatus
      isDeleted
      createdOn
      updatedOn
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $projectId: String
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjects(
      projectId: $projectId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
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
export const getCompanyProjectBidder = /* GraphQL */ `
  query GetCompanyProjectBidder(
    $projectId: String!
    $taId: String!
    $konsultanId: String!
  ) {
    getCompanyProjectBidder(
      projectId: $projectId
      taId: $taId
      konsultanId: $konsultanId
    ) {
      projectId
      taId
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
      konsultanId
      konsultanDetail {
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
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
    }
  }
`;
export const listCompanyProjectBidders = /* GraphQL */ `
  query ListCompanyProjectBidders(
    $projectId: String
    $taIdKonsultanId: ModelCompanyProjectBidderPrimaryCompositeKeyConditionInput
    $filter: ModelCompanyProjectBidderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanyProjectBidders(
      projectId: $projectId
      taIdKonsultanId: $taIdKonsultanId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
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
      }
      nextToken
    }
  }
`;
export const pengalamanKerjaByTenagaAhliByTimeline = /* GraphQL */ `
  query PengalamanKerjaByTenagaAhliByTimeline(
    $taId: String!
    $contractStartIsFinished: ModelPengalamanKerjaByTenagaAhliByTimelineCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPengalamanKerjaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pengalamanKerjaByTenagaAhliByTimeline(
      taId: $taId
      contractStartIsFinished: $contractStartIsFinished
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        taId
        projectId
        companyName
        companyId
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
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const pengalamanKerjaByTenagaAhliByPerusahaan = /* GraphQL */ `
  query PengalamanKerjaByTenagaAhliByPerusahaan(
    $taId: String!
    $sanitisedCompanyName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPengalamanKerjaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pengalamanKerjaByTenagaAhliByPerusahaan(
      taId: $taId
      sanitisedCompanyName: $sanitisedCompanyName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        taId
        projectId
        companyName
        companyId
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
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const pendidikanByTenagaAhliByCourse = /* GraphQL */ `
  query PendidikanByTenagaAhliByCourse(
    $taId: String!
    $pendidikanIdCourseName: ModelPendidikanSertifikasiByTenagaAhliByCourseCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPendidikanSertifikasiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pendidikanByTenagaAhliByCourse(
      taId: $taId
      pendidikanIdCourseName: $pendidikanIdCourseName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        taId
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
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const projectByOwner = /* GraphQL */ `
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
				}
      }
      nextToken
    }
  }
`;
export const companyProjectBidderByTa = /* GraphQL */ `
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
      }
      nextToken
    }
  }
`;
export const companyProjectBidderByKonsultan = /* GraphQL */ `
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
