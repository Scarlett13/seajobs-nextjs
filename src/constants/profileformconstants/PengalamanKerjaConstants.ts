export interface IPengalamanKerja {
	companyId:            string;
	sanitisedCompanyName: string;
	companyName:          string;
	companyAddress:       string;
	companyLogo:          string | null;
	projects:             IProject[];
}

export interface IProject {
	projectId:					 	string;
	sanitisedProjectName: string;
	projectName:         	string;
	projectDescription:  	string;
	employmentType:      	string;
	projectLocation:     	string;
	projectStartMonth:   	string;
	projectStartYear:    	string;
	contractStart: string;
	isFinished:   	boolean;
	projectEndMonth:     	string | null;
	projectEndYear:      	string | null;
	projectClient:    string;
	projectRoleName:      string;
	//optional, di disable dulu
	projectroleindustry?: string;
	isstillworking?:      boolean;
}

//ini untuk mock type pengalaman kerja generated di amplify (./API.ts), 
//karena nama sudah dipakain untuk temporary data yang belum di push ke database (di line 1 file ini)
//interface perlu di update ketika ada perubahan di table PengalamanKerja (schema.graphql)
export interface IAmplifyPengalamanKerja {
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
}