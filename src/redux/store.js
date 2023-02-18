import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productSlice from "./slice/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
