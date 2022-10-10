import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  token: "",
  isAuthenticated: false,
};

const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
      AsyncStorage.setItem("token", action.payload);
    },
    removeAuthenticate(state) {
      (state.token = ""), (state.isAuthenticated = false);
      AsyncStorage.removeItem("token");
    },
  },
});

export default Auth.reducer;

export const { authenticate, removeAuthenticate } = Auth.actions;
