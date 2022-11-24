import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { userSliceReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSliceReducer,
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
