import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../api";

import { SliceStatus } from "../../interfaces";

const getProducts = createAsyncThunk<any>("products/getProducts", async () => {
  const response = await productApi.getProducts();
  return response;
});
type ProductState = {
  products: any[];
  isLoading: SliceStatus;
  error?: string;
};
const initialState: ProductState = {
  products: [],
  isLoading: SliceStatus.idle,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = SliceStatus.pending;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = SliceStatus.resolved;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = SliceStatus.rejected;
        state.error = action.error.message;
      });
  },
});

export const { reducer: productReducer, name: productReducerName } =
  productSlice;
export const { addProduct } = productSlice.actions;

export type ProductStateType = ReturnType<typeof productReducer>;
