import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

const getProduct = (state: RootState) => state.product;

export const selectProducts = createSelector(
  getProduct,
  (product) => product.products
);
export const selectProductsLoading = createSelector(
  getProduct,
  (product) => product.isLoading
);
export const selectSearchedProducts = createSelector(
  getProduct,
  (product) => product.searchedProducts
);
export const selectSearchedProductsLoading = createSelector(
  getProduct,
  (product) => product.isLoadingSearchedProducts
);
