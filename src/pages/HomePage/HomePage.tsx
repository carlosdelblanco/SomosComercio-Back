import BusinessCardList from "../../components/BusinessCardList/BusinessCardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <BusinessCardList />
    </HomePageStyled>
  );
};

export default HomePage;
