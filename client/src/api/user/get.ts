import { User } from "../../types/shared/user";
import { apiAdapter } from "../instance";

export const getUserApi = async (id: number) => {
  try {
    const { data } = await apiAdapter.get<User>(`/user/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
