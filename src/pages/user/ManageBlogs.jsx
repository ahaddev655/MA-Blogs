import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ManageBlogs() {
  const [modalType, setModalType] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editCategory, setEditCategory] = useState("");
  const categories = [
    "Health & Wellness",
    "Travel",
    "Food & Drink",
    "Personal Finance",
    "Home & Living",
  ];
  const blogs = [
    {
      id: 1,
      title: "Designing with Tailwind Css V4.0 along with React.js and vite",
      category: "PERSONAL FINANCE",
      status: 1,
      created_on: "May 21, 2026",
      created_at: "2:15 PM",
      likes: "1,240",
      comments: "84",
    },
    {
      id: 2,
      title: "Designing with Tailwind Css V4.0 along with React.js and vite",
      category: "PERSONAL FINANCE",
      status: 1,
      created_on: "May 21, 2026",
      created_at: "2:15 PM",
      likes: "1,240",
      comments: "84",
    },
  ];

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    setModalType(null);
    setSelectedBlog(null);
  };
  const [editContent, setEditContent] = useState("");
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
                  onClick={() => {
                    setModalType("view");
                    setSelectedBlog(item);
                  }}
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
                      onClick={() => {
                        setModalType("edit");
                        setSelectedBlog(item);
                      }}
                      className="text-text-secondary hover:text-[#8c654b] font-semibold transition-colors duration-150"
                    >
                      Edit
                    </button>
                    <span className="text-neutral-300">|</span>
                    <button
                      type="button"
                      onClick={() => {
                        setModalType("delete");
                        setSelectedBlog(item);
                      }}
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

      {/* Modal */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={() => {
              setModalType(null);
              setSelectedBlog(null);
            }}
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white/95 max-w-2xl w-full rounded-2xl p-6 md:p-8 shadow-xl border border-muted-beige/30 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {modalType === "view" && selectedBlog && (
                <>
                  {/* Header Section */}
                  <header className="flex flex-col items-center space-y-3">
                    <div className="py-1 px-3 rounded-full bg-silky-white border border-muted-beige transition-all">
                      <span className="text-[10px] font-bold text-text-secondary tracking-widest uppercase">
                        {selectedBlog.category}
                      </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-semibold text-center text-neutral-800 tracking-wide">
                      Blog <span className="text-text-secondary">Details</span>
                    </h1>

                    {/* Decorative Divider Line */}
                    <div className="w-16 h-0.5 bg-light-beige rounded-full mt-1" />
                    <div className="mt-4 w-full">
                      <h1 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-neutral-800 leading-tight wrap-break-word whitespace-normal">
                        {selectedBlog.title}
                      </h1>
                    </div>
                  </header>
                  {/* Article Content Container */}
                  <article className="mt-6 text-neutral-600 text-base leading-relaxed h-86 overflow-y-auto pr-3 space-y-5 max-w-none scrollbar-thin scrollbar-thumb-muted-beige scrollbar-track-transparent">
                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-text-secondary first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Qui labore, facilis eveniet quis excepturi perferendis,
                      delectus nobis hic rerum sed vero tempore iusto natus,
                      tenetur accusantium corporis quas ratione officiis!
                      Distinctio quia ab, rerum laudantium recusandae, neque in
                      voluptatum quo consequuntur unde asperiores, assumenda
                      nesciunt nisi nostrum harum est sint adipisci placeat
                      aspernatur dolore minus veritatis ducimus.
                    </p>
                    <p>
                      Reprehenderit iste dicta quo omnis iusto aut odit laborum,
                      earum perferendis pariatur. Ipsum nesciunt, consequuntur
                      cumque quidem cum repellendus? Sequi natus minima ipsam
                      atque ut modi hic voluptate eaque qui dolor laudantium
                      quam dicta possimus veritatis illum architecto iusto, esse
                      officia facilis necessitatibus.
                    </p>
                  </article>
                </>
              )}
              {modalType === "edit" && selectedBlog && (
                <>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleEditSubmit();
                    }}
                    className="space-y-5"
                  >
                    {/* 1. Title Input */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Heading / Title
                      </label>
                      <input
                        type="text"
                        value={selectedBlog.title}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[text-secondary] focus:ring-1 focus:ring-[text-secondary] bg-neutral-50/50 outline-none transition-all text-neutral-800 text-sm md:text-base font-medium"
                        placeholder="Enter blog heading..."
                        required
                      />
                    </div>

                    {/* 2. Custom Category Dropdown */}
                    <div className="flex flex-col space-y-1.5 relative">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Category
                      </label>

                      {/* Trigger Button */}
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-silky-white/30 text-left text-sm text-neutral-700 transition-all font-medium"
                      >
                        <span>{selectedBlog.category}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[text-secondary]" : ""}`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <>
                            <div
                              className="fixed inset-0 z-10"
                              onClick={() => setIsDropdownOpen(false)}
                            />

                            <motion.ul
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-muted-beige/60 rounded-xl shadow-lg max-h-48 overflow-y-auto z-20 p-1"
                            >
                              {categories.map((category) => (
                                <li key={category}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditCategory(category);
                                      setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors font-medium ${
                                      editCategory === category
                                        ? "bg-silky-white text-[text-secondary]"
                                        : "text-neutral-600 hover:bg-neutral-50"
                                    }`}
                                  >
                                    {category}
                                  </button>
                                </li>
                              ))}
                            </motion.ul>
                          </>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Content
                      </label>
                      <textarea
                        // value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[text-secondary] focus:ring-1 focus:ring-[text-secondary] bg-neutral-50/50 outline-none transition-all text-neutral-600 text-sm md:text-base leading-relaxed resize-none scrollbar-thin scrollbar-thumb-muted-beige"
                        placeholder="Write your blog post details here..."
                        required
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5 pt-2">
                      <button
                        type="button"
                        onClick={() => setModalType(null)} // Or whatever closes your modal state
                        className="px-4 py-2 text-sm font-medium text-neutral-500 bg-neutral-50 hover:bg-silky-white border border-neutral-200 rounded-xl transition-colors w-full sm:w-auto"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 text-sm font-medium text-white bg-[text-secondary] hover:opacity-90 rounded-xl shadow-sm transition-opacity w-full sm:w-auto"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </>
              )}
              {modalType === "delete" && selectedBlog && (
                <>
                  <div className="flex items-center space-x-3.5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 border border-red-100 text-red-500 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800">
                        Delete <span className="text-text-secondary">Post</span>
                      </h3>
                      <p className="text-xs text-neutral-400 mt-0.5 uppercase tracking-wider font-medium">
                        Personal Finance
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <p className="text-sm text-neutral-500 leading-relaxed wrap-break-word whitespace-normal">
                      Are you sure you want to delete{" "}
                      <span className="font-semibold text-neutral-700">
                        "{selectedBlog?.title}"
                      </span>
                      ? This action is permanent and cannot be undone.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
                    <button
                      onClick={() => {
                        setSelectedBlog(null);
                        setModalType(null);
                      }}
                      className="px-4 py-2 text-sm font-medium text-neutral-500 bg-neutral-50 hover:bg-silky-white border border-neutral-200 rounded-xl transition-colors w-full sm:w-auto"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDeleteSubmit}
                      className="px-5 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-xl shadow-sm shadow-red-100 transition-colors w-full sm:w-auto"
                    >
                      Delete Blog
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ManageBlogs;
