import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobs/slice";

export const store = configureStore({
  reducer: { jobs: jobsReducer },
});
