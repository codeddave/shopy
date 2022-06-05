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
    return response.data as CurrentUser;
  }
);

type UserState = {
  user: CurrentUser | null;
  isLoading: SliceStatus;
  error?: string;
};

const initialState: UserState = {
  user: null,
  isLoading: SliceStatus.idle,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = SliceStatus.pending;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = SliceStatus.resolved;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = SliceStatus.rejected;
        state.error = action.error.message;
      });
  },
});

export const { reducer: userReducer, name: userReducerName } = userSlice;
export type UserStateType = ReturnType<typeof userReducer>;
