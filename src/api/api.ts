// src/api/api.ts
import axios from "axios";

const API_BASE = "http://your-domain/api";

// Example: Get all doctors
export const getDoctors = async () => {
  const response = await axios.get(`${API_BASE}/doctors/`);
  return response.data;
};

// Example: Create doctor
export const createDoctor = async (data: FormData) => {
  const response = await axios.post(`${API_BASE}/doctors/`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Example: Update doctor
export const updateDoctor = async (id: number, data: FormData) => {
  const response = await axios.put(`${API_BASE}/doctors/${id}/`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Example: Delete doctor
export const deleteDoctor = async (id: number) => {
  const response = await axios.delete(`${API_BASE}/doctors/${id}/`);
  return response.data;
};
