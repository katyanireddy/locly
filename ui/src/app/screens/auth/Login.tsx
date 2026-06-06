import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Mail, Lock, Chrome } from "lucide-react";
import loginIllustration from "../../../assets/images/login-illustration.jpeg";

export function Login() {
  const navigate = useNavigate();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const isValid =
    emailOrPhone.trim().length > 3 &&
    password.length >= 8;

  return (
    <div className="h-screen bg-white dark:bg-[#0F1115] px-6 pt-4 pb-8 overflow-y-auto">

      <button
        onClick={() => navigate(-1)}
        className="mb-1"
      >
        <ChevronLeft
          size={28}
          className="text-gray-900 dark:text-white"
        />
      </button>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-extrabold text-[#2563EB] justify-center flex"
      >
        Locly
        
      </motion.h1>
      <p className="text-[orange] font-semibold mb-2" style={{ textAlign: "center" }}>
          Welcome Back
        </p>

      <div className="flex justify-center my-2">
        <img
          src={loginIllustration}
          alt="Login"
          className="w-32 h-32 object-contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight text-center">
          Continue your local journey.
        </h3>

        <p className="text-gray-500 mt-2 mb-4 text-sm leading-4 text-center">
          Discover communities, events and people around you.
        </p>
      </motion.div>

      <button
        className="bg-yellow-500 w-full border border-gray-200 rounded-2xl py-4 flex items-center justify-center gap-1 font-semibold text-gray-700 shadow-sm mb-6"
      >
        <Chrome size={20} />
        Continue with Google
      </button>

      <div className="flex items-center mb-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-4 text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="space-y-4">

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
              placeholder="Enter password"
              className="flex-1 outline-none"
            />
          </div>
        </div>

      </div>

      <div className="text-right mt-3">
        <button className="text-[#2563EB] font-medium text-sm">
          Forgot Password?
        </button>
      </div>

      <div className="mt-8">

        <button
          disabled={!isValid}
          onClick={() => navigate("/app/home")}
          className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
            isValid
              ? "bg-[#2563EB] text-white shadow-lg"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          Log In
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#2563EB] font-semibold cursor-pointer"
          >
            Create Account
          </span>
        </p>
      </div>

    </div>
  );
}