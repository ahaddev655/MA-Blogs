import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
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
  const footerColumns = [
    { title: "Categories", links: dropdownLinks },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "#" },
        { label: "Careers", path: "#" },
        { label: "Privacy Policy", path: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", path: "#" },
        { label: "Contact", path: "#" },
        { label: "FAQ", path: "#" },
      ],
    },
  ];
  return (
    <footer className="bg-white w-full">
      {/* Main Footer */}
      <div className="container-v2 flex gap-5 flex-wrap p-6">
        <div className="grow text-center md:text-start">
          <h1 className="text-light-beige text-2xl font-semibold">MA Blogs</h1>
          <p className="max-w-130 mt-1.5 text-neutral-400 text-sm">
            MA Blogs is a platform where users sign in to write, read, and share
            blogs. Users can post articles with images, explore topics, and
            bookmark favorite blogs. It offers a simple, secure space for
            creativity, ideas, and knowledge sharing across readers and writers.
          </p>
          <div className="flex items-center gap-3 mt-4 md:justify-start justify-center">
            {[
              { icon: FaInstagram, path: "#" },
              { icon: FaFacebook, path: "#" },
              { icon: FaXTwitter, path: "#" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Link to={item.path} key={i}>
                  <div className="grid place-items-center rounded-lg w-10 h-10 group border-2 border-silky-white hover:bg-silky-white hover:-translate-y-1 transition-transform duration-250 ease-in-out">
                    <Icon
                      size={24}
                      className="text-neutral-600 group-hover:text-light-beige transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Fixed Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 sm:gap-12 text-center md:text-start mx-auto sm:mx-0">
          {footerColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                {column.title}
              </span>
              <ul className="flex flex-col space-y-3">
                {column.links.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="inline-block text-sm font-medium text-neutral-400 hover:text-light-beige transform hover:translate-x-1 transition-all duration-200 ease-in-out text-start"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Copyright */}
      <div className="py-3 border-t border-neutral-200">
        <div className="container-v2 flex items-center justify-between gap-2.5 md:flex-row flex-col">
          <p className="md:text-base text-sm text-center text-neutral-600 font-medium">
            All rights reserved by MA Blogs Corporation
          </p>
          <p className="md:text-base text-sm text-center text-neutral-600 font-medium">
            © 2026 MA Blogs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
