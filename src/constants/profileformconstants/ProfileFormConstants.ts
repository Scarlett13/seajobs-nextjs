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

const infoKontakFields = [
  {
    labelText: "Alamat email",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Alamat email",
    titelKey: "title_email",
  },
  {
    labelText: "Nomor handphone",
    labelFor: "phone_number",
    id: "phone_number",
    name: "phone_number",
    type: "tel",
    autoComplete: "phone_number",
    isRequired: true,
    placeholder: "0811******",
    titelKey: "title_phone_num",
  },
	{
    labelText: "Link portofolio",
    labelFor: "portfolio_link",
    id: "portfolio_link",
    name: "portfolio_link",
    type: "text",
    autoComplete: "link_portfolio",
    isRequired: true,
    placeholder: "https://linkedin.com/example-profile, https://behance.net/...",
    titelKey: "title_portfolio_url",
  },
];

export { identitasDiriFields, infoKontakFields };