import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  .header {
  }

  .header__logo {
  }

  .header__registrar {
    color: #3793c2;
  }

  .header-navigation {
    display: flex;
    flex-direction: column;
  }

  a:visited {
    color: #b6bcbd;
  }
`;

export default HeaderStyled;
