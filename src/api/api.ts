// src/api/api.ts
import axios from "axios";

const API_BASE = "https://ruamchai.com/datacenter/api";

// Helpers to read token and decode JWT payload (if token is JWT)

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
  const response = await axios.get(`${API_BASE}/doctors`);
  return response.data;
};

// Get doctor by ID
export const getDoctorById = async (id: string) => {
  const response = await axios.get(`${API_BASE}/doctors/${id}`);
  return response.data;
};

// Get all Packages
export const getPackages = async () => {
  const response = await axios.get(`${API_BASE}/packages`);
  return response.data;
};

// Get Package by ID
export const getPackageById = async (id: string) => {
  const response = await fetch(`${API_BASE}/packages/${id}`);
  return response.json();
};
// Get all ArticleDoctors
export const getArticleDoctors = async () => {
  const response = await axios.get(`${API_BASE}/articledoctors`);
  return response.data;
};
// Get ArticleDoctor by ID
export const getArticleDoctorById = async (id: string) => {
  const response = await fetch(`${API_BASE}/articledoctors/${id}`);
  return response.json();
};
// Get all Clinics
export const getClinics = async () => {
  const response = await axios.get(`${API_BASE}/clinics`);
  return response.data;
};

//Get Clinic by ID
export const getClinicById = async (id: string) => {
  const response = await fetch(`${API_BASE}/clinics/${id}`);
  return response.json();
};

// Get Clinic Images by Clinic ID
export const getClinicImagesByClinicId = async (clinicId: string) => {
  const response = await fetch(`${API_BASE}/clinic-images?clinic_id=${clinicId}`);
  return response.json();
};

// Get all Services
export const getServices = async () => {
  const response = await axios.get(`${API_BASE}/services`);
  return response.data;
};
// Get all BannerImages
export const getBannerImages = async () => {
  const response = await axios.get(`${API_BASE}/baners`);
  return response.data;
};
// Get all Rooms
export const getRooms = async () => {
  const response = await axios.get(`${API_BASE}/rooms`);
  return response.data;
};
// Get Room by ID
export const getRoomById = async (id: string) => {
  const response = await fetch(`${API_BASE}/rooms/${id}`);
  return response.json();
};
// Get all News
export const getNews = async () => {
  const response = await axios.get(`${API_BASE}/news-events`);
  return response.data;
};
//Get Doctor Schedule by ID
export const getDoctorSchedulesByDoctorId = async (doctorId: string) => {
  const response = await fetch(`${API_BASE}/doctor-schedules?doctor_id=${doctorId}`);
  return response.json();
};