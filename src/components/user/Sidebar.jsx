import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Notebook,
  NotebookPen,
  Settings,
  UserCircle,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar({ offCanvas, setOffCanvas }) {
  const navigationLinks = [
    {
      path: "/u/",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      path: "/u/blogs",
      label: "Manage Your Blogs",
      icon: Notebook,
    },
    {
      path: "/u/add",
      label: "Create New Blog",
      icon: NotebookPen,
    },
    {
      path: "/u/settings",
      label: "Settings",
      icon: Settings,
    },
    {
      path: "/u/profile",
      label: "Your Profile",
      icon: UserCircle,
    },
  ];
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="max-w-72 w-full bg-white/80 h-screen border border-silky-white py-4 lg:block hidden">
        {/* Upper Section */}
        <div className="px-3">
          <h1 className="text-2xl font-semibold text-neutral-800">MA Blogs</h1>
          {/* <button
            type="button"
            onClick={() => setOffCanvas(false)}
            className="transition-colors lg:hidden flex duration-200 ease-in-out text-neutral-600 hover:text-light-beige"
          >
            <X />
          </button> */}
        </div>
        {/* Divider */}
        <div className="h-px w-full bg-light-beige/50 my-4" />
        {/* Navigation Links */}
        <ul className="flex flex-col gap-1 px-2">
          {navigationLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                key={i}
                end
                className={({ isActive }) =>
                  `transition-colors duration-200 ease-in-out p-3 rounded-lg ${isActive ? "bg-text-secondary shadow-lg text-silky-white" : "hover:bg-light-beige/10 text-neutral-600 hover:text-neutral-700"}`
                }
              >
                <li className="flex items-center gap-2">
                  <Icon />
                  <span className="pt-0.5 font-medium">{item.label}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {offCanvas && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full inset-0 bg-black/50 backdrop-blur-md lg:hidden block"
          >
            <motion.div
              initial={{ x: -30 }}
              animate={{ x: 0 }}
              exit={{ x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-white/80 h-screen border border-silky-white py-4"
            >
              {/* Upper Section */}
              <div className="flex items-center justify-between px-3">
                <h1 className="text-2xl font-semibold text-neutral-800">
                  MA Blogs
                </h1>
                <button
                  type="button"
                  onClick={() => setOffCanvas(false)}
                  className="transition-colors lg:hidden flex duration-200 ease-in-out text-neutral-600 hover:text-light-beige"
                >
                  <X />
                </button>
              </div>
              {/* Divider */}
              <div className="h-px w-full bg-light-beige/50 my-4" />
              {/* Navigation Links */}
              <ul className="flex flex-col gap-1 px-2">
                {navigationLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      to={item.path}
                      key={i}
                      end
                      className={({ isActive }) =>
                        `transition-colors duration-200 ease-in-out p-3 rounded-lg ${isActive ? "bg-text-secondary shadow-lg text-silky-white" : "hover:bg-light-beige/10 text-neutral-600 hover:text-neutral-700"}`
                      }
                    >
                      <li className="flex items-center gap-2">
                        <Icon />
                        <span className="pt-0.5 font-medium">{item.label}</span>
                      </li>
                    </NavLink>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
