import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

const getCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(getCart, (cart) => cart.cart);
