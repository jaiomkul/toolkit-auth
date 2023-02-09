import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./signup";
import loginSlice from "./login";

export const store = configureStore({
  reducer: {
    sighup: signupSlice,
    login: loginSlice,
  },
});
