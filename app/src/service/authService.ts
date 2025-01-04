import axiosInstance from "../core/baseAxios";

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await axiosInstance.post<LoginResponse>(`/api/auth/login`, {
    username: credentials.username,
    password: credentials.password,
  });
  return response.data;
}

export async function register(data: RegisterRequest): Promise<void> {
  await axiosInstance.post(`/api/auth/register`, data);
}

export async function logout(): Promise<void> {
  await axiosInstance.post(`/api/auth/logout`);
}
