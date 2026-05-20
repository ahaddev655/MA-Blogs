import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import FormItem from "../components/FormItem";

function AuthenticationPage() {
  // --- States ---
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="px-4 flex items-center justify-center h-screen bg-jasmine-white">
      <ToastContainer
        hideProgressBar
        theme="dark"
        autoClose={1500}
        closeButton={false}
        position="top-center"
      />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="bg-white max-w-md w-full rounded-2xl shadow-xl border border-silky-white p-6 sm:p-8 transition-all duration-300"
      >
        {/* --- Header/Logo --- */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-800">
            Welcome To{" "}
            <span className="text-light-beige relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-light-beige">
              MA Blogs
            </span>
          </h1>
          <p className="mt-3 text-sm font-medium text-neutral-500 leading-relaxed">
            {isLogin
              ? "Log in to your account to continue blogging"
              : "Create an account to write, publish, and share your blogs"}
          </p>
        </div>

        {/* Form */}
        <FormItem isLogin={isLogin} />

        {/* --- Toggle State --- */}
        <div className="mt-6 text-center text-sm">
          <p className="text-neutral-500">
            {isLogin ? "New to our platform?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-light-beige font-semibold hover:text-[#bfa98e] transition-colors focus:outline-none underline underline-offset-4"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AuthenticationPage;
