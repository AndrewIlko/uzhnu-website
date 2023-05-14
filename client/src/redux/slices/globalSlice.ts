import { URL } from "@/data";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
  [key: string]: any;
  "news-categories":
    | {
        data: object[];
        loading: boolean;
        error: string | null;
      }
    | any;
  isSideMenu: boolean;
}

const initialState: initialStateType = {
  "news-categories": {
    data: [],
    loading: false,
    error: null,
  },
  isSideMenu: false,
};

export const fetchNewsCategories = createAsyncThunk(
  "news-categories/fetch",
  async () => {
    const categories = await axios
      .get(URL + "/news-categories")
      .then((res) => res.data);
    return categories;
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setNewsCategories: (state, action) => {
      state["news-categories"] = action.payload;
    },
    setIsSideMenu: (state, action) => {
      state.isSideMenu = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsCategories.pending, (state) => {
        state["news-categories"].loading = true;
        state["news-categories"].error = null;
      })
      .addCase(fetchNewsCategories.fulfilled, (state, action) => {
        state["news-categories"].loading = false;
        state["news-categories"].data = action.payload;
      })
      .addCase(fetchNewsCategories.rejected, (state, action) => {
        state["news-categories"].loading = false;
        state["news-categories"].error = action.error.message || "Помилка";
      });
  },
});

export const globalAction = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
