import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  LogOut,
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
  ];
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="max-w-72 w-full bg-white/80 h-screen border border-silky-white py-4 lg:flex hidden flex-col">
        {/* Upper Section */}
        <div className="px-6 h-15.5">
          <h1 className="text-[22px] font-semibold text-neutral-700 mt-1.75">
            MA Blogs
          </h1>
        </div>
        {/* Divider */}
        <div className="h-[0.5px] w-full bg-light-beige/50 mb-4" />
        {/* Navigation Links */}
        <ul className="flex flex-col gap-1 px-3">
          {navigationLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                key={i}
                end={item.label !== "Your Profile"}
                className={({ isActive }) =>
                  `transition-all duration-200 ease-in-out group p-3 rounded-lg ${isActive ? "bg-text-secondary shadow-md text-silky-white text-shadow-lg" : "hover:bg-light-beige/10 text-neutral-600 hover:text-neutral-700 hover:text-shadow-lg"}`
                }
              >
                <li className="flex items-center gap-2">
                  <Icon
                    size={18}
                    className="transition-transform duration-200 ease-in-out group-hover:-translate-x-0.5"
                  />
                  <span className="pt-0.5 font-medium text-sm">
                    {item.label}
                  </span>
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
            className="fixed top-0 left-0 w-full h-full inset-0 z-30 bg-black/50 backdrop-blur-md lg:hidden block"
          >
            <motion.div
              initial={{ x: -30 }}
              animate={{ x: 0 }}
              exit={{ x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-white/80 h-screen border border-silky-white py-4 flex flex-col relative z-20"
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
                        `transition-all duration-200 ease-in-out group p-3 rounded-lg ${isActive ? "bg-text-secondary shadow-lg text-silky-white text-shadow-lg" : "hover:bg-light-beige/10 text-neutral-600 hover:text-neutral-700 hover:text-shadow-lg"}`
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
              <div className="px-3 mt-auto">
                <button
                  type="button"
                  onClick={() => {}}
                  className="w-[calc(100%-16px)] mx-2 mt-auto flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-600/80 hover:text-red-600 bg-red-50/30 hover:bg-red-50/80 border border-red-100/40 hover:border-red-200/60 rounded-xl transition-all duration-200 ease-in-out active:scale-[0.98] group"
                >
                  <LogOut
                    size={18}
                    className="transition-transform duration-200 ease-in-out group-hover:-translate-x-0.5"
                  />
                  <span className="pt-0.5 tracking-wide">Logout</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
