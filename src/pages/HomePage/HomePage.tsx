import { Link } from "react-router-dom";
import BusinessCardList from "../../components/BusinessCardList/BusinessCardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <header>
        <h1>Añadir comercio</h1>
      </header>
      <Link to={"/create"}>Añadir comercio</Link>
      <BusinessCardList />
    </HomePageStyled>
  );
};

export default HomePage;
