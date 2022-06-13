import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartSlice";
import { categoryReducer } from "./categories/categorySlice";
import { productReducer } from "./products/productSlice";
import { userReducer } from "./user";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["cart", "user"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  category: categoryReducer,
});
export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
