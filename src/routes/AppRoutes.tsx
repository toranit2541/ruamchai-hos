import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Package from "../pages/Package";
import Rooms from "../pages/Rooms";
import Clinic from "../pages/Clinic";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import AuthPage from "../pages/AuthPage"; // ⬅ use this
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Blog from "../pages/Blog";
import Doctors from "../pages/Doctors";
import AdminLayout from "../components/Layout/AdminLayout";
import { AdminPage } from "../pages/Admin";
import AdminBanner from "@/pages/Admin/AdminBanner";
import AdminPackage from "@/pages/Admin/AdminPackage";
import AdminDoctors from "@/pages/Admin/AdminDoctors";
import AdminRooms from "@/pages/Admin/AdminRooms";
import AdminBlog from "@/pages/Admin/AdminBlog";
import AdminContact from "@/pages/Admin/AdminContact";
import AdminClinic from "@/pages/Admin/AdminClinic";
import AdminNews from "@/pages/Admin/AdminNews";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/package" element={<Package />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/clinic" element={<Clinic />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />

      {/* Login + Signup in ONE page */}
      <Route path="/login" element={<AuthPage />} />

      {/* Protected Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />

        <Route path="banner" element={<AdminBanner />} />
        <Route path="packages" element={<AdminPackage />} />
        <Route path="doctors" element={<AdminDoctors />} />
        <Route path="rooms" element={<AdminRooms />} />
        <Route path="blog" element={<AdminBlog />} />
        <Route path="contact" element={<AdminContact />} />
        <Route path="clinic" element={<AdminClinic />} />
        <Route path="news" element={<AdminNews />} />
      </Route>

    </Routes>
  );
}
