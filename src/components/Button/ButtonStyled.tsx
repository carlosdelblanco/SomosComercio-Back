import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: ${(props) => props.theme.font.family};
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  padding: 15px;
  align-self: center;
`;

export default ButtonStyled;
