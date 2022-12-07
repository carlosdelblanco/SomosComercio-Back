import BusinessForm from "../../components/BusinessForm/BusinessForm";
import CreateBusinessPageStyled from "./CreateBusinessPageStyled";

const createBusinessPage = (): JSX.Element => {
  return (
    <CreateBusinessPageStyled>
      <br />
      <header className="header">
        <h1 className="header__main-title">Añadir nuevo comercio</h1>
      </header>
      <BusinessForm />
    </CreateBusinessPageStyled>
  );
};

export default createBusinessPage;
