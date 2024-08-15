import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // padrão: localStorage para navegador
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import authReducer from "./authSlice";
import loggerMiddleware from "./loggerMiddleware";

// Função de armazenamento Noop para ambientes sem localStorage (SSR)
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// Verifica se estamos no lado do cliente (navegador)
const isClient = typeof window !== "undefined";

// Usando o armazenamento correto com fallback para SSR
const storageFallback = isClient ? storage : createNoopStorage();

const persistConfig = {
  key: "root",
  storage: storageFallback,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(loggerMiddleware),
});

// Somente cria o persistor no lado do cliente
export const persistor = isClient ? persistStore(store) : null;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
