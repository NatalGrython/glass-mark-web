import { RootState } from "..";

export const miningSelector = (state: RootState) => state.transaction.mining;
