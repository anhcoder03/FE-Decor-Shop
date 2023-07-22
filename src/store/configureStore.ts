import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import categorySlice from "./category/categorySlice";
import productSlice from "./product/productSlice";
const reducer = combineReducers({
  category: categorySlice,
  product: productSlice,
});

export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
