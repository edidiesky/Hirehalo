import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  jobDetailSidebar: false,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    onLoginModal: (state, _action) => {
      state.loginmodal = true;
    },
    offLoginModal: (state, _action) => {
      state.loginmodal = false;
    },

    onRegisterModal: (state, _action) => {
      state.registermodal = true;
    },
    offRegisterModal: (state, _action) => {
      state.registermodal = false;
    },

    onJobDetailSidebar: (state, _action) => {
      state.jobDetailSidebar = true;
    },
    offJobDetailSidebar: (state, _action) => {
      state.jobDetailSidebar = false;
    },
  },
});

export const {
  onLoginModal,
  onJobDetailSidebar,
  offJobDetailSidebar,
  offLoginModal,
  onRegisterModal,
  offRegisterModal,
} = modalSlice.actions;

export default modalSlice.reducer;
