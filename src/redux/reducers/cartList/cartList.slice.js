import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const cartListSlice = createSlice({
  name: "cartList",
  initialState: INITIAL_STATE,
  reducers: {
    updateCartList(state, { payload }) {
      state.items = payload;
    },
  },
});

export const { updateCartList } = cartListSlice.actions;
export default cartListSlice.reducer;
