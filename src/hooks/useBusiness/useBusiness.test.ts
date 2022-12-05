import { renderHook } from "@testing-library/react";
import { mockBusinessCardListItems } from "../../mocks/mockBusinessCard";
import ProviderWrapper from "../../mocks/providerWrapper";
import { deleteBusinessActionCreator } from "../../redux/features/businessSlice/businessSlice";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
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

  describe("When it's method deleteBusiness is invoked and the request fails", () => {
    test("Then it should invoke dispatch with openModalActionCreator with a custom error", async () => {
      const {
        result: {
          current: { deleteBusiness },
        },
      } = renderHook(() => useBusiness(), {
        wrapper: ProviderWrapper,
      });
      const { id: testBusinessId } = mockBusinessCardListItems[0];

      await deleteBusiness(testBusinessId as string);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: true,
          feedbackMessage: "Business not found",
        })
      );
    });
  });
});
