import { screen } from "@testing-library/react";
import mockBusinessCard from "../../mocks/mockBusinessCard";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import BusinessCard from "./BusinessCard";

describe("Given a BusinessCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a level 2 heading with businessName 'Peluqueria'", () => {
      renderWithProviders(<BusinessCard business={mockBusinessCard} />);

      const businessCard = screen.queryByRole("heading", {
        level: 2,
        name: mockBusinessCard.businessName,
      });
      expect(businessCard).toBeInTheDocument();
    });
  });
});
