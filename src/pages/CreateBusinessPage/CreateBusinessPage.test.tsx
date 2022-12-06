import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import CreateBusinessPage from "./CreateBusinessPage";

describe("Given the CreateBusinessPage", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 with text 'Añadir negocio'", () => {
      const headingText = "Añadir negocio";

      renderWithProviders(<CreateBusinessPage />);

      const heading = screen.queryByRole("heading", {
        name: "Añadir nuevo comercio",
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
