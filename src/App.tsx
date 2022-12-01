import BusinessCardList from "./components/BusinessCardList/BusinessCardList";
import Header from "./components/Header/Header";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />

      <BusinessCardList />
    </div>
  );
};

export default App;
