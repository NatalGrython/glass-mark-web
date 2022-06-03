import { createAction } from "@reduxjs/toolkit";
import { Node } from "../../types/shared/nodes";
import { DELETE_NODES, GET_NODES, GET_NODES_SUCCESS } from "./constants";

export const getNodesAction = createAction(GET_NODES);
export const getNodesSuccessAction = createAction<Node[]>(GET_NODES_SUCCESS);

export const deleteNodes = createAction(DELETE_NODES);
