import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isAuthenticated: false,
};

const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate(state, action) {
      state.userData = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isAuthenticated = true;
    },
    removeAuthenticate(state) {
      (state.userData = null), (state.isAuthenticated = false);
    },
    setToken(state, action) {
      state.isAuthenticated = true;
    },
  },
});

export default Auth.reducer;

export const { authenticate, removeAuthenticate, setToken } = Auth.actions;
