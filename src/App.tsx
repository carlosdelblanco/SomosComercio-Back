import BusinessCard from "./components/BusinessCard/BusinessCard";
import Header from "./components/Header/Header";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <RegisterForm />
      <BusinessCard
        businessName="Peluqueria Reflejos"
        slogan="Cuidando tu pelo desde 1988"
        address="c/Masnou, 77"
        adhesionDate="4/6/21"
        contactNumber="934567893"
        businessImage="https://media.istockphoto.com/id/1305586787/es/foto/retrato-de-mujeres-asi%C3%A1ticas-mujer-mujer-elegante-propietario-de-negocios-de-pie-y-sonre%C3%ADr.jpg?s=612x612&w=0&k=20&c=6zKTodH6YXRg9cTfBhQ1kdpr2wlpDztUwkzp2IZ-EYc="
      />
    </div>
  );
};

export default App;
