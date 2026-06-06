import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ChevronLeft,
  User,
  Mail,
  Lock,
  Globe
} from "lucide-react";

import signupIllustration from "../../../assets/images/signup-illustration.jpeg";

export function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValid =
    fullName.trim().length > 2 &&
    emailOrPhone.trim().length > 3 &&
    password.length >= 8 &&
    password === confirmPassword;

  return (
    <div className="h-screen bg-white dark:bg-[#0F1115] px-6 pt-4 pb-8 overflow-y-auto">


      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-1"
      >
        <ChevronLeft
          size={28}
          className="text-gray-900 dark:text-white"
        />
      </button>

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-extrabold text-[#2563EB] justify-center flex"
      >
        Locly
      </motion.h1>

      {/* Illustration */}
      <div className="flex justify-center my-2">
        <img
          src={signupIllustration}
          alt="signup"
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-[#2563EB] font-semibold mb-2">
          Create Account
        </p>

        <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight text-center">
          Find your community
        </h2>

        <p className="text-gray-500 mt-4 mb-4 text-base leading-7 text-center">
          Join local communities, events and activities around you.
        </p>
      </motion.div>

      {/* Google */}
      <button
        className="bg-yellow-500 w-full border border-gray-200 rounded-2xl py-4 flex items-center justify-center gap-3 font-semibold text-gray-700 shadow-sm mb-6"
      >
        <Globe size={20} />
        Continue with Google
      </button>

      {/* Divider */}
      <div className="flex items-center mb-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-4 text-gray-400 text-sm">
          OR
        </span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Form */}
      <div className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            Full Name
          </label>

          <div className="border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3">
            <User size={18} className="text-gray-400" />

            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              className="flex-1 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            Email or Phone
          </label>

          <div className="border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3">
            <Mail size={18} className="text-gray-400" />

            <input
              value={emailOrPhone}
              onChange={(e) =>
                setEmailOrPhone(e.target.value)
              }
              placeholder="Enter email or phone"
              className="flex-1 outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            Password
          </label>

          <div className="border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3">
            <Lock size={18} className="text-gray-400" />

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Minimum 8 characters"
              className="flex-1 outline-none"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            Confirm Password
          </label>

          <div className="border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3">
            <Lock size={18} className="text-gray-400" />

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Re-enter password"
              className="flex-1 outline-none"
            />
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-8">

        <button
          disabled={!isValid}
          onClick={() => navigate("/otp")}
          className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
            isValid
              ? "bg-[#2563EB] text-white shadow-lg"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#2563EB] font-semibold cursor-pointer"
          >
            Log In
          </span>
        </p>

        <p className="text-center text-xs text-gray-400 mt-6 leading-5">
          By creating an account you agree to our
          Terms of Service and Privacy Policy.
        </p>

      </div>
    </div>
  );
}