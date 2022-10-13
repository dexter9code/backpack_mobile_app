import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication-slice";
import notificationReducer from "../features/notificationSlice";

export const store = configureStore({
  reducer: {
    Notification: notificationReducer,
    Authorization: authReducer,
  },
});
