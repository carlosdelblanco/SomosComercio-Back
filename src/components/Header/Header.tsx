import { ReactComponent as Logo } from "../../media/somoscomercio.svg";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <Logo
        className="header__logo"
        aria-label="Somos Comercio"
        data-testid="logo"
        width="200"
      />
    </HeaderStyled>
  );
};

export default Header;
