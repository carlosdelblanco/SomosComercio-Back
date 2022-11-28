import styled from "styled-components";

const HeaderStyled = styled.header`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 30px;
    max-width: 450px;
  }

  .header__logo {
    background-color: red;
  }
`;

export default HeaderStyled;
