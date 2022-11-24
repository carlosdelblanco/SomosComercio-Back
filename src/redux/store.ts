import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { uiSliceReducer } from "./features/userSlice/uiSlice";

export const store = configureStore({
  reducer: {
    userReducer: uiSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
