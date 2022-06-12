import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

const user = (state: RootState) => state.user;

export const selectUser = createSelector(user, (user) => user.user);
