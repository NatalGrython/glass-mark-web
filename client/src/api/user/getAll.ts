import { User } from "../../types/shared/user";
import { apiAdapter } from "../instance";

export const getAllUserApi = async () => {
  try {
    const { data } = await apiAdapter.get<User>(`/user`);
    return data;
  } catch (error) {
    throw error;
  }
};
