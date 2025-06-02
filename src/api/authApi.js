import api from ".";
export const loginApit = (data) => api.post("/login", data);
export const registerApi = (data) => api.post("/register", data);
export const getProfile = (userId) => api.get(`/users/${userId}`);