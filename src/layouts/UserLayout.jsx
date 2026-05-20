import React, { useEffect, useState } from "react";
import Sidebar from "./../components/user/Sidebar";
import Header from "./../components/user/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./../components/user/Footer";
import { ToastContainer } from "react-toastify";

function UserLayout() {
  // --- Auth Check ---
  const id = localStorage.getItem("mabid");
  const token = localStorage.getItem("mabt");
  const navigate = useNavigate();
  useEffect(() => {
    if (id && token) {
      return;
    }
    navigate("/auth/");
  }, []);

  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <div className="flex min-h-screen">
      <ToastContainer
        hideProgressBar
        theme="dark"
        autoClose={1500}
        closeButton={false}
        position="top-center"
      />
      <Sidebar offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      <div className="flex-1 flex flex-col min-h-screen relative overflow-x-hidden">
        <Header setOffCanvas={setOffCanvas} />
        <main className="flex-1 p-6 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default UserLayout;
