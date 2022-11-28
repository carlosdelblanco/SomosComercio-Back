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
    </HeaderStyled>
  );
};

export default Header;
