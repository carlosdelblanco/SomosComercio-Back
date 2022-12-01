import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import BusinessCardList from "./BusinessCardList";

describe("Given a business list", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of businesses", () => {
      renderWithProviders(<BusinessCardList />);

      const businessList = screen.getByRole("list");

      expect(businessList).toBeInTheDocument();
    });
  });
});
