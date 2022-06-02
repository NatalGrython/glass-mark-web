import { createAction } from "@reduxjs/toolkit";
import { GET_TABLE, GET_TABLE_SUCCESS } from "./constants";

export const getTableAction = createAction(GET_TABLE);
export const getTableSuccessAction = createAction(GET_TABLE_SUCCESS);
