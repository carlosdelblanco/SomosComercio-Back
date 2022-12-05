import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./mocks/renderWithProviders";

describe("Given an App component", () => {
  describe("When is rendered", () => {
    test("Then it should show a header component", () => {
      const expectedText = "Somos Comercio";

      renderWithProviders(<App />);

      const logo = screen.queryByAltText(expectedText);

      expect(logo).toBeInTheDocument();
    });
  });
});
