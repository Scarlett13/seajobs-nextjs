export interface IPengalamanKerja {
	companyid:            string;
	companysanitisedname: string;
	companyname:          string;
	companyaddress:       string;
	companylogo:          string | null;
	projects:            IProject[];
}

export interface IProject {
	projectid:					 	string;
	projectsanitisedname: string;
	projectname:         	string;
	projectdescription:  	string;
	employmenttype:      	string;
	projectlocation:     	string;
	projectstartmonth:   	string;
	projectstartyear:    	string;
	isprojectfinished:   	boolean;
	projectendmonth:     	string | null;
	projectendyear:      	string | null;
	projectclientname:    string;
	projectrolename:      string;
	//optional, di disable dulu
	projectroleindustry?: string;
	isstillworking?:      	boolean;
}