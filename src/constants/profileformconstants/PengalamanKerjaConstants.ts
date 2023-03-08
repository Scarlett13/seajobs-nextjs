export type EmploymentType = "Please select" | "Full-time" | "Part-time" | "Self-employed" | "Freelance" | "Contract" | "Internship" | "Apprenticeship" | "Seasonal"


export interface IMonthOfTheYear {
	value: string;
	label: string;
}

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
	projectname:         	string;
	projectdescription:  	string;
	employmenttype:      	EmploymentType;
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