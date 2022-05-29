import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import { categoryReducer } from "./categories/categorySlice";
import { productReducer } from "./products/productSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  category: categoryReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
