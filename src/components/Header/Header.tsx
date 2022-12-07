import { NavLink } from "react-router-dom";
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
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create"}>Añadir comercio</NavLink>
      </div>
    </HeaderStyled>
  );
};

export default Header;
