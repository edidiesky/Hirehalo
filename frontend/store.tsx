import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./services/authSlice";
import modalReducer from "./services/modalSlice";
import jobReducer from "./services/jobSlice";
import { apiSlice } from "./services/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    modal: modalReducer,
    job: jobReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
