import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice"; 

const store = configureStore({
  reducer: {
    profile: profileReducer, 
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
