export type FormFields = {
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  isRequired: boolean;
  placeholder: string;
	maxChar?: number;
	titelKey: string;
};

const companyProfileFormFields = [
	{
    labelText: "Nama perusahaan",
    labelFor: "company_name",
    id: "company_name",
    name: "company_name",
    type: "text",
    autoComplete: "company_name",
    isRequired: true,
    placeholder: "cth: PT. ABC, tbk",
    titelKey: "company_name",
  },
	{
    labelText: "Email bisnis perusahaan",
    labelFor: "business_email",
    id: "business_email",
    name: "business_email",
    type: "email",
    autoComplete: "business_email",
    isRequired: true,
    placeholder: "cth: hello@perusahaan.com",
    titelKey: "business_email",
  },
	{
    labelText: "Nomor telepon perusahaan",
    labelFor: "company_phone",
    id: "company_phone",
    name: "company_phone",
    type: "phone",
    autoComplete: "company_phone",
    isRequired: true,
    placeholder: "cth: (021)234567890",
    titelKey: "company_phone",
  },
	
	{
    labelText: "Alamat perusahaan",
    labelFor: "company_address",
    id: "company_address",
    name: "company_address",
    type: "text",
    autoComplete: "company_address",
    isRequired: true,
    placeholder: "cth: jl. abc no. 123, kota, provinsi, negara",
    titelKey: "company_address",
  },
	{
    labelText: "Deskripsi perusahaan",
    labelFor: "company_description",
    id: "company_description",
    name: "company_description",
    type: "textarea",
    autoComplete: "company_description",
    isRequired: true,
    placeholder: "Deskripsi perusahaan",
    titelKey: "company_description",
  },
	{
    labelText: "Jumlah karyawan",
    labelFor: "employee_number",
    id: "employee_number",
    name: "employee_number",
    type: "dropdown",
    autoComplete: "-",
    isRequired: true,
    placeholder: "Silahkan pilih jumlah karyawan terlebih dahulu",
    titelKey: "title_keahlian",
  },
	{
    labelText: "Nama penuh PIC",
    labelFor: "pic_fullname",
    id: "pic_fullname",
    name: "pic_fullname",
    type: "text",
    autoComplete: "pic_fullname",
    isRequired: true,
    placeholder: "Nama penuh PIC",
    titelKey: "pic_fullname",
  },
	
]

export {companyProfileFormFields}