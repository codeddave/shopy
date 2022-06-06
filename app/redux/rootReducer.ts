import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import { categoryReducer } from "./categories/categorySlice";
import { productReducer } from "./products/productSlice";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  category: categoryReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
