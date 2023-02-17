export type FormFields = {
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  isRequired: boolean;
  placeholder: string;
};

export interface IBidangKeahlian {
	id: number;
	categoryname: string;
	subcategoryname: string;
	descripton: string;
	iscollapsible: boolean;
}

const identitasDiriFields = [
	{
    labelText: "Nama lengkap",
    labelFor: "fullname",
    id: "fullname",
    name: "fullname",
    type: "text",
    autoComplete: "fullname",
    isRequired: true,
    placeholder: "Nama lengkap",
    titelKey: "title_name",
  },
	{
    labelText: "Bidang keahlian",
    labelFor: "bidang_keahlian",
    id: "bidang_keahlian",
    name: "bidang_keahlian",
    type: "bidang_keahlian",
    autoComplete: "bidang_keahlian",
    isRequired: true,
    placeholder: "Silahkan pilih bidang keahlian terlebih dahulu",
    titelKey: "title_keahlian",
  },
	{
    labelText: "Alamat domisili",
    labelFor: "address",
    id: "address",
    name: "address",
    type: "text",
    autoComplete: "address",
    isRequired: true,
    placeholder: "Alamat domisili",
    titelKey: "title_address",
  },
]

const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "text",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
    titelKey: "title_email",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current_password",
    isRequired: true,
    placeholder: "Password",
    titelKey: "title_password",
  },
];

export { identitasDiriFields };