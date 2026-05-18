import { ChevronDown, CircleUserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  // --- Redirect Logic ---
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const redirect = (e) => {
    e.preventDefault();

    if (id && token) {
      navigate("/user-dashboard/");
      return;
    }
    navigate("/auth/");
  };
  // --- Navigation Links Array ---
  const navigationLinks = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/recents",
      label: "Recents",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];
  // --- Dropdown Toggle ---
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const dropdownRef = useRef();

  const dropdownLinks = [
    {
      path: "/category/all",
      label: "All Blogs",
    },
    {
      path: "/category/recents",
      label: "Recents",
    },
    {
      path: "/category/health",
      label: "Health & Wellness",
    },
    {
      path: "/category/travel",
      label: "Travel",
    },
    {
      path: "/category/food",
      label: "Food & Drink",
    },
    {
      path: "/category/finance",
      label: "Personal Finance",
    },
    {
      path: "/category/home",
      label: "Home & Living",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="h-20 bg-white shadow-lg border-b-2 border-silky-white">
      <div className="container-v2 h-full flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-semibold text-light-beige">MA Blogs</h1>
        </div>
        {/* Navigation Links & Dropdown */}
        <div className="flex items-center justify-center gap-3">
          {/* Navigation Links */}
          <ul className="flex items-center justify-center gap-3">
            {navigationLinks.map((item, i) => (
              <NavLink
                to={item.path}
                end
                key={i}
                className={({ isActive }) =>
                  `relative font-medium transition-colors duration-200 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:h-0.5 before:w-full before:rounded-xl before:bg-light-beige before:scale-x-0 before:origin-left before:transition-transform before:duration-200 before:ease-in-out hover:before:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-xl after:bg-light-beige after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-in-out hover:after:scale-x-100 ${isActive ? "text-light-beige before:scale-x-100 after:scale-x-100" : "text-neutral-600 hover:text-light-beige"}`
                }
              >
                <li>{item.label}</li>
              </NavLink>
            ))}
          </ul>
          {/* Dropdown */}
          <div className="relative">
            <button
              ref={dropdownRef}
              className="relative font-medium transition-colors duration-200 ease-in-out text-neutral-600 hover:text-light-beige flex items-center justify-center gap-0.5"
              onClick={() => setDropdownToggle(!dropdownToggle)}
            >
              Categories
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ease-in-out ${dropdownToggle ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <AnimatePresence>
              {dropdownToggle && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute w-56 p-2 bg-jasmine-white rounded-xl border border-silky-white flex flex-col shadow-md mt-2"
                >
                  {dropdownLinks.map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <Link
                        to={item.path}
                        className="font-medium px-3 py-2.5 rounded-md transition-colors duration-200 ease-in-out text-neutral-600 hover:text-light-beige hover:bg-neutral-50"
                      >
                        {item.label}
                      </Link>
                      {dropdownLinks.length - 1 > i && (
                        <hr className="border-t border-muted-beige mx-3 my-1 opacity-60" />
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Social Icons */}
        <div>
          <button
            type="button"
            onClick={redirect}
            className="transition-colors duration-200 ease-in-out text-neutral-600 hover:text-light-beige"
          >
            <CircleUserRound strokeWidth={1.9} size={23} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
