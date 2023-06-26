import { createSlice } from "@reduxjs/toolkit";
import { getProductList } from "./product.actions";

const INITIAL_STATE = {
  loading: false,
  error: false,
  errorMessage: "",
  items: [],
  itemsCopy: [],
};

const productListSlice = createSlice({
  name: "productList",
  initialState: INITIAL_STATE,
  reducers: {
    updateProductList(state, { payload }) {
      state.items = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = "";
    });
    builder.addCase(getProductList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.items = payload;
      state.itemsCopy = payload;
    });
    builder.addCase(getProductList.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload;
    });
  },
});

export const { updateProductList } = productListSlice.actions;

export default productListSlice.reducer;
