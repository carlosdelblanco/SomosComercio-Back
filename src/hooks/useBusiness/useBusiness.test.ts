import { renderHook } from "@testing-library/react";
import { mockBusinessCardListItems } from "../../mocks/mockBusinessCard";
import ProviderWrapper from "../../mocks/providerWrapper";
import { deleteBusinessActionCreator } from "../../redux/features/businessSlice/businessSlice";
import { store } from "../../redux/store";
import useBusiness from "./useBusiness";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a useBusiness hook", () => {
  describe("When it is invoked with the method loadAllBusiness", () => {
    test("Then it should return a list of business", async () => {
      const {
        result: { current },
      } = renderHook(() => useBusiness(), {
        wrapper: ProviderWrapper,
      });

      await current.loadAllBusiness();

      expect(dispatchSpy).toHaveBeenCalled();
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

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When it's method deleteBusiness is invoked with a businessId", () => {
    test("Then it should invoke dispatch with deleteBusinessActionCreator and the businessId", async () => {
      const {
        result: {
          current: { deleteBusiness },
        },
      } = renderHook(() => useBusiness(), {
        wrapper: ProviderWrapper,
      });

      const { id } = mockBusinessCardListItems[0];

      await deleteBusiness(id);

      expect(dispatchSpy).toHaveBeenCalledWith(
        deleteBusinessActionCreator(id as string)
      );
    });
  });
});
