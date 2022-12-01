import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import BusinessCard from "./BusinessCard";

describe("Given a BusinessCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a level 2 heading with businessName 'Peluqueria'", () => {
      const businessName = "Peluqueria";

      renderWithProviders(
        <BusinessCard
          businessName={"Peluqueria"}
          slogan={""}
          address={""}
          adhesionDate={""}
          contactNumber={""}
          businessImage={""}
        />
      );

      const businessCard = screen.queryByRole("heading", {
        level: 2,
        name: businessName,
      });
      expect(businessCard).toBeInTheDocument();
    });
  });
});
