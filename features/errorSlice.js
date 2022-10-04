import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError(state, action) {
      state.notification = {
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    removeError(state) {
      state.notification = null;
    },
  },
});

export const { addError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
