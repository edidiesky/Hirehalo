import { createSlice } from "@reduxjs/toolkit";
// const customerData = null;

// let userData = localStorage.getItem("customer") || 'false'
const initialState = {
  currentUser:null,
  // currentUser: "" ? JSON.parse("") : null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogOut: (state, _action) => {
      state.currentUser = null;
      localStorage.removeItem("customer");
    },
    setUserCredentials: (state, action) => {
      state.currentUser = action.payload.user;
      localStorage.setItem("customer", JSON.stringify(action.payload.user));
    },
  },
});

export const { LogOut, setUserCredentials } = authSlice.actions;

export default authSlice.reducer;
