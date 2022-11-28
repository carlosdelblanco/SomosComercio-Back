import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with text 'Registrarse'", () => {
    test("Then it should show 'Registrarse' on it", () => {
      const expectedText = "Registrarse";

      renderWithProviders(<Button action={() => {}} text="Registrarse" />);

      const expectedButton = screen.getByRole("button", {
        name: expectedText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
