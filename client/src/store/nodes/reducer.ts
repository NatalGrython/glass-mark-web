import { createReducer } from "@reduxjs/toolkit";
import { Node } from "../../types/shared/nodes";
import { getNodesSuccessAction } from "./actions";

interface NodesState {
  nodes: Node[];
}

const initialState: NodesState = {
  nodes: [],
};

export const nodesReducer = createReducer(initialState, (builder) =>
  builder.addCase(getNodesSuccessAction, (state, action) => {
    state.nodes = action.payload;
  })
);
