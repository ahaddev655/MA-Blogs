import { useState } from "react";
import InputItem from "./../components/InputItem";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function FormItem({ isLogin }) {
  const navigate = useNavigate();
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
        localStorage.setItem("mabid", 1);
        localStorage.setItem("mabt", "allow him");
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
    // --- Sign In Logic ---

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
      localStorage.setItem("mabid", 1);
      localStorage.setItem("mabt", "allow him");
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
      <motion.div className="relative" layout transition={{ duration: 0.25 }}>
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
      <motion.div className="relative" layout transition={{ duration: 0.25 }}>
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
  );
}

export default FormItem;
