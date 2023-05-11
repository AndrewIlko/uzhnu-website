import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  isAddPost: boolean;
  postToDelete: null | string;
}

const initialState: initialStateType = {
  isAddPost: false,
  postToDelete: null,
};

const adminDashboardSlice = createSlice({
  name: "admin-dashboard",
  initialState,
  reducers: {
    setIsAddPost: (state, action) => {
      state.isAddPost = action.payload;
    },
    setPostToDelete: (state, action) => {
      state.postToDelete = action.payload;
    },
  },
});

export const adminDashboardAction = adminDashboardSlice.actions;
export const adminDashboardReducer = adminDashboardSlice.reducer;
