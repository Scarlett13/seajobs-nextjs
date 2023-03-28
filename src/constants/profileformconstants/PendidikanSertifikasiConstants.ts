export interface IPendidikanSertifikasi{
	pendidikanId: string;
	pendidikanType: string;
	institutionName: string;
	sanitisedInstitutionName: string;
	courseName: string;
	pendidikanDescription: string;
	institutionAddress: string;
	institutionUrl: string;
	entryMonth: string;
	entryYear:string;
	endMonth: string;
	endYear: string;
	taId?: string;
}