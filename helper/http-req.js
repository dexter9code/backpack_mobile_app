import { apiClinet } from "./apiClient";

export async function authenticated(email, password) {
  const res = await apiClinet.post(`/user/login`, { email, password });
  const data = await res.data;
  return data;
}

export async function createUser(name, email, password, confirmPassword) {
  const res = await apiClinet.post(`/user/singup`, {
    name,
    email,
    password,
    confirmPassword,
  });
  const data = await res.data;
  return data;
}
