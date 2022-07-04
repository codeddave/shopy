import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../api";

import { SliceStatus } from "../../interfaces";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (setAllData: any) => {
    const response = await productApi.getProducts();
    setAllData(response.data);
    return response.data;
  }
);
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (searchTerm: string) => {
    const response = await productApi.searchProducts(searchTerm);
    return response.data;
  }
);
type ProductState = {
  products: any[];
  isLoading: SliceStatus;
  error?: string;
  searchedProducts: any[];
  isLoadingSearchedProducts: SliceStatus;
};
const initialState: ProductState = {
  products: [],
  isLoading: SliceStatus.idle,
  error: "",
  searchedProducts: [],
  isLoadingSearchedProducts: SliceStatus.idle,
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
        state.products = action.payload as any[];
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
