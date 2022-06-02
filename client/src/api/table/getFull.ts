import { apiAdapter } from "../instance";

export const getFullTableApi = async (nodeId: number) => {
  try {
    const { data } = await apiAdapter.post("/table", { nodeId });
    return data;
  } catch (error) {
    throw error;
  }
};
