import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import BusinessForm from "./BusinessForm";

const mockCreateBusinessAction = jest.fn();

jest.mock("../../hooks/useBusiness/useBusiness", () => {
  return () => ({ createBusines: mockCreateBusinessAction });
});

describe("Given the BusinessForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a form with all the fields from the Business, 'businessName' 'category' 'slogan' 'address' 'adhesionDate' 'contactNumber' 'businessImage'", () => {
      renderWithProviders(<BusinessForm />);
      const expectedInputs = 7;
      const totalInputs = screen.queryAllByRole("textbox");

      const businessNameInput = screen.queryByRole("textbox", {
        name: "Nombre de negocio",
      });
      const categoryInput = screen.queryByRole("textbox", {
        name: "Categoría",
      });
      const sloganInput = screen.queryByRole("textbox", {
        name: "slogan",
      });
      const addressInput = screen.queryByRole("textbox", {
        name: "Dirección",
      });
      const adhesionDateInput = screen.queryByRole("textbox", {
        name: "Fecha de adhesión",
      });
      const contactNumberInput = screen.queryByRole("textbox", {
        name: "Contacto",
      });
      const businessImageInput = screen.queryByRole("textbox", {
        name: "Imagen",
      });

      expect(totalInputs).toHaveLength(expectedInputs);
      expect(businessNameInput).toBeInTheDocument();
      expect(categoryInput).toBeInTheDocument();
      expect(sloganInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
      expect(adhesionDateInput).toBeInTheDocument();
      expect(contactNumberInput).toBeInTheDocument();
      expect(businessImageInput).toBeInTheDocument();
    });
  });
});
