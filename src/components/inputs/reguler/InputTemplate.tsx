export interface IInputTemplate {
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
}

const fixedInputClass =
  "bg-black rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg focus:z-10 sm:text-sm";

const InputTemplate: React.FC<IInputTemplate> = ({
  handleChange,
  value,
  labelFor,
  labelText,
  id,
  name,
  type,
  isRequired,
  placeholder,
  customClass,
  ...inputProps
}) => {
  return (
    <>
      <div className="my-5">
        <label htmlFor={labelFor} className="sr-only">
          {labelText}
        </label>
        <input
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          type={type}
          required={isRequired}
          className={fixedInputClass + customClass}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputTemplate;
