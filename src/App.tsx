import Button from "./components/Button/Button";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <RegisterForm />
      <Button />
    </div>
  );
};

export default App;
