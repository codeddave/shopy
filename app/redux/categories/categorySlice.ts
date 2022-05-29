import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryApi } from "../../api/categories";
import { SliceStatus } from "../../interfaces";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (setAllData: any) => {
    const response = await categoryApi.getCategories();
    setAllData(response.data);
    return response.data;
  }
);
type CategoryState = {
  categories: any[];
  isLoading: SliceStatus;
  error?: string;
};

const initialState: CategoryState = {
  categories: [],
  isLoading: SliceStatus.idle,
  error: "",
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = SliceStatus.pending;
    });
  },
});
