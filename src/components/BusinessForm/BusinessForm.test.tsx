import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import BusinessForm from "./BusinessForm";

const mockCreateBusinessAction = jest.fn();

jest.mock("../../hooks/useBusiness/useBusiness", () => {
  return () => ({ createBusiness: mockCreateBusinessAction });
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
        name: "Slogan",
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

  describe("When it's filled and it's button 'Crear negocio' is clicked", () => {
    test("Then the form should be submitted", async () => {
      renderWithProviders(<BusinessForm />);

      const businessNameInput = screen.queryByRole("textbox", {
        name: "Nombre de negocio",
      })!;
      await userEvent.type(businessNameInput, "Peluqueria Santos");

      const categoryInput = screen.queryByRole("textbox", {
        name: "Categoría",
      })!;
      await userEvent.type(categoryInput, "Servicios");

      const sloganInput = screen.queryByRole("textbox", {
        name: "Slogan",
      })!;
      await userEvent.type(sloganInput, "A su servicio");

      const addressInput = screen.queryByRole("textbox", {
        name: "Dirección",
      })!;
      await userEvent.type(addressInput, "c/Masnou, 43");

      const adhesionDateInput = screen.queryByRole("textbox", {
        name: "Fecha de adhesión",
      })!;
      await userEvent.type(adhesionDateInput, "14/06/17");

      const contactNumberInput = screen.queryByRole("textbox", {
        name: "Contacto",
      })!;
      await userEvent.type(contactNumberInput, "934567111");

      const businessImageInput = screen.queryByRole("textbox", {
        name: "Imagen",
      })!;
      await userEvent.type(
        businessImageInput,
        "https://images.unsplash.com/photo-1550534790-5724c29d08f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      );
      const buttonCrearNegocio = screen.queryByRole("button")!;
      await userEvent.click(buttonCrearNegocio);

      expect(mockCreateBusinessAction).toHaveBeenCalled();
    });
  });
});
