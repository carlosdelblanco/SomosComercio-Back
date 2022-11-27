import { screen } from "@testing-library/react";
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
    test("Then it should show 3 input elements", () => {
      const inputElements = 2;

      renderWithProviders(<RegisterForm />);

      const formInput = screen.queryAllByRole("textbox");
      const passwordInput = screen.queryByLabelText("password-input");

      expect(formInput).toHaveLength(inputElements);
      expect(passwordInput).toBeInTheDocument();
    });
  });
});
