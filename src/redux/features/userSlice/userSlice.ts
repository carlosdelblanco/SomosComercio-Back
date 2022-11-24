import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenModalPayload, UserState } from "../../../types/types";

const userInitialState: UserState = {
  modal: {
    isOpen: false,
    feedbackMessage: "",
    isError: false,
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "modal",
  initialState: userInitialState,
  reducers: {
    openModal: (ui, action: PayloadAction<OpenModalPayload>) => ({
      ...ui,
      modal: {
        isOpen: true,
        feedbackMessage: action.payload.feedbackMessage,
        isError: true,
      },
    }),
    closeModal: (ui) => ({
      ...ui,
      modal: {
        isOpen: false,
        isError: false,
        feedbackMessage: "",
      },
    }),
  },
});

export const userSliceReducer = userSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = userSlice.actions;
