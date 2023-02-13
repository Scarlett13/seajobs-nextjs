import { IInputTemplate } from './InputTemplate';

const base: IInputTemplate = {
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
  inputProps: "any",
};

export const mockInputTemplateProps = {
  base,
};