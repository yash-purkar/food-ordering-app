import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fakeFetch } from "../../services/menuServices";
import { type MenuItem } from "../../types";

type InitialState = {
  menus: any;
  status: string;
  error: any;
  cart: MenuItem[];
};

const initialState: InitialState = {
  menus: [],
  cart: [],
  status: "init",
  error: null,
};

// Creating async thunk to call an api
export const fetchDataFromFakeFetch = createAsyncThunk(
  "menu/fetchDataFromFakeFetch",
  async () => {
    console.log("first")
    const result = await fakeFetch("https://example.com/api/menu");
    return result;
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state,action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    }
  },
  //   It handles the states of the async operation
  extraReducers: (builder) => {
    builder.addCase(fetchDataFromFakeFetch.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchDataFromFakeFetch.fulfilled, (state, action) => {
      state.status = "success";
      //   setting data in state
      const actionPayload = action.payload as { data: MenuItem[] };
      state.menus = actionPayload;
    });
    builder.addCase(fetchDataFromFakeFetch.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { addToCart,removeFromCart } = menuSlice.actions;
export default menuSlice.reducer;
