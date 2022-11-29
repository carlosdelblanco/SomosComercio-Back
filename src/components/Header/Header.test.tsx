import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered with a png format image with the label 'logo'", () => {
    test("Then it should show the image", () => {
      const expectedText = "Somos Comercio";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.queryByAltText(expectedText);

      expect(logo).toBeInTheDocument();
    });
  });
});
