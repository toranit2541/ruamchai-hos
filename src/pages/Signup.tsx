import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

interface SignupProps {
  onLoginClick: () => void;
}

const Signup: React.FC<SignupProps> = ({ onLoginClick }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    birthday: "",
    gender: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Format date to DD/MM/YYYY before submission
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Validation rules
  const validate = () => {
    const newErrors: any = {};

    if (!form.username.trim()) newErrors.username = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "ID card number is required.";
    else if (!/^\d{13}$/.test(form.email))
      newErrors.email = "ID must be 13 digits.";

    if (!form.password.trim()) newErrors.password = "Password is required.";
    if (!/^\d{10}$/.test(form.phonenumber))
      newErrors.phonenumber = "Phone number must be 10 digits.";

    if (!form.birthday) newErrors.birthday = "Birthday is required.";

    if (!form.gender) newErrors.gender = "Please select a gender.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const formattedBirthday = formatDate(form.birthday);

    console.log("FORM SUBMIT:", {
      ...form,
      birthday: formattedBirthday,
    });

    alert("Signup success! Check console.");
  };

  return (
    <form className="my-8 space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Create an account
        </h2>
      {/* Full Name */}
      <div>
        <Label htmlFor="username">Full Name</Label>
        <Input
          id="username"
          placeholder="John Doe"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )}
      </div>

      {/* ID Card */}
      <div>
        <Label htmlFor="email">ID Card Number</Label>
        <Input
          id="email"
          placeholder="13 digits"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <Label htmlFor="phonenumber">Phone Number</Label>
        <Input
          id="phonenumber"
          placeholder="0912345678"
          value={form.phonenumber}
          onChange={(e) => setForm({ ...form, phonenumber: e.target.value })}
        />
        {errors.phonenumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phonenumber}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Birthday */}
        <div>
          <Label htmlFor="birthday">Birthday</Label>
          <Input
            id="birthday"
            type="date"
            value={form.birthday}
            onChange={(e) => setForm({ ...form, birthday: e.target.value })}
          />
          {errors.birthday && (
            <p className="text-red-500 text-sm mt-1">{errors.birthday}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <Label htmlFor="gender">Gender</Label>
          <select
            id="gender"
            className="h-10 w-full rounded-md bg-gray-50 px-3 text-sm border border-gray-300"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <button
        className="group/btn relative block h-10 w-full rounded-md bg-black font-medium text-white"
        type="submit"
      >
        Sign up →
        <BottomGradient />
      </button>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-neutral-300" />

      {/* Back to login */}
      <button
        type="button"
        className="block w-full text-blue-600 underline text-center"
        onClick={onLoginClick}
      >
        Already have an account? Sign in →
      </button>
    </form>
  );
};

export default Signup;


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 blur-sm group-hover/btn:blur-none absolute inset-x-0 -bottom-px z-0 h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500" />
      <span className="group-hover/btn:opacity-100 absolute inset-x-10 -bottom-px z-0 h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 transition duration-500" />
    </>
  );
};
