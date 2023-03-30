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
      projectBidders {
        nextToken
      }
      projects {
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
      createdOn
      updatedOn
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
      projectBidders {
        nextToken
      }
      projects {
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
      createdOn
      updatedOn
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
      projectBidders {
        nextToken
      }
      projects {
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
      createdOn
      updatedOn
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
      }
      projectOwner
      isActive
      projectStatus
      isDeleted
      createdOn
      updatedOn
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
      }
      projectOwner
      isActive
      projectStatus
      isDeleted
      createdOn
      updatedOn
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
      }
      projectOwner
      isActive
      projectStatus
      isDeleted
      createdOn
      updatedOn
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
      konsultanId
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
      projectBiddersProjectOwner
      projectBiddersIsActive
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
      konsultanId
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
      projectBiddersProjectOwner
      projectBiddersIsActive
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
      konsultanId
      biddingStatus
      comments
      createdOn
      updatedOn
      projectBiddersId
      projectBiddersProjectOwner
      projectBiddersIsActive
    }
  }
`;
