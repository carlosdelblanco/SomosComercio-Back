import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        className="header__logo"
        src="/media/somoscomercio.png"
        alt="Somos Comercio"
        width="150"
        height="100"
      />
      <div className="header-navigation">
        <Link to={"/"}>Home</Link>
        <Link to={"/create"}>Añadir comercio</Link>
      </div>
    </HeaderStyled>
  );
};

export default Header;
