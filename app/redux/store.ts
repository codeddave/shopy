import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
const reducer = {};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(thunkMiddleware),
});

export default store;
