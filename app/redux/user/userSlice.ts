import { createSlice } from "@reduxjs/toolkit";
import { CurrentUser, SliceStatus } from "../../interfaces";

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
});
