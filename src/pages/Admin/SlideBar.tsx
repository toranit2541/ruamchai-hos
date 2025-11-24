"use client";

import { useState } from "react";
import { Sidebar as UISidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconHome,
  IconPhoto,
  IconUser,
  IconBuildingHospital,
  IconNews,
  IconBox,
  IconPhone,
  IconClipboardText,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function Sidebar() {
  const links = [
    { label: "Banner", href: "/admin/banner", icon: IconPhoto },
    { label: "Package", href: "/admin/packages", icon: IconBox },
    { label: "Doctors", href: "/admin/doctors", icon: IconUser },
    { label: "Room", href: "/admin/rooms", icon: IconBuildingHospital },
    { label: "Blog", href: "/admin/blog", icon: IconClipboardText },
    { label: "Contact", href: "/admin/contact", icon: IconPhone },
    { label: "Clinic", href: "/admin/clinic", icon: IconHome },
    { label: "News", href: "/admin/news", icon: IconNews },
  ];

  const [open, setOpen] = useState(false);

  return (
    <UISidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {open ? <Logo /> : <LogoIcon />}

          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={{
                  label: link.label,
                  href: link.href,
                  icon: (
                    <link.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
                  ),
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom user section */}
        <div>
          <SidebarLink
            link={{
              label: "Admin User",
              href: "#",
              icon: (
                <img
                  src="https://assets.aceternity.com/manu.png"
                  className="h-7 w-7 rounded-full"
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </UISidebar>
  );
}

export const Logo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black dark:text-white"
    >
      <div className="h-5 w-6 rounded-md bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre"
      >
        Ruamchai Admin
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm"
    >
      <div className="h-5 w-6 rounded-md bg-black dark:bg-white" />
    </a>
  );
};
