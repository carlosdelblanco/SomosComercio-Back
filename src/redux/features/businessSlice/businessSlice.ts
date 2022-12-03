import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Business } from "../../../types/types";

interface BusinessState {
  business: Business[];
}
export const BusinesssInitialState: BusinessState = {
  business: [],
};

const businessSlice = createSlice({
  name: "business",
  initialState: BusinesssInitialState,
  reducers: {
    loadAllBusiness: (initialState, action: PayloadAction<Business[]>) => ({
      ...initialState,
      business: [...action.payload],
    }),
    deleteBusiness: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      business: [
        ...initialState.business.filter(
          (business) => business.id !== action.payload
        ),
      ],
    }),
  },
});

export const businessReducer = businessSlice.reducer;

export const {
  loadAllBusiness: loadAllBusinessActionCreator,
  deleteBusiness: deleteBusinessActionCreator,
} = businessSlice.actions;
