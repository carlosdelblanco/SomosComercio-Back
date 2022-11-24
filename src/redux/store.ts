import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
