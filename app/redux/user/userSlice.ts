import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth";
import { CurrentUser, SliceStatus } from "../../interfaces";

export const register = createAsyncThunk(
  "user/register",
  async (registerData: {
    email: string;
    password: string;
    fullName: string;
  }) => {
    const response = await authApi.register(registerData);
    return response.data;
  }
);

type UserState = {
  user: CurrentUser | null;
  isLoading: SliceStatus;
};

const initialState: UserState = {
  user: null,
  isLoading: SliceStatus.idle,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase();
  },
});
