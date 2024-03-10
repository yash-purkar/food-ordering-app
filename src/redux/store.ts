import { configureStore } from "@reduxjs/toolkit";
import menusReducer from "./slices/menuSlice";
export const store = configureStore({
  reducer: {
    menus: menusReducer,
  },
});

// Type for useSelector
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
