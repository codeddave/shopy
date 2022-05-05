import { createSlice } from "@reduxjs/toolkit";

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
    removeFromCart: (state, action) => {
      const updatedCart = state.cart.filter(
        (cartItem) => cartItem !== action.payload
      );
      state.cart = [...updatedCart];
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  /*   extraReducers: (builder) => {    
 
  }, */
});

export const { reducer: cartReducer, name: cartReducerName } = cartSlice;
export type CartStateType = ReturnType<typeof cartReducer>;
