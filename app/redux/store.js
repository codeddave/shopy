
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers, } from "redux"
import thunkMiddleware from redux-thunk


const reducers = combineReducers({
  //reducer goes here
})


const store = configureStore(reducers, applyMiddleware(thunkMiddleware))
