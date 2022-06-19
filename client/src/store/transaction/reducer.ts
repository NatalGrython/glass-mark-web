import { createReducer } from "@reduxjs/toolkit";
import { miningStartAction, miningStopAction } from "./action";

const initialState = {
  mining: false,
};

export const transactionReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(miningStartAction, (state) => {
      state.mining = true;
    })
    .addCase(miningStopAction, (state) => {
      state.mining = false;
    })
);
