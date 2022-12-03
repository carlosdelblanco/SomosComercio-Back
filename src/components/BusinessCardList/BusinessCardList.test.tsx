import { screen } from "@testing-library/react";
import { mockBusinessCardList } from "../../mocks/mockBusinessCard";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import BusinessCardList from "./BusinessCardList";

describe("Given a business list", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of businesses", () => {
      renderWithProviders(<BusinessCardList />, {
        preloadedState: {
          uiReducer: {
            modal: {
              isOpen: false,
              feedbackMessage: "",
              isError: false,
            },
            isLoading: false,
          },
          businessReducer: { businessList: mockBusinessCardList },
        },
      });

      const businessList = screen.getByRole("list");

      expect(businessList).toBeInTheDocument();
    });
  });
});
