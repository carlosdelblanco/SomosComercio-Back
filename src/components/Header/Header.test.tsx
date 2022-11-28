import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered with an svg format image with the label 'logo'", () => {
    test("Then it should show the image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.queryByTestId("logo");

      expect(logo).toBeInTheDocument();
    });
  });
});
