"use client"
import { createSlice } from "@reduxjs/toolkit";
// const customerData = null;

const getUserData = () => {
  if (typeof window !== "undefined") {
    const storedJobID = localStorage.getItem("jobID");
    if (storedJobID && storedJobID !== "undefined") {
      try {
        return JSON.parse(storedJobID);
      } catch (error) {
        console.error("Failed to parse user data:", error);
        localStorage.removeItem("jobID"); // Clear invalid data
      }
    }
  }
  return null;
};

const initialState = {
  jobID: getUserData(),
};
export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    ClearJobID: (state, _action) => {
      state.jobID = null;
      localStorage.removeItem("jobID");
    },
    setJobID: (state, action) => {
      state.jobID = action.payload;
      // console.log(action.payload)
      localStorage.setItem("jobID", JSON.stringify(action.payload));
    },
  },
});

export const { ClearJobID, setJobID } = jobSlice.actions;

export default jobSlice.reducer;
