import axios from "axios";
import { BASE_URL } from "../utils/constanst";

// Create default config for http request
const http = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Config client send request with access token
http.interceptors.request.use((config) => ({
  ...config,
  headers: { ...config.headers },
}));

// Config response
http.interceptors.response.use(
  (response) => response.data || response,
  (err) => Promise.reject(err)
);

export { http };
