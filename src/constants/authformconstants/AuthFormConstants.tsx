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

const signupFields = [
  {
    labelText: "Nama lengkap PIC perusahaan",
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
    labelText: "Email address",
    labelFor: "email_address",
    id: "email_address",
    name: "email",
    type: "email",
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
  {
    labelText: "Confirm Password",
    labelFor: "confirm_password",
    id: "confirm_password",
    name: "confirm_password",
    type: "password",
    autoComplete: "confirm_password",
    isRequired: true,
    placeholder: "Confirm Password",
    titelKey: "title_confirm",
  },
];

export { loginFields, signupFields };
