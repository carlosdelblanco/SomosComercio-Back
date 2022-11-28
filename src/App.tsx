import Header from "./components/Header/Header";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <RegisterForm />
    </div>
  );
};

export default App;
