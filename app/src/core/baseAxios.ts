import axios from "axios";

const token = sessionStorage.getItem("token");
const headers: Record<string, string> = {
  "Content-Type": "application/json",
};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers,
});

// Add a request interceptor to dynamically update the token
axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token
      sessionStorage.removeItem("token");
      // Redirect to login page
      window.location.href = "/#/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
