import BusinessCardList from "./components/BusinessCardList/BusinessCardList";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <Layout />
      <BusinessCardList />
    </div>
  );
};

export default App;
