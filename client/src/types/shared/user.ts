import { Node } from "./nodes";

export interface User {
  id: number;
  address: string;
  login: string;
  role: "student" | "teacher";
  node: Node;
  name: string;
  surname: string;
  patronymic: string;
}
