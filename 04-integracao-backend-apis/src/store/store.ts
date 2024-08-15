import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";

const makeStore = () => {
  const isServer = typeof window === "undefined";

  const persistConfig = {
    key: "root",
    storage: !isServer ? storage : undefined, // Apenas ativa o storage no lado do cliente
  };

  const rootReducer = {
    auth: persistReducer(persistConfig, authReducer),
  };

  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export const wrapper = createWrapper(makeStore);
