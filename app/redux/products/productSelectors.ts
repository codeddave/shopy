import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

const getProduct = (state: RootState) => state.product;

export const selectProducts = createSelector(
  getProduct,
  (product) => product.products
);
