import { RegistrationDto } from "../../types/forms/auth";
import { ServerAuth } from "../../types/server/auth";
import { apiAdapter } from "../instance";

export const registrationApi = async (registrationDto: RegistrationDto) => {
  try {
    const { data } = await apiAdapter.post<ServerAuth>(
      "/auth/registration",
      registrationDto
    );
    return data;
  } catch (error) {
    throw error;
  }
};
