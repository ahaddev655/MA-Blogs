import { useState } from "react";
import InputItem from "./../components/InputItem";
import { AnimatePresence, motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

function AuthenticationPage() {
  // --- States ---
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  // --- Value Changes ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Form Submit Function ---
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // --- Sign Up Logic ---
    if (!isLogin) {
      //   --- Validations ---
      if (
        !formData.fname ||
        !formData.lname ||
        !formData.email ||
        !formData.password
      ) {
        toast.error("All fields are required");
        return;
      }
      if (formData?.password.length < 11) {
        toast.error("Password must be of 11 chars");
        return;
      }
      if (!formData?.email.includes("@")) {
        toast.error("Email is invalid");
        return;
      }
      setTimeout(() => {
        toast.success("User Registered Successfully");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          password: "",
        });
        console.log("FORM DATA: ", formData);
      }, 1500);
      return;
    }
    // --- Sign Up Logic ---

    //   --- Validations ---
    if (!formData.email || !formData.password) {
      toast.error("All fields are required");
      return;
    }

    if (!formData?.email.includes("@")) {
      toast.error("Email is invalid");
      return;
    }
    setTimeout(() => {
      toast.success("User Logged in Successfully");
      setFormData({
        fname: "",
        lname: "",
        email: "",
        password: "",
      });
      console.log("FORM DATA: ", formData);
    }, 1500);
  };

  return (
    <div className="px-4 flex items-center justify-center h-screen bg-jasmine-white">
      <ToastContainer
        theme="colored"
        autoClose={1500}
        position="top-center"
        hideProgressBar
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
              Blog Website
            </span>
          </h1>
          <p className="mt-3 text-sm font-medium text-neutral-500 leading-relaxed">
            {isLogin
              ? "Log in to your account to continue blogging"
              : "Create an account to write, publish, and share your blogs"}
          </p>
        </div>

        {/* --- Form --- */}
        <form onSubmit={handleFormSubmit} className="space-y-5">
          <AnimatePresence mode="popLayout">
            {!isLogin && (
              <motion.div
                key="name-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <InputItem
                      label={"First Name"}
                      value={formData.fname}
                      name={"fname"}
                      id={"fname"}
                      type={"text"}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <InputItem
                      label={"Last Name"}
                      value={formData.lname}
                      name={"lname"}
                      id={"lname"}
                      type={"text"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email Input */}
          <motion.div
            className="relative"
            layout
            transition={{ duration: 0.25 }}
          >
            <InputItem
              label={"Email Address"}
              value={formData.email}
              name={"email"}
              id={"email"}
              type={"text"}
              onChange={handleChange}
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            className="relative"
            layout
            transition={{ duration: 0.25 }}
          >
            <InputItem
              label={"Password"}
              value={formData.password}
              name={"password"}
              id={"password"}
              type={"password"}
              onChange={handleChange}
            />
          </motion.div>

          {/* --- Submit Button --- */}
          <motion.button
            layout
            transition={{ duration: 0.25 }}
            type="submit"
            className="w-full h-12 mt-2 bg-light-beige hover:bg-[#bfa98e] text-white font-semibold rounded-xl shadow-md shadow-light-beige/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-light-beige focus:ring-offset-2"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </motion.button>
        </form>

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
