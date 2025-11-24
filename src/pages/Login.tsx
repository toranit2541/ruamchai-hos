import React from "react";
// import { WavyBackground } from "../components/ui/wavy-background";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

interface LoginProps {
  onLogin: () => void;
  onSignUpClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSignUpClick }) => {
  return (
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Sign in
        </h2>

        <form
          className="my-8"
          onSubmit={(e) => {
            e.preventDefault(); // ⛔ stop refresh
            onLogin();          // ⬅ run your login
          }}
        >
          <div className="flex flex-col space-y-2 w-full mb-4">
            <Label htmlFor="email">ID</Label>
            <Input id="email" placeholder="Identifly card 13 digits" type="text" />
          </div>

          <div className="flex flex-col space-y-2 w-full mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </div>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-black font-medium text-white"
            type="submit"
          >
            Sign in →
            <BottomGradient />
          </button>

          <div className="my-6 h-px w-full bg-neutral-300 dark:bg-neutral-700" />

          <button
            type="button"
            className="block w-full text-blue-600 underline text-center"
            onClick={onSignUpClick}
          >
            Don't have an account? Sign up →
          </button>
        </form>
      </div>
  );
};


export default Login;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 blur-sm group-hover/btn:blur-none absolute inset-x-0 -bottom-px z-0 h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500" />
      <span className="group-hover/btn:opacity-100 absolute inset-x-10 -bottom-px z-0 h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 transition duration-500" />
    </>
  );
};

