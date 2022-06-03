import { apiAdapter } from "../instance";

export const createTransactionApi = async (createTransactionDto: any) => {
  try {
    const { data } = await apiAdapter.post(
      "/transaction",
      createTransactionDto,
      { timeout: 1000000 }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
