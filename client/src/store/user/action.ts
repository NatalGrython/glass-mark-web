import { createAction } from "@reduxjs/toolkit";
import { User } from "../../types/shared/user";
import {
  DELETE_USER,
  DELETE_USERS,
  GET_ALL_USER,
  GET_ALL_USER_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
} from "./constants";

export const getUserAction = createAction<number>(GET_USER);
export const getUserSuccessAction = createAction<User>(GET_USER_SUCCESS);

export const getAllUsersAction = createAction(GET_ALL_USER);
export const getAllUsersSuccessAction =
  createAction<User[]>(GET_ALL_USER_SUCCESS);

export const deleteUserAction = createAction(DELETE_USER);
export const deleteUsersAction = createAction(DELETE_USERS);
