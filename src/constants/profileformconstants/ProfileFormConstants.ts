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

const deskripsiDiriFields = [
  {
    labelText: "Deskripsi diri",
    labelFor: "deskripsi_diri",
    id: "deskripsi_diri",
    name: "deskripsi_diri",
    type: "textarea",
    autoComplete: "",
    isRequired: true,
    placeholder: "Tuliskan deskripsi singkat diri kamu dalam 150 karakter",
    titelKey: "title_deskripsi_diri",
		maxChar: 150
  }
];

const tambahPerusahaanFields = [
  {
    labelText: "Nama perusahaan",
    labelFor: "nama_perusahaan",
    id: "nama_perusahaan",
    name: "nama_perusahaan",
    type: "text",
    autoComplete: "company_name",
    isRequired: true,
    placeholder: "cth: PT Industri Arsitek Indonesia",
    titelKey: "nama_perusahaan"
  },
	{
    labelText: "Lokasi perusahaan",
    labelFor: "lokasi_perusahaan",
    id: "lokasi_perusahaan",
    name: "lokasi_perusahaan",
    type: "text",
    autoComplete: "company_location",
    isRequired: true,
    placeholder: "cth: Jakarta, Indonesia",
    titelKey: "lokasi_perusahaan"
  }
];

const tambahProyekFields = [
  {
    labelText: "Nama proyek",
    labelFor: "nama_proyek",
    id: "nama_proyek",
    name: "nama_proyek",
    type: "text",
    autoComplete: "project_name",
    isRequired: true,
    placeholder: "cth: Pengerjaan Jembatan Gemah Ripah",
    titelKey: "nama_proyek"
  },
	{
    labelText: "Nama klien",
    labelFor: "nama_klien",
    id: "nama_klien",
    name: "nama_klien",
    type: "text",
    autoComplete: "client_name",
    isRequired: true,
    placeholder: "cth: PT Client Jembatan Sejahtera",
    titelKey: "nama_klien"
  },
	{
    labelText: "Posisi kerja",
    labelFor: "posisi_kerja",
    id: "posisi_kerja",
    name: "posisi_kerja",
    type: "text",
    autoComplete: "posisition",
    isRequired: true,
    placeholder: "cth: Supervisor",
    titelKey: "posisi_kerja"
  },
	{
    labelText: "Deskripsi proyek",
    labelFor: "deskripsi_proyek",
    id: "deskripsi_proyek",
    name: "deskripsi_proyek",
    type: "textarea",
    autoComplete: "deskripsi_proyek",
    isRequired: true,
    placeholder: "Masukkan deskripsi proyek kamu",
    titelKey: "deskripsi_proyek",
		maxChar: 150
  },
	{
    labelText: "Lokasi proyek",
    labelFor: "lokasi_proyek",
    id: "lokasi_proyek",
    name: "lokasi_proyek",
    type: "text",
    autoComplete: "project_location",
    isRequired: true,
    placeholder: "cth: Jakarta, Indonesia",
    titelKey: "lokasi_proyek"
  },
	{
    labelText: "Jenis pekerjaan",
    labelFor: "jenis_pekerjaan",
    id: "jenis_pekerjaan",
    name: "jenis_pekerjaan",
    type: "jenis_pekerjaan",
    autoComplete: "jenis_pekerjaan",
    isRequired: true,
    placeholder: "pilih salah satu jenis pekerjaan",
    titelKey: "jenis_pekerjaan"
  },
	{
    labelText: "Proyek dimulai",
    labelFor: "proyek_dimulai",
    id: "proyek_dimulai",
    name: "proyek_dimulai",
    type: "month_year",
    autoComplete: "proyek_dimulai",
    isRequired: true,
    placeholder: "Bulan dan tahun proyek dimulai",
    titelKey: "proyek_dimulai"
  },
	{
    labelText: "Proyek selesai",
    labelFor: "proyek_selesai",
    id: "proyek_selesai",
    name: "proyek_selesai",
    type: "month_year",
    autoComplete: "proyek_selesai",
    isRequired: false,
    placeholder: "Bulan dan tahun proyek selesai (kosongkan jika masih berjalan)",
    titelKey: "proyek_selesai"
  },
];

export { identitasDiriFields, infoKontakFields, deskripsiDiriFields, tambahPerusahaanFields, tambahProyekFields };