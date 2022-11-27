import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  //max-width: 450px;
  font-family: ${(props) => props.theme.font.family};
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
`;

export default ButtonStyled;
