import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  searchQuery: string;
  veg: boolean;
  spicy: boolean;
  sort: string | null;
}

interface Payload {
  filterName: "searchQuery" | "veg" | "spicy" | "sort";
  value: string | null;
}

const initialState: InitialState = {
  searchQuery: "",
  veg: false,
  spicy: false,
  sort: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<Payload>) => {
      const { filterName, value } = action.payload;
      if (filterName === "searchQuery" || filterName === "sort") {
        state[filterName] = value as string;
      } else {
        state[filterName] = !state[filterName] as boolean;
      }
    },
    clearFilters: (state) => {
      state.searchQuery = "";
      state.sort = null;
      state.veg = false;
      state.spicy = false;
    },
  },
});

export const { addFilter,clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
