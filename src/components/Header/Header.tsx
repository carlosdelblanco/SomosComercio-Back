import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        className="header__logo"
        src="/media/somoscomercio.png"
        alt="Somos Comercio"
        width="200"
      />
      <Link to={"/"}>Home</Link>
      <Link to={"/create"}>Añadir comercio</Link>
    </HeaderStyled>
  );
};

export default Header;
