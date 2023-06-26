import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../http";

export const getProductList = createAsyncThunk(
  "fetch/products",
  async (_, { rejectWithValue }) => {
    try {
      const [response] = await http({
        method: "GET",
        path: {
          url: "PRODUCT_LIST",
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
