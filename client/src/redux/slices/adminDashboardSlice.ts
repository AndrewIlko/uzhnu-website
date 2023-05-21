import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  isAddPost: boolean;
  postToDelete: null | string;
  alert: { status: boolean; type: string; text: string };
}

const initialState: initialStateType = {
  isAddPost: false,
  postToDelete: null,
  alert: { status: false, type: "", text: "" },
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
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
});

export const adminDashboardAction = adminDashboardSlice.actions;
export const adminDashboardReducer = adminDashboardSlice.reducer;
