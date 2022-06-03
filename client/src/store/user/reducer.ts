import { createReducer } from "@reduxjs/toolkit";
import { User } from "../../types/shared/user";
import {
  deleteUserAction,
  deleteUsersAction,
  getAllUsersAction,
  getAllUsersSuccessAction,
  getUserSuccessAction,
} from "./action";

interface UserState {
  user?: User;
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getUserSuccessAction, (state, action) => {
      state.user = action.payload;
    })
    .addCase(getAllUsersSuccessAction, (state, action) => {
      state.users = action.payload;
    })
    .addCase(deleteUserAction, (state) => {
      state.user = undefined;
    })
    .addCase(deleteUsersAction, (state) => {
      state.users = [];
    })
);
