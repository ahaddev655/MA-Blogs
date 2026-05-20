import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Bell, ChevronDown, User, Settings, LogOut } from "lucide-react";

function Header({ setOffCanvas }) {
  const [userName] = useState("Muhammad Ahad");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [hasNotifications] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white/70 backdrop-blur-md border-b border-muted-beige/40 h-20 px-4 md:px-8 sticky top-0 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full gap-4">
        {/* Left Side: Menu Trigger & Greeting */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => setOffCanvas(true)}
            className="lg:hidden p-2 rounded-xl text-neutral-600 hover:bg-muted-beige/30 transition-colors active:scale-95"
            aria-label="Open sidebar menu"
          >
            <Menu size={22} strokeWidth={2} />
          </button>

          <div className="hidden sm:block">
            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block mb-0.5">
              Welcome Back,
            </span>
            <h1 className="text-lg font-bold text-neutral-800 leading-tight">
              {userName}
            </h1>
          </div>
        </div>
        {/* Right Side: Interactive Actions */}
        <div className="flex items-center gap-4 shrink-0 ml-auto md:ml-0">
          {/* Notification Trigger Button */}
          <button
            type="button"
            className="p-2.5 text-neutral-500 hover:text-neutral-800 hover:bg-muted-beige/30 rounded-xl relative transition-all active:scale-95"
          >
            <Bell size={20} strokeWidth={2} />
            {hasNotifications && (
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse" />
            )}
          </button>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-muted-beige/60 hidden sm:block" />

          {/* Quick Profile Dropdown Card */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-muted-beige/20 border border-transparent hover:border-muted-beige/40 transition-all active:scale-98"
            >
              <div className="w-9 h-9 rounded-full bg-text-secondary text-silky-white font-bold text-sm flex items-center justify-center shadow-xs">
                MA
              </div>
              <div className="text-left hidden sm:block pr-1">
                <p className="text-xs font-semibold text-neutral-700 leading-none mb-0.5">
                  Muhammad
                </p>
                <p className="text-[10px] text-neutral-400 leading-none">
                  Creator
                </p>
              </div>
              <ChevronDown
                size={14}
                className={`text-neutral-400 transition-transform duration-200 ${showProfileMenu ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-muted-beige/50 rounded-xl shadow-xl py-1.5 z-20 origin-top-right"
                >
                  <button className="w-full px-4 py-2 text-left text-xs font-medium text-neutral-600 hover:bg-muted-beige/20 hover:text-neutral-900 flex items-center gap-2.5 transition-colors">
                    <User size={14} /> My Profile
                  </button>

                  <button className="w-full px-4 py-2 text-left text-xs font-medium text-neutral-600 hover:bg-muted-beige/20 hover:text-neutral-900 flex items-center gap-2.5 transition-colors">
                    <Settings size={14} /> Settings
                  </button>

                  <div className="h-px bg-muted-beige/40 my-1" />

                  <button className="w-full px-4 py-2 text-left text-xs font-semibold text-red-600 hover:bg-red-50/60 flex items-center gap-2.5 transition-colors">
                    <LogOut size={14} /> Sign out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
