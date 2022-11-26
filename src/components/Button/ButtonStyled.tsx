import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  max-width: 450px;

  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primaryLetterButtonColor};
`;

export default ButtonStyled;
