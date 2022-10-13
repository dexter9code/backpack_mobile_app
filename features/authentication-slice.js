import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isVerified: false,
};

const authenticatonProvider = createSlice({
  name: `authentication`,
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      (state.user = {
        name: action.payload.name,
        email: action.payload.email,
      }),
        (state.isVerified = true);
    },
    removeUser(state) {
      (state.user = null), (state.isVerified = false);
    },
    alreadyUser(state) {
      state.isVerified = true;
    },
  },
});

export const { addUser, alreadyUser, removeUser } =
  authenticatonProvider.actions;

export default authenticatonProvider.reducer;
