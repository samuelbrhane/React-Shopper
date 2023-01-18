import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  userEmail: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ACTIVE_USER: (state, action) => {
      const { userEmail, userId } = action.payload;
      state.isLoggedin = true;
      state.userEmail = userEmail;
      state.userId = userId;
    },
    USER_LOGOUT: (state, action) => {
      state.isLoggedin = false;
      state.userEmail = null;
      state.userId = null;
    },
  },
});

export const { ACTIVE_USER, USER_LOGOUT } = authSlice.actions;
export const selectIsLoggedin = (state) => state.auth.isLoggedin;
export const selectUserEmail = (state) => state.auth.userEmail;
export const selectUserId = (state) => state.auth.userId;
export default authSlice.reducer;
