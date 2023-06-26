import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  activeFilter: "",
  filters: [],
};

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedFilter(state, { payload }) {
      state.activeFilter = payload;
    },
    setFiltersList(state, { payload }) {
      state.filters = payload;
    },
  },
});

export const { setFiltersList, setSelectedFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
