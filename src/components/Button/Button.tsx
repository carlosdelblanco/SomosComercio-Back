import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  text: string;
  action?: () => void;
  isDisabled?: boolean;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  action,
  onSubmit,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      onSubmit={onSubmit}
      onClick={action}
      className={`button ${className}`}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
