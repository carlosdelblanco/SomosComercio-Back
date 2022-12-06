import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Business, BusinessState } from "./types";

export const BusinessInitialState: BusinessState = {
  businessList: [],
};

const businessSlice = createSlice({
  name: "business",
  initialState: BusinessInitialState,
  reducers: {
    loadAllBusiness: (
      currentBusinessState,
      action: PayloadAction<Business[]>
    ) => ({
      ...currentBusinessState,
      businessList: [...action.payload],
    }),
    deleteBusiness: (
      currentBusinessState: BusinessState,
      action: PayloadAction<string>
    ) => ({
      ...currentBusinessState,
      businessList: currentBusinessState.businessList.filter(
        (business) => business.id !== action.payload
      ),
    }),
    createBusiness: (initialState, action: PayloadAction<Business>) => ({
      ...initialState,
      businessList: [...initialState.businessList, action.payload],
    }),
  },
});

export const businessReducer = businessSlice.reducer;

export const {
  loadAllBusiness: loadAllBusinessActionCreator,
  deleteBusiness: deleteBusinessActionCreator,
  createBusiness: createBusinessActionCreator,
} = businessSlice.actions;
