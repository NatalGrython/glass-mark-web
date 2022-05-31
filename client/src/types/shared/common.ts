export interface Token {
  id: number;
  role: "student" | "teacher";
  address: string;
  login: string;
}
