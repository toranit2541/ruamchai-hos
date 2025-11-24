import api from "./api";
import type { LoginResponse } from "../types/user";

export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
  const res = await api.post<LoginResponse>("api/login/", { username, password });
  return res.data;
};

export const registerUser = async (
  username: string,
  password: string,
  email: string
): Promise<void> => {
  await api.post("api/register/", { username, password, email });
};

export const logoutUser = async (): Promise<void> => {
  await api.post("api/logout/");
};