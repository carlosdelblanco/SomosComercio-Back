import { Link } from "react-router-dom";
import BusinessCardList from "../../components/BusinessCardList/BusinessCardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <Link to={"/create"}>Añadir comercio</Link>
      <BusinessCardList />
    </HomePageStyled>
  );
};

export default HomePage;
