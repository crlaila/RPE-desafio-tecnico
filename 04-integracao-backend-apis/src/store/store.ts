import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa localStorage para o storage
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

const makeStore = () => {
  // Verifica se estamos no servidor ou cliente
  const isServer = typeof window === "undefined";

  if (isServer) {
    // No servidor, configuramos a store sem persistReducer
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });
  } else {
    // No cliente, configuramos a store com persistReducer
    const persistConfig = {
      key: "root",
      storage,
      whitelist: ["auth"], // Somente persiste o authReducer
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });

    persistStore(store); // Ativa o persistStore no cliente

    return store;
  }
};

export const wrapper = createWrapper(makeStore, { debug: true });
