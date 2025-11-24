import React from 'react';

import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconSettings } from "@tabler/icons-react";

const navItems = [
    {
      name: "หน้าแรก",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "บริการ",
      link: "/services",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "ค้นหาแพทย์",
      link: "/doctors",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "เกี่ยวกับเรา",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "ติดต่อเรา",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Admin",
      link: "/admin",
      icon: <IconSettings className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];


const Navbar: React.FC = () => {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default Navbar;