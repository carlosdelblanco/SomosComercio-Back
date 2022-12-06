import { Route, Routes } from "react-router-dom";
import CreateBusinessPage from "../../pages/CreateBusinessPage/CreateBusinessPage";
import HomePage from "../../pages/HomePage/HomePage";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateBusinessPage />} />
      </Routes>
    </LayoutStyled>
  );
};

export default Layout;
