import { apiAdapter } from "../instance";

export const createTransactionApi = async (createTransactionDto: any) => {
  try {
    const { data } = await apiAdapter.post(
      "/transaction",
      createTransactionDto
    );
    return data;
  } catch (error) {
    throw error;
  }
};
