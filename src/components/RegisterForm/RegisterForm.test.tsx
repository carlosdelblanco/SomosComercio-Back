import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import RegisterForm from "./RegisterForm";

const mockRegisterAction = jest.fn();

jest.mock("../../hooks/useUser", () => {
  return () => ({
    registerUser: mockRegisterAction,
  });
});

describe("Given a RegisterForm Component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 2 input elements", () => {
      const inputElements = 2;

      renderWithProviders(<RegisterForm />);

      const formInput = screen.queryAllByRole("textbox");
      const passwordInput = screen.queryByLabelText("password-input");

      expect(formInput).toHaveLength(inputElements);
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("When it's button 'Registrarse' is called", () => {
    test("Then the form should be submitted", async () => {
      const textButton = "Registrarse";
      const username = "carlos";
      const email = "carlos@carlos.es";
      const password = "carlos";

      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.queryByLabelText("Usuario")!;
      await userEvent.type(usernameInput, username);
      const emailInput = screen.queryByLabelText("email")!;
      await userEvent.type(emailInput, email);
      const passwordInput = screen.queryByLabelText("Password")!;
      await userEvent.type(passwordInput, password);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(textButton);
      expect(mockRegisterAction).toHaveBeenCalled();
    });
  });
});
