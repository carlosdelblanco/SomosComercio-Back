import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockBusinessCard from "../../mocks/mockBusinessCard";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import BusinessCard from "./BusinessCard";

const mockDeleteBusiness = jest.fn();

jest.mock("../../hooks/useBusiness/useBusiness", () => {
  return () => ({
    deleteBusiness: mockDeleteBusiness,
  });
});

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

    test("And it should show a button with text 'Eliminar',", async () => {
      const textButton = "Eliminar";

      renderWithProviders(<BusinessCard business={mockBusinessCard} />);
      const button = screen.queryByRole("button", { name: textButton })!;
      await userEvent.click(button!);

      expect(button).toBeInTheDocument();
      expect(mockDeleteBusiness).toHaveBeenCalled();
    });
  });
});
