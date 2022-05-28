import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import { productReducer } from "./products/productSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
