import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const DEFAULT_STATE = {
  auth: { isAuthenticated: false },
  error: { message: null },
  polls: [],
  currentPoll: {
    _id: "5b086e20f7d2381502ce0e46",
    options: [],
    question: "test_poll",
  },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: DEFAULT_STATE,
  devTools: process.env.NODE_ENV !== "production",
});
