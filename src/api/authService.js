import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Register user
export const registerUser = (data) =>
  axios.post(`${API_BASE_URL}/register`, data).then(res => res.data);

// Login user
export const loginUser = (data) =>
  axios.post(`${API_BASE_URL}/login`, data).then(res => res.data);

// Refresh token
export const refreshToken = (token) =>
  axios.post(`${API_BASE_URL}/refresh`, null, { params: { refreshToken: token } })
       .then(res => res.data);

// Logout user
export const logoutUser = (userId) =>
  axios.post(`${API_BASE_URL}/logout/${userId}`);
