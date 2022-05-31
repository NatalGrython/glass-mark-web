import { Node } from "../../types/shared/nodes";
import { apiAdapter } from "../instance";

export const getAllNodesApi = async () => {
  try {
    const { data } = await apiAdapter.get<Node[]>("/node");
    return data;
  } catch (error) {
    throw error;
  }
};
