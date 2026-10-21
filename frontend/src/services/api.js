import axios from "axios";

// Backend ka address (Spring Boot)
const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Har request bhejne se pehle token laga do (agar login hai)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export default api;