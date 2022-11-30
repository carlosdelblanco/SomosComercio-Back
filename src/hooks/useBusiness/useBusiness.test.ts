import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import { store } from "../../redux/store";
import useBusiness from "./useBusiness";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useBusiness hook", () => {
  describe("When it is invoked with the method loadAllBusiness", () => {
    test("Then it should return a list of business", async () => {
      const {
        result: { current },
      } = renderHook(() => useBusiness(), {
        wrapper: ProviderWrapper,
      });

      await current.loadAllBusiness();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is invoked with the method loadAllBusiness and axios rejects it", () => {
    test("Then it should dispatch an modal error", async () => {
      const {
        result: {
          current: { loadAllBusiness },
        },
      } = renderHook(() => useBusiness(), {
        wrapper: ProviderWrapper,
      });

      await loadAllBusiness();

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
