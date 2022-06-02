import { createAction } from "@reduxjs/toolkit";
import { CREATE_TRANSACTION, CREATE_TRANSACTION_SUCCESS } from "./constants";

export const createTransactionAction = createAction(CREATE_TRANSACTION);
export const createTransactionSuccessAction = createAction(
  CREATE_TRANSACTION_SUCCESS
);
