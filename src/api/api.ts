// src/api/api.ts
import axios from "axios";

const API_BASE = "http://192.168.142.137/api";

// Helpers to read token and decode JWT payload (if token is JWT)
const getToken = (): string | null => {
  try {
    return localStorage.getItem("token");
  } catch {
    return null;
  }
};

const parseJwt = (token: string) => {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const payload = parts[1];
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decodeURIComponent(escape(json)));
  } catch {
    return null;
  }
};

const isAdminOrStaff = (): boolean => {
  const token = getToken();
  if (!token) return false;
  const payload = parseJwt(token);
  if (!payload) return false;
  // common claim names: role, roles, is_staff, is_admin, staff
  const role = payload.role ?? payload.roles ?? null;
  if (typeof role === 'string') {
    return role === 'admin' || role === 'staff';
  }
  if (Array.isArray(role)) {
    return role.includes('admin') || role.includes('staff');
  }
  if (payload.is_staff || payload.is_admin || payload.staff) return true;
  return false;
};

const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Token ${token}` } : {};
};

// Login
export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_BASE}/login/`, { username, password });
  return response.data;
};

// Register
export const register = async (username: string, password: string, email?: string) => {
  const response = await axios.post(`${API_BASE}/register/`, { username, password, email });
  return response.data;
};

// Get all doctors
export const getDoctors = async () => {
  const response = await axios.get(`${API_BASE}/doctors/`);
  return response.data;
};

// Create doctor
export const createDoctor = async (data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.post(`${API_BASE}/doctors/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update doctor
export const updateDoctor = async (id: number, data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.put(`${API_BASE}/doctors/${id}/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete doctor
export const deleteDoctor = async (id: number) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.delete(`${API_BASE}/doctors/${id}/`, {
    headers: { ...authHeaders() },
  });
  return response.data;
};

// Get all Packages
export const getPackages = async () => {
  const response = await axios.get(`${API_BASE}/packages/`);
  return response.data;
};

// Create Package
export const createPackage = async (data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.post(`${API_BASE}/packages/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update Package
export const updatePackage = async (id: number, data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.put(`${API_BASE}/packages/${id}/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete Package
export const deletePackage = async (id: number) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.delete(`${API_BASE}/packages/${id}/`, {
    headers: { ...authHeaders() },
  });
  return response.data;
};

// Get all Blogs
export const getBlogs = async () => {
  const response = await axios.get(`${API_BASE}/blogs/`);
  return response.data;
};

// Create Blogs
export const createBlog = async (data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.post(`${API_BASE}/blogs/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update Blogs
export const updateBlog = async (id: number, data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.put(`${API_BASE}/blogs/${id}/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete Blogs
export const deleteBlog = async (id: number) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.delete(`${API_BASE}/blogs/${id}/`, {
    headers: { ...authHeaders() },
  });
  return response.data;
};

// Get all Clinics
export const getClinics = async () => {
  const response = await axios.get(`${API_BASE}/clinics/`);
  return response.data;
};

// Create Clinic
export const createClinic = async (data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.post(`${API_BASE}/clinics/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update Clinic
export const updateClinic = async (id: number, data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.put(`${API_BASE}/clinics/${id}/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete Clinic
export const deleteClinic = async (id: number) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.delete(`${API_BASE}/clinics/${id}/`, {
    headers: { ...authHeaders() },
  });
  return response.data;
};

// Get all Services
export const getServices = async () => {
  const response = await axios.get(`${API_BASE}/services/`);
  return response.data;
};

// Create Service
export const createService = async (data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.post(`${API_BASE}/services/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update Service
export const updateService = async (id: number, data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.put(`${API_BASE}/services/${id}/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete Service
export const deleteService = async (id: number) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.delete(`${API_BASE}/services/${id}/`, {
    headers: { ...authHeaders() },
  });
  return response.data;
};

// Get all BannerImages
export const getBannerImages = async () => {
  const response = await axios.get(`${API_BASE}/banner-images/`);
  return response.data;
};

// Create BannerImage
export const createBannerImage = async (data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.post(`${API_BASE}/banner-images/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update BannerImage
export const updateBannerImage = async (id: number, data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.put(`${API_BASE}/banner-images/${id}/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete BannerImage
export const deleteBannerImage = async (id: number) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.delete(`${API_BASE}/banner-images/${id}/`, {
    headers: { ...authHeaders() },
  });
  return response.data;
};

// Get all Rooms
export const getRooms = async () => {
  const response = await axios.get(`${API_BASE}/rooms/`);
  return response.data;
};

// Create Rooms
export const createRoom = async (data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.post(`${API_BASE}/rooms/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
}

// Update Rooms
export const updateRoom = async (id: number, data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.put(`${API_BASE}/rooms/${id}/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete Rooms
export const deleteRoom = async (id: number) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.delete(`${API_BASE}/rooms/${id}/`, {
    headers: { ...authHeaders() },
  });
  return response.data;
};

// Get all News
export const getNews = async () => {
  const response = await axios.get(`${API_BASE}/news/`);
  return response.data;
};

// Create News
export const createNews = async (data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.post(`${API_BASE}/news/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update News
export const updateNews = async (id: number, data: FormData) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.put(`${API_BASE}/news/${id}/`, data, {
    headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete News
export const deleteNews = async (id: number) => {
  if (!isAdminOrStaff()) throw new Error("Unauthorized: admin or staff only");
  const response = await axios.delete(`${API_BASE}/news/${id}/`, {
    headers: { ...authHeaders() },
  });
  return response.data;
};

