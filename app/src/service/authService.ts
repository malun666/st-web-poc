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
  const response = await axios.post<LoginResponse>(
    `${API_URL}/login`,
    {
      username: credentials.username,
      password: credentials.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
