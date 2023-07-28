import { FormEventHandler } from "react";

export interface IInputTemplate {
  handleSubmit?: FormEventHandler | undefined;
  action?: "submit" | "reset" | "button" | undefined;
  text?: string;
  type?: string;
  isLoading: boolean;
  isTa: boolean;
}

const FormAction: React.FC<IInputTemplate> = ({
  handleSubmit,
  type = "Button",
  action = "submit",
  isLoading,
  text,
  isTa,
}) => {
  const disabled =
    isLoading !== null || isLoading !== undefined ? isLoading : false;

  console.log("status loading: ", isLoading);
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2  mt-10 ${
            isTa
              ? "text-white bg-main-cta-button-bg hover:bg-main-cta-button-bg focus:ring-black"
              : "text-gray-900 bg-main-cta-button-bg hover:bg-main-cta-button-bg focus:ring-white"
          }`}
          onSubmit={handleSubmit}
          disabled={disabled}
        >
          {isLoading === null || isLoading === undefined
            ? text
            : isLoading
            ? "Loading..."
            : text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormAction;
