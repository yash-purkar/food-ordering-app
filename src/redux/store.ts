import { configureStore } from "@reduxjs/toolkit";
import menusReducer from "./slices/menuSlice";
import filtersReducer from './slices/filtersSlice'
export const store = configureStore({
  reducer: {
    menus: menusReducer,
    filters:filtersReducer
  },
});

// Type for useSelector
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
