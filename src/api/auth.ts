import { axiosInstance } from "../config/axiosInstance";

export const registerUser = (data: unknown) =>
  axiosInstance.post("/users/register", data);

export const loginUser = (data: unknown) =>
  axiosInstance.post("/users/login", data);

export const registerAdmin = (data: unknown) =>
  axiosInstance.post("/admin/register", data);

export const loginAdmin = (data: unknown) =>
  axiosInstance.post("/admin/login", data);
