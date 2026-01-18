export interface LoginRequest {
  username: string;
  clave: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}
