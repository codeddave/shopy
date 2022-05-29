import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

const getProduct = (state: RootState) => state.category;

export const selectCategories = createSelector(
  getProduct,
  (category) => category.categories
);
export const selectCategoriesLoading = createSelector(
  getProduct,
  (category) => category.isLoading
);
