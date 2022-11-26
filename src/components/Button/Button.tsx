import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  isDisabled?: boolean;
  type: "button" | "submit";
}

const Button = ({
  text,
  action,
  isDisabled: isDisable,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
