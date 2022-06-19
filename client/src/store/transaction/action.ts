import { createAction } from "@reduxjs/toolkit";
import {
  CREATE_TRANSACTION,
  CREATE_TRANSACTION_SUCCESS,
  MINING_START,
  MINING_STOP,
} from "./constants";

export const createTransactionAction = createAction(CREATE_TRANSACTION);
export const createTransactionSuccessAction = createAction(
  CREATE_TRANSACTION_SUCCESS
);

export const miningStartAction = createAction(MINING_START);
export const miningStopAction = createAction(MINING_STOP);
