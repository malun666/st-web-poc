import axios from "axios";

const API_URL = "https://demoapi.malunsg.workers.dev";

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

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await axios.post<LoginResponse>(`${API_URL}/login`, credentials);
  return response.data;
}
