import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primaryLetterButtonColor};
`;

export default ButtonStyled;
