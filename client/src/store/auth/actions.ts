import { createAction } from "@reduxjs/toolkit";
import {
  AuthorizationSuccessResponse,
  LoginDto,
  RegistrationDto,
} from "../../types/forms/auth";
import {
  LOGIN,
  REGISTRATION,
  AUTHORIZATION_SUCCESS,
  CHECK_AUTHORIZATION,
  LOGOUT,
} from "./constants";

export const loginAction = createAction<LoginDto>(LOGIN);
export const registrationAction = createAction<RegistrationDto>(REGISTRATION);
export const checkAuthorizationAction = createAction(CHECK_AUTHORIZATION);
export const authorizationSuccessAction =
  createAction<AuthorizationSuccessResponse>(AUTHORIZATION_SUCCESS);
export const logout = createAction(LOGOUT);
