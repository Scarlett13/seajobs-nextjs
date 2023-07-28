/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateKonsultan = /* GraphQL */ `
  subscription OnCreateKonsultan(
    $filter: ModelSubscriptionKonsultanFilterInput
  ) {
    onCreateKonsultan(filter: $filter) {
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
export const onUpdateKonsultan = /* GraphQL */ `
  subscription OnUpdateKonsultan(
    $filter: ModelSubscriptionKonsultanFilterInput
  ) {
    onUpdateKonsultan(filter: $filter) {
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
export const onDeleteKonsultan = /* GraphQL */ `
  subscription OnDeleteKonsultan(
    $filter: ModelSubscriptionKonsultanFilterInput
  ) {
    onDeleteKonsultan(filter: $filter) {
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
export const onCreateTenagaAhli = /* GraphQL */ `
  subscription OnCreateTenagaAhli(
    $filter: ModelSubscriptionTenagaAhliFilterInput
  ) {
    onCreateTenagaAhli(filter: $filter) {
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
export const onUpdateTenagaAhli = /* GraphQL */ `
  subscription OnUpdateTenagaAhli(
    $filter: ModelSubscriptionTenagaAhliFilterInput
  ) {
    onUpdateTenagaAhli(filter: $filter) {
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
export const onDeleteTenagaAhli = /* GraphQL */ `
  subscription OnDeleteTenagaAhli(
    $filter: ModelSubscriptionTenagaAhliFilterInput
  ) {
    onDeleteTenagaAhli(filter: $filter) {
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
export const onCreatePengalamanKerja = /* GraphQL */ `
  subscription OnCreatePengalamanKerja(
    $filter: ModelSubscriptionPengalamanKerjaFilterInput
  ) {
    onCreatePengalamanKerja(filter: $filter) {
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
export const onUpdatePengalamanKerja = /* GraphQL */ `
  subscription OnUpdatePengalamanKerja(
    $filter: ModelSubscriptionPengalamanKerjaFilterInput
  ) {
    onUpdatePengalamanKerja(filter: $filter) {
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
export const onDeletePengalamanKerja = /* GraphQL */ `
  subscription OnDeletePengalamanKerja(
    $filter: ModelSubscriptionPengalamanKerjaFilterInput
  ) {
    onDeletePengalamanKerja(filter: $filter) {
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
export const onCreatePendidikanSertifikasi = /* GraphQL */ `
  subscription OnCreatePendidikanSertifikasi(
    $filter: ModelSubscriptionPendidikanSertifikasiFilterInput
  ) {
    onCreatePendidikanSertifikasi(filter: $filter) {
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
export const onUpdatePendidikanSertifikasi = /* GraphQL */ `
  subscription OnUpdatePendidikanSertifikasi(
    $filter: ModelSubscriptionPendidikanSertifikasiFilterInput
  ) {
    onUpdatePendidikanSertifikasi(filter: $filter) {
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
export const onDeletePendidikanSertifikasi = /* GraphQL */ `
  subscription OnDeletePendidikanSertifikasi(
    $filter: ModelSubscriptionPendidikanSertifikasiFilterInput
  ) {
    onDeletePendidikanSertifikasi(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateCompanyProjectBidder = /* GraphQL */ `
  subscription OnCreateCompanyProjectBidder(
    $filter: ModelSubscriptionCompanyProjectBidderFilterInput
  ) {
    onCreateCompanyProjectBidder(filter: $filter) {
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
      projectDetail {
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
      }
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
    }
  }
`;
export const onUpdateCompanyProjectBidder = /* GraphQL */ `
  subscription OnUpdateCompanyProjectBidder(
    $filter: ModelSubscriptionCompanyProjectBidderFilterInput
  ) {
    onUpdateCompanyProjectBidder(filter: $filter) {
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
      projectDetail {
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
      }
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
    }
  }
`;
export const onDeleteCompanyProjectBidder = /* GraphQL */ `
  subscription OnDeleteCompanyProjectBidder(
    $filter: ModelSubscriptionCompanyProjectBidderFilterInput
  ) {
    onDeleteCompanyProjectBidder(filter: $filter) {
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
      projectDetail {
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
      }
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
    }
  }
`;
