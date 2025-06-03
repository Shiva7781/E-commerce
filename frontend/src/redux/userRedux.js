import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logOut: (state) => {
      state.currentUser = null;
    },
    clearError: (state) => {
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut, clearError } =
  userSlice.actions;
export default userSlice.reducer;
