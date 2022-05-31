export interface LoginDto {
  login: string;
  password: string;
}

export interface RegistrationDto {
  login: string;
  password: string;
}

export interface AuthorizationSuccessResponse {
  token: string;
  role: "student" | "teacher";
}
