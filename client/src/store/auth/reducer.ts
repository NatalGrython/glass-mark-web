import { createReducer } from "@reduxjs/toolkit";
import { authorizationSuccessAction } from "./actions";

interface AuthState {
  token?: string;
  role?: "student" | "teacher";
}

const initialState: AuthState = {};

export const authReducer = createReducer(initialState, (builder) =>
  builder.addCase(authorizationSuccessAction, (state, action) => {
    state.token = action.payload.token;
    state.role = action.payload.role;
  })
);
