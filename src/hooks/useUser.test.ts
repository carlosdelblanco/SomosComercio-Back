import { renderHook } from "@testing-library/react";
import { UserRegisteredData } from "../data/types";
import ProviderWrapper from "../mocks/providerWrapper";
import { openModalActionCreator } from "../redux/features/uiSlice/uiSlice";
import { store } from "../redux/store";
import { OpenModalPayload } from "../types/types";
import useUser from "./useUser";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useUser custom hook", () => {
  const {
    result: {
      current: { registerUser },
    },
  } = renderHook(() => useUser(), {
    wrapper: ProviderWrapper,
  });

  describe("When it's method registerUser is invoked with username 'john' and password 'john' and email 'john@john.com'", () => {
    test("Then it should invoke dispatch with openModalActionCreator", async () => {
      const newUser: UserRegisteredData = {
        username: "john",
        password: "john",
        email: "john@john.com",
      };
      const modalSuccessPayload: OpenModalPayload = {
        feedbackMessage: "User registered",
        isError: false,
      };
      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalSuccessPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username 'john' and password 'john' and email 'john@john.com'", () => {
    test("Then it should dipatchwith openmodalAction creator with text 'user already registered'", async () => {
      const newUser: UserRegisteredData = {
        username: "john",
        password: "john",
        email: "john@john.com",
      };
      const modalErrorPayload: OpenModalPayload = {
        feedbackMessage: "Unable to register, user already exists",
        isError: true,
      };
      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalErrorPayload)
      );
    });
  });
});
