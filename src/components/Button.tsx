import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "primary" }) => {
  const base = "px-6 py-2 rounded-md font-semibold transition";
  const styles =
    type === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
};

export default Button;
