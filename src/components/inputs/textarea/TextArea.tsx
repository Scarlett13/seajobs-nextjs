import { Textarea as NextTextArea } from "@nextui-org/react";

export interface ITextArea {
  handleChange?: any;
  value?: string;
  labelText?: string;
  labelFor?: string;
  id?: string;
  name?: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  customClass?: string;
  minRows?: number;
  maxRows?: number;
  maxLength?: number;
  helperText?: string;
  error?: boolean;
}

const fixedInputClass =
  "resize-none bg-black rounded-none appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg focus:z-10 sm:text-sm";

const TextArea: React.FC<ITextArea> = ({
  handleChange,
  value,
  labelFor,
  labelText,
  id,
  name,
  isRequired,
  placeholder,
  customClass,
  minRows,
  maxRows,
  helperText,
  error,
  maxLength,
  ...inputProps
}) => {
  return (
    <>
      <div className="my-5">
        <label htmlFor={labelFor} className="sr-only">
          {"labelText"}
        </label>
        <textarea
          aria-label={labelText}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          rows={minRows ? minRows : 3}
          // minRows={minRows ? minRows : 3}
          // maxRows={maxRows ? maxRows : 5}
          required={isRequired}
          onChange={handleChange}
          // helperText={helperText}
          className={fixedInputClass + customClass}
          maxLength={maxLength}
        />
      </div>
    </>
  );
};

export default TextArea;
