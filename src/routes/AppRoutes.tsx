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
import PackageDetail from "@/pages/Package_detail";
import DoctorDetail from "@/pages/Doctor_detail";
import BlogDetail from "@/pages/Blog_detail";
import RoomDetail from "@/pages/Room_detail";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/package" element={<Package />} />
      <Route path="/package/:id" element={<PackageDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetail />} />
      <Route path="/clinic" element={<Clinic />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />

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

    </Routes>
  );
}
