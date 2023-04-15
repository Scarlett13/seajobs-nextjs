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
	disabled?: boolean;
	titelKey?: string;
};

const resetPasswordRequestFields = [
	{
    labelText: "Email",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email",
    titelKey: "email",
  }
]

const confirmResetPasswordRequestFields = [
	{
    labelText: "Email",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: false,
    placeholder: "Email",
    titelKey: "email",
		disabled: true,
  },
	{
    labelText: "Password Baru",
    labelFor: "new_password",
    id: "new_password",
    name: "new_password",
    type: "password",
    autoComplete: "-",
    isRequired: true,
    placeholder: "Password Baru",
    titelKey: "new_password",
		disabled: false,
  },
	{
    labelText: "Konfirmasi Password Baru",
    labelFor: "new_password_confirmation",
    id: "new_password_confirmation",
    name: "new_password_confirmation",
    type: "password",
    autoComplete: "-",
    isRequired: true,
    placeholder: "Konfirmasi Password Baru",
    titelKey: "new_password_confirmation",
		disabled: false,
  },
	{
    labelText: "Kode Verifikasi",
    labelFor: "verification_code",
    id: "verification_code",
    name: "verification_code",
    type: "text",
    autoComplete: "-",
    isRequired: true,
    placeholder: "Kode Verifikasi",
    titelKey: "verification_code",
		disabled: false,
  },
]

export {resetPasswordRequestFields, confirmResetPasswordRequestFields}