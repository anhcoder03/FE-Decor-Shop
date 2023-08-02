import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartSlice from "./cart/cartSlice";
import productApi, { productReducer } from "../services/product.service";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
};

const reducer = combineReducers({
  auth: authSlice,
  cart: cartSlice,
  [productApi.reducerPath]: productReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
});
const persistor = persistStore(store);

export default persistor;
export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
