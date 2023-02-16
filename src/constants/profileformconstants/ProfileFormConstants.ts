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

export type BidangKeahlianType = {
	categoryname: string;
	subcategoryname: string;
	descripton: string;
	iscollapsible: boolean;
}

export interface IBidangKeahlian {
	bidangkeahlian: [BidangKeahlianType]
}

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

export { loginFields };