import { FormEventHandler } from "react";

export interface IInputTemplate {
  handleSubmit?: FormEventHandler | undefined;
  action?: "submit" | "reset" | "button" | undefined;
  text?: string;
  type?: string;
}

const FormAction: React.FC<IInputTemplate> = ({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) => {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main-cta-button-bg hover:bg-main-cta-button-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-10"
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormAction;
