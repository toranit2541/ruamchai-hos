import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";
import AuthLayout from "./AuthLayout";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <AuthLayout>
                <AnimatePresence mode="wait">
                    {isLogin ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.4 }}
                            className="w-full"
                        >
                            <Login
                                onLogin={() => console.log("Login")}
                                onSignUpClick={() => setIsLogin(false)}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="signup"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.4 }}
                            className="w-full"
                        >
                            <Signup onLoginClick={() => setIsLogin(true)} />
                        </motion.div>
                    )}
                </AnimatePresence>
        </AuthLayout>
    );
}
