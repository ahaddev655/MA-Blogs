import React, { useState } from "react";

function ManageBlogs() {
  const [modalType, setModalType] = useState(null);
  const blogs = [
    {
      id: 1,
      title: "Designing with Tailwindaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      category: "PERSONAL FINANCE",
      status: 1,
      created_on: "May 21, 2026",
      created_at: "2:15 PM",
      likes: "1,240",
      comments: "84",
    },
    {
      id: 2,
      title: "Designing with Tailwindaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      category: "PERSONAL FINANCE",
      status: 1,
      created_on: "May 21, 2026",
      created_at: "2:15 PM",
      likes: "1,240",
      comments: "84",
    },
  ];
  return (
    <>
      {/* Heading */}
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-neutral-700">
          Manage Blogs
        </h1>
        <p className="text-sm mt-1.5 text-neutral-600 font-medium">
          Create, edit, and organize your blog posts from one place.
        </p>
      </div>

      {/* Table Container */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-silky-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm text-neutral-800">
          <thead>
            <tr className="border-b border-neutral-300 bg-muted-beige text-[10px] uppercase tracking-wider text-neutral-700">
              <th className="px-6 py-4 font-bold">#</th>
              <th className="px-6 py-4 font-bold">Title</th>
              <th className="px-6 py-4 font-bold text-center">Status</th>
              <th className="px-6 py-4 font-bold">Created On</th>
              <th className="px-6 py-4 font-bold">Created At</th>
              <th className="px-6 py-4 font-bold text-right">Total Likes</th>
              <th className="px-6 py-4 font-bold text-right">Total Comments</th>
              {/* New Actions Header */}
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200/60">
            {blogs.map((item) => (
              <tr
                className="hover:bg-light-beige/20 transition-colors duration-150"
                key={item.id}
              >
                <td className="whitespace-nowrap px-6 py-4 font-medium text-neutral-500">
                  {item.id}
                </td>
                <td
                  className="whitespace-nowrap px-6 py-4 cursor-pointer font-semibold text-neutral-900 hover:text-text-secondary transition-colors duration-200 ease-in-out"
                  onClick={() => setModalType("view")}
                >
                  {item.title.slice(0, 20) + "..."}
                  <p className="text-[10px] text-light-beige font-semibold tracking-wide mt-0.5">
                    {item.category}
                  </p>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-600/20">
                    {item.status ? "Published" : "Drafted"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-neutral-600">
                  {item.created_on}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-neutral-500">
                  {item.created_at}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center font-mono text-neutral-700">
                  {item.likes}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center font-mono text-neutral-700">
                  {item.comments}
                </td>
                {/* Row 1 Actions */}
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <div className="inline-flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setModalType("edit")}
                      className="text-text-secondary hover:text-[#8c654b] font-semibold transition-colors duration-150"
                    >
                      Edit
                    </button>
                    <span className="text-neutral-300">|</span>
                    <button
                      type="button"
                      onClick={() => setModalType("delete")}
                      className="text-neutral-500 hover:text-red-600 transition-colors duration-150"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManageBlogs;
