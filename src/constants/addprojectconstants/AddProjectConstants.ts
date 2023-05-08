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

const addProject = [
  {
    labelText: "Nama proyek",
    labelFor: "project_name",
    id: "project_name",
    name: "project_name",
    type: "text",
    autoComplete: "project_name",
    isRequired: true,
    placeholder: "cth: Proyek Jembatan Timbang Jakarta",
    titelKey: "project_name",
  },
	{
    labelText: "Nama klien",
    labelFor: "project_client",
    id: "project_client",
    name: "project_client",
    type: "text",
    autoComplete: "project_client",
    isRequired: true,
    placeholder: "cth: Pemprov DKI Jakarta",
    titelKey: "project_client",
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
    titelKey: "bidang_keahlian",
  },
	{
    labelText: "Area proyek",
    labelFor: "project_area",
    id: "project_area",
    name: "project_area",
    type: "project_area",
    autoComplete: "project_area",
    isRequired: true,
    placeholder: "Pilih area terlebih dahulu",
    titelKey: "project_area",
  },
	{
    labelText: "Nilai proyek",
    labelFor: "project_value",
    id: "project_value",
    name: "project_value",
    type: "number",
    autoComplete: "project_value",
    isRequired: true,
    placeholder: "tanpa titik, cth: 5000000000",
    titelKey: "project_value",
  },
	{
    labelText: "Durasi proyek",
    labelFor: "project_duration",
    id: "project_duration",
    name: "project_duration",
    type: "number",
    autoComplete: "project_duration",
    isRequired: true,
    placeholder: "dalam bulan, cth: 24",
    titelKey: "project_duration",
  },
	{
    labelText: "Proyek dimulai",
    labelFor: "project_start",
    id: "project_start",
    name: "project_start",
    type: "date",
    autoComplete: "project_start",
    isRequired: true,
    placeholder: "pilih tanggal proyek dimulai",
    titelKey: "project_start",
  },
	{
    labelText: "Submit sebelum",
    labelFor: "project_deadline",
    id: "project_deadline",
    name: "project_deadline",
    type: "date",
    autoComplete: "project_deadline",
    isRequired: true,
    placeholder: "pilih tanggal submit proyek",
    titelKey: "project_deadline",
  },
	{
    labelText: "Detail proyek",
    labelFor: "project_detail",
    id: "project_detail",
    name: "project_detail",
    type: "text_area",
    autoComplete: "project_area",
    isRequired: true,
    placeholder: "Masukkan detail proyek",
    titelKey: "project_detail",
  },
];

export {addProject}