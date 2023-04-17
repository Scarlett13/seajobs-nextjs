import { IPasswordTemplate } from './PasswordTemplate';

const base: IPasswordTemplate = {
  handleChange: "any",
  value: "any",
  labelText: "string",
  labelFor: "string",
  id: "string",
  name: "string",
  type: "any",
  isRequired: false,
  placeholder: "string",
  customClass: "any",
	isTa: false
};

export const mockPasswordTemplateProps = {
  base,
};