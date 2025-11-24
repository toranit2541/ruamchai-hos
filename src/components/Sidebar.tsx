import React, { useState } from "react";
import { Menu, X, Home, User, Settings, LogOut } from "lucide-react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={18} />, link: "/" },
    { name: "Profile", icon: <User size={18} />, link: "/profile" },
    { name: "Settings", icon: <Settings size={18} />, link: "/settings" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Ruamchai Admin
          </h1>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="flex items-center space-x-3 p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-6 w-full px-4">
          <button className="flex items-center space-x-3 text-red-500 hover:text-red-600">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
