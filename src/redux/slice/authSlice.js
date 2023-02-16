import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ACTIVE_USER: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("shoppersUser", JSON.stringify(state.user));
    },
    USER_LOGOUT: (state, action) => {
      state.user = null;
      localStorage.setItem("shoppersUser", null);
    },
  },
});

export const { ACTIVE_USER, USER_LOGOUT } = authSlice.actions;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
