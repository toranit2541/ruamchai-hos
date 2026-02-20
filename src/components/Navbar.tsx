import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconStethoscope,
  IconBuildingHospital,
} from "@tabler/icons-react";

const navItems = [
  {
    name: "หน้าแรก",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-teal-600" />,
  },
  {
    name: "บริการ",
    link: "/services",
    icon: <IconBuildingHospital className="h-4 w-4 text-teal-600" />,
  },
  {
    name: "ค้นหาแพทย์",
    link: "/doctors",
    icon: <IconStethoscope className="h-4 w-4 text-teal-600" />,
  },
  {
    name: "เกี่ยวกับเรา",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-teal-600" />,
  },
  {
    name: "ติดต่อเรา",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-teal-600" />,
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      {/* Background Blur Layer */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md shadow-sm" />

      {/* Nav */}
      <div className="relative max-w-7xl mx-auto px-6">
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;
