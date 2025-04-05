// src/services/apiService.jsx
const API_BASE_URL = "http://localhost:5000/api/";

export const API_ROUTES = {
  REGISTER: `${API_BASE_URL}auth/register`,
  LOGIN: `${API_BASE_URL}auth/login`,
};
