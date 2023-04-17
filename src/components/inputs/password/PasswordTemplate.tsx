import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export interface IPasswordTemplate {
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
  isTa: boolean;
}

const fixedInputClassTa =
  "bg-black rounded-none appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg sm:text-sm";

const fixedInputClassCom =
  "bg-white rounded-none appearance-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500  focus:outline-none focus:ring-main-cta-button-bg focus:border-main-cta-button-bg sm:text-sm text-gray-900";

const PasswordTemplate: React.FC<IPasswordTemplate> = ({
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
  isTa,
  ...inputProps
}) => {
  const [visible, setVisible] = useState<boolean>(false);
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
          type={visible ? "text" : "password"}
          required={isRequired}
          className={
            isTa ? fixedInputClassTa : fixedInputClassCom + customClass
          }
          placeholder={placeholder}
          minLength={8}
        />
        <span
          className={`relative block cursor-pointer -mt-8 mr-4 float-right`}
        >
          {
            <FontAwesomeIcon
              icon={visible ? faEye : faEyeSlash}
              onClick={() => setVisible(!visible)}
            />
          }
        </span>
      </div>
    </>
  );
};

export default PasswordTemplate;
