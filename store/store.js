import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/authSlice";
import notificationReducer from "../features/notificationSlice";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Notification: notificationReducer,
  },
});
