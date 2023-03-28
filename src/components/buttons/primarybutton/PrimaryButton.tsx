export interface IPrimaryButton
  extends React.ComponentPropsWithoutRef<"button"> {
  buttonName: string;
  isLoading?: boolean;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  className,
  children,
  buttonName,
  isLoading,
  ...buttonProps
}) => {
  return (
    <button
      className={`${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`}
      {...buttonProps}
    >
      {isLoading === null || isLoading === undefined
        ? buttonName
        : isLoading
        ? "Loading..."
        : buttonName}
    </button>
  );
};

export default PrimaryButton;
