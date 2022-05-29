import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat(thunkMiddleware as ThunkMiddleware),
});
export type AppDispatch = typeof store.dispatch;
export default store;
