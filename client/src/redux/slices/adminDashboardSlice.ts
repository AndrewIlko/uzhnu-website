import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  isAddPost: boolean;
}

const initialState: initialStateType = {
  isAddPost: false,
};

const adminDashboardSlice = createSlice({
  name: "admin-dashboard",
  initialState,
  reducers: {
    setIsAddPost: (state, action) => {
      state.isAddPost = action.payload;
    },
  },
});

export const adminDashboardAction = adminDashboardSlice.actions;
export const adminDashboardReducer = adminDashboardSlice.reducer;
