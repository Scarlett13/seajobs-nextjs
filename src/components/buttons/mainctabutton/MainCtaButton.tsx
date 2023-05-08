export interface IMainCtaButton
  extends React.ComponentPropsWithoutRef<"button"> {
  buttonName: string;
  isLoading?: boolean;
}

const MainCtaButton: React.FC<IMainCtaButton> = ({
  children,
  buttonName,
  isLoading,
  ...buttonProps
}) => {
  return (
    <button className={buttonProps.className} {...buttonProps} type="button">
      {isLoading === null || isLoading === undefined
        ? buttonName
        : isLoading
        ? "Loading..."
        : buttonName}
    </button>
  );
};

export default MainCtaButton;
