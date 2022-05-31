import { LoginDto } from "../../types/forms/auth";
import { ServerAuth } from "../../types/server/auth";
import { apiAdapter } from "../instance";

export const loginApi = async (loginDto: LoginDto) => {
  try {
    const { data } = await apiAdapter.post<ServerAuth>("/auth/login", loginDto);
    return data;
  } catch (error) {
    throw error;
  }
};
