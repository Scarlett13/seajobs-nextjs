export type EmploymentType = "Please select" | "Full-time" | "Part-time" | "Self-employed" | "Freelance" | "Contract" | "Internship" | "Apprenticeship" | "Seasonal"

export interface IMonthOfTheYear {
	monthnumber: string;
	monthname: string;
}

export interface IPengalamanKerja {
	companyid:            string;
	companysanitisedname: string;
	companyname:          string;
	companyaddress:       string;
	companylogo:          string | null;
	projects:             Project[];
}

export interface Project {
	projectid:					 string;
	projectname:         string;
	projectdescription:  string;
	employmenttype:      EmploymentType;
	locationtype:        string;
	projectstartmonth:   IMonthOfTheYear;
	projectstartyear:    string;
	isprojectfinished:   boolean;
	projectendmonth:     IMonthOfTheYear | null;
	projectendyear:      string | null;
	projectrolename:     string;
	projectroleindustry: string;
	isstillworking:      boolean;
}