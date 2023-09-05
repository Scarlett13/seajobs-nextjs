/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKonsultan = /* GraphQL */ `
  mutation CreateKonsultan(
    $input: CreateKonsultanInput!
    $condition: ModelKonsultanConditionInput
  ) {
    createKonsultan(input: $input, condition: $condition) {
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
        __typename
      }
      projects {
        nextToken
        __typename
      }
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const updateKonsultan = /* GraphQL */ `
  mutation UpdateKonsultan(
    $input: UpdateKonsultanInput!
    $condition: ModelKonsultanConditionInput
  ) {
    updateKonsultan(input: $input, condition: $condition) {
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
        __typename
      }
      projects {
        nextToken
        __typename
      }
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const deleteKonsultan = /* GraphQL */ `
  mutation DeleteKonsultan(
    $input: DeleteKonsultanInput!
    $condition: ModelKonsultanConditionInput
  ) {
    deleteKonsultan(input: $input, condition: $condition) {
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
        __typename
      }
      projects {
        nextToken
        __typename
      }
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const createTenagaAhli = /* GraphQL */ `
  mutation CreateTenagaAhli(
    $input: CreateTenagaAhliInput!
    $condition: ModelTenagaAhliConditionInput
  ) {
    createTenagaAhli(input: $input, condition: $condition) {
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
      taSkaFilename
      pengalamanKerja {
        nextToken
        __typename
      }
      projectBidded {
        nextToken
        __typename
      }
      pendidikanSertifikasi {
        nextToken
        __typename
      }
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const updateTenagaAhli = /* GraphQL */ `
  mutation UpdateTenagaAhli(
    $input: UpdateTenagaAhliInput!
    $condition: ModelTenagaAhliConditionInput
  ) {
    updateTenagaAhli(input: $input, condition: $condition) {
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
      taSkaFilename
      pengalamanKerja {
        nextToken
        __typename
      }
      projectBidded {
        nextToken
        __typename
      }
      pendidikanSertifikasi {
        nextToken
        __typename
      }
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const deleteTenagaAhli = /* GraphQL */ `
  mutation DeleteTenagaAhli(
    $input: DeleteTenagaAhliInput!
    $condition: ModelTenagaAhliConditionInput
  ) {
    deleteTenagaAhli(input: $input, condition: $condition) {
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
      taSkaFilename
      pengalamanKerja {
        nextToken
        __typename
      }
      projectBidded {
        nextToken
        __typename
      }
      pendidikanSertifikasi {
        nextToken
        __typename
      }
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const createPengalamanKerja = /* GraphQL */ `
  mutation CreatePengalamanKerja(
    $input: CreatePengalamanKerjaInput!
    $condition: ModelPengalamanKerjaConditionInput
  ) {
    createPengalamanKerja(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const updatePengalamanKerja = /* GraphQL */ `
  mutation UpdatePengalamanKerja(
    $input: UpdatePengalamanKerjaInput!
    $condition: ModelPengalamanKerjaConditionInput
  ) {
    updatePengalamanKerja(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const deletePengalamanKerja = /* GraphQL */ `
  mutation DeletePengalamanKerja(
    $input: DeletePengalamanKerjaInput!
    $condition: ModelPengalamanKerjaConditionInput
  ) {
    deletePengalamanKerja(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const createPendidikanSertifikasi = /* GraphQL */ `
  mutation CreatePendidikanSertifikasi(
    $input: CreatePendidikanSertifikasiInput!
    $condition: ModelPendidikanSertifikasiConditionInput
  ) {
    createPendidikanSertifikasi(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const updatePendidikanSertifikasi = /* GraphQL */ `
  mutation UpdatePendidikanSertifikasi(
    $input: UpdatePendidikanSertifikasiInput!
    $condition: ModelPendidikanSertifikasiConditionInput
  ) {
    updatePendidikanSertifikasi(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const deletePendidikanSertifikasi = /* GraphQL */ `
  mutation DeletePendidikanSertifikasi(
    $input: DeletePendidikanSertifikasiInput!
    $condition: ModelPendidikanSertifikasiConditionInput
  ) {
    deletePendidikanSertifikasi(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
        __typename
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
        __typename
      }
      isActive
      projectStatus
      isDeleted
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
        __typename
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
        __typename
      }
      isActive
      projectStatus
      isDeleted
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
        __typename
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
        __typename
      }
      isActive
      projectStatus
      isDeleted
      createdOn
      updatedOn
      __typename
    }
  }
`;
export const createCompanyProjectBidder = /* GraphQL */ `
  mutation CreateCompanyProjectBidder(
    $input: CreateCompanyProjectBidderInput!
    $condition: ModelCompanyProjectBidderConditionInput
  ) {
    createCompanyProjectBidder(input: $input, condition: $condition) {
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
        taSkaFilename
        createdOn
        updatedOn
        __typename
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
        __typename
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
        __typename
      }
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
      __typename
    }
  }
`;
export const updateCompanyProjectBidder = /* GraphQL */ `
  mutation UpdateCompanyProjectBidder(
    $input: UpdateCompanyProjectBidderInput!
    $condition: ModelCompanyProjectBidderConditionInput
  ) {
    updateCompanyProjectBidder(input: $input, condition: $condition) {
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
        taSkaFilename
        createdOn
        updatedOn
        __typename
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
        __typename
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
        __typename
      }
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
      __typename
    }
  }
`;
export const deleteCompanyProjectBidder = /* GraphQL */ `
  mutation DeleteCompanyProjectBidder(
    $input: DeleteCompanyProjectBidderInput!
    $condition: ModelCompanyProjectBidderConditionInput
  ) {
    deleteCompanyProjectBidder(input: $input, condition: $condition) {
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
        taSkaFilename
        createdOn
        updatedOn
        __typename
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
        __typename
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
        __typename
      }
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
      __typename
    }
  }
`;
