import { RootState } from "..";

export const roleSelector = (state: RootState) => state.auth.role;
