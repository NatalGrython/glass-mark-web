import { createReducer } from "@reduxjs/toolkit";
import { deleteTableAction, getTableSuccessAction } from "./actions";

interface TableState {
  table: any[];
}

const initialState: TableState = {
  table: [],
};

export const tableReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getTableSuccessAction, (state, action) => {
      //@ts-ignore
      state.table = action.payload;
    })
    .addCase(deleteTableAction, (state) => {
      state.table = [];
    })
);
