import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  max-width: 450px;
  font-family: ${(props) => props.theme.font.family};
  color: ${(props) => props.theme.colors.primaryLetterColor};

  .register-form__field {
    size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.primaryColor};
    border-radius: 4px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

export default RegisterFormStyled;
