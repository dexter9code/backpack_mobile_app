import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const { hideNotification, showNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
