import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  isDisabled?: boolean;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({ text, action, onSubmit }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onSubmit={onSubmit} onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
