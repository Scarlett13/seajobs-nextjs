export interface IPrimaryButton
  extends React.ComponentPropsWithoutRef<"button"> {
  buttonName: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  className,
  children,
  buttonName,
  ...buttonProps
}) => {
  return (
    <button
      className={`${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`}
      {...buttonProps}
    >
      {buttonName}
    </button>
  );
};

export default PrimaryButton;
