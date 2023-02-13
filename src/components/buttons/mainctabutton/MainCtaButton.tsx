export interface IMainCtaButton
  extends React.ComponentPropsWithoutRef<"button"> {
  buttonName: string;
}

const MainCtaButton: React.FC<IMainCtaButton> = ({
  children,
  buttonName,
  ...buttonProps
}) => {
  return (
    <button className={buttonProps.className} {...buttonProps}>
      {buttonName}
    </button>
  );
};

export default MainCtaButton;
