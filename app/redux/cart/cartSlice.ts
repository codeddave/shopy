import { createSlice, Action } from "@reduxjs/toolkit";

type CartState = {
  cart: any[];
};
const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
  /*   extraReducers: (builder) => {    

  }, */
});
