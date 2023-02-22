import { ITextArea } from './TextArea';

const base: ITextArea = {
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
};

export const mockTextAreaProps = {
  base,
};