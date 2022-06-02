import { RootState } from "..";

export const userSelector = (state: RootState) => state.user.user;

export const studentsSelector = (state: RootState) => {
  const students = state.user.users.filter((item) => item.role === "student");
  return { students };
};
