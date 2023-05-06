import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "./slices/globalSlice";
import { adminDashboardReducer } from "./slices/adminDashboardSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    adminDashboard: adminDashboardReducer,
  },
});

export default store;
