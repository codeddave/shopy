import { createSlice } from "@reduxjs/toolkit";

type ProductState = {
  products: any[];
};
const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  /*   extraReducers: (builder) => {    
 
  }, */
});

export const { reducer: productReducer, name: productReducerName } =
  productSlice;
export const { addProduct } = productSlice.actions;

export type ProductStateType = ReturnType<typeof productReducer>;
