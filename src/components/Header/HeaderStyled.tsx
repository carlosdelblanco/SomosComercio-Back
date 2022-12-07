import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;

  .header__logo {
    padding-top: 20px;
  }

  .header__registrar {
    color: #3793c2;
  }

  .header-navigation {
    display: flex;
    flex-direction: column;
    color: #b6bcbd;
    text-decoration: none;

    .active {
      color: #000;
      text-decoration: underline;
    }
  }

  a:visited {
    color: #b6bcbd;
  }
`;

export default HeaderStyled;
