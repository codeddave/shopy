import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth";
import { CurrentUser, SliceStatus } from "../../interfaces";
import decode from "jwt-decode";
import { navigate } from "../../navigation";
import { SCREENS } from "../../constants";

export const register = createAsyncThunk(
  "user/register",
  async (
    registerData: {
      email: string;
      password: string;
      fullName: string;
    },
    { dispatch }
  ) => {
    const response = await authApi.register(registerData);
    dispatch(setToken(response.data as string));
    const user = decode(response.data as string);
    navigate(SCREENS.HOME);
    return user as CurrentUser;
  }
);
export const logIn = createAsyncThunk(
  "user/logIn",
  async (loginData: { email: string; password: string }, { dispatch }) => {
    const response = await authApi.logIn(loginData);
    dispatch(setToken(response.data as string));
    const user = decode(response.data as string);
    navigate(SCREENS.HOME);
    return user as CurrentUser;
  }
);
export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (id: string) => {
    const response = await authApi.getUser(id);
    return response.data as CurrentUser;
  }
);

type UserState = {
  user: CurrentUser | null;
  isLoading: SliceStatus;
  error?: string;
  userProfile: CurrentUser | null;
  token: string | null;
};

const initialState: UserState = {
  user: null,
  isLoading: SliceStatus.idle,
  error: "",
  userProfile: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.userProfile = null;
    },
  },

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
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = SliceStatus.pending;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = SliceStatus.resolved;
        state.user = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = SliceStatus.rejected;
        state.error = action.error.message;
      })
      .addCase(getUserById.pending, (state) => {
        state.isLoading = SliceStatus.pending;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = SliceStatus.resolved;
        state.userProfile = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = SliceStatus.rejected;
        state.error = action.error.message;
      });
  },
});

export const {
  reducer: userReducer,
  name: userReducerName,
  actions: { setToken, logOut },
} = userSlice;
export type UserStateType = ReturnType<typeof userReducer>;
