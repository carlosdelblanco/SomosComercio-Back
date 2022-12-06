import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <Layout />
    </div>
  );
};

export default App;
