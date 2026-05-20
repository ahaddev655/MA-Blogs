import React, { useState } from "react";
import Sidebar from "./../components/user/Sidebar";
import Header from "./../components/user/Header";
import { Outlet } from "react-router-dom";
import Footer from "./../components/user/Footer";

function UserLayout() {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <div className="flex">
      <Sidebar offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      <div className="w-full max-w-7xl">
        <Header setOffCanvas={setOffCanvas} />
        {/* <Outlet />
        <Footer /> */}
      </div>
    </div>
  );
}

export default UserLayout;
