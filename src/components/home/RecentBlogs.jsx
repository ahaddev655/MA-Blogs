import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homeImage from "../../assets/home-img.jpg";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";

function RecentBlogs() {
  const [bookmarks, setBookmarks] = useState(() => {
    const stored = localStorage.getItem("bookmark");
    return stored ? JSON.parse(stored) : [];
  });

  const toggleBookMark = (id) => {
    setBookmarks((prevBookmarks) => {
      const isBookmarked = prevBookmarks.includes(id);
      let updatedBookmarks;

      if (isBookmarked) {
        updatedBookmarks = prevBookmarks.filter(
          (bookmarkId) => bookmarkId !== id,
        );
      } else {
        updatedBookmarks = [...prevBookmarks, id];
      }

      // Sync with localStorage
      localStorage.setItem("bookmark", JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  return (
    <div className="py-12 container-v2">
      {/* Heading */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-light-beige"
        >
          Recent Blogs
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
          className="h-0.75 w-16 bg-linear-to-r from-transparent via-light-beige to-transparent my-1 shadow-[0_0_8px_rgba(201,181,156,0.8)] mx-auto"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1.5 }}
          className="text-sm md:text-base text-neutral-400 mt-2"
        >
          Explore our latest blog posts and stay updated with fresh insights.
        </motion.p>
      </div>

      {/* Mock Data */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 2 }}
        className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4"
      >
        {Array(6)
          .fill(null)
          .map((_, i) => {
            const isBookmarked = bookmarks.includes(i);

            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 2 + i * 0.2,
                }}
                className="bg-muted-beige/10 border border-light-beige/20 rounded-xl text-center overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out relative"
                key={i}
              >
                {/* Bookmark Icon Button */}
                <button
                  onClick={() => toggleBookMark(i)}
                  className="group absolute top-2 right-2 bg-white/80 w-10 h-10 grid place-items-center rounded-full z-20 hover:scale-105 active:scale-100 transition-transform duration-200 ease-in-out shadow-lg"
                >
                  <Bookmark
                    strokeWidth={1.9}
                    size={23}
                    fill={isBookmarked ? "#c9b59c" : "none"}
                    className={`transition-all duration-200 ease-in-out ${
                      isBookmarked
                        ? "text-light-beige"
                        : "text-neutral-500 group-hover:text-light-beige"
                    }`}
                  />
                </button>

                {/* Image */}
                <div className="overflow-hidden w-100 h-66.5">
                  <img
                    src={homeImage}
                    alt="IMG"
                    className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-start">
                  <span className="text-xs uppercase text-light-beige font-semibold">
                    PERSONAL FINANCE
                  </span>
                  <h1 className="line-clamp-1 truncate font-semibold text-[#A97E60] text-lg mb-2">
                    How to Earn Money in 2 hours
                  </h1>
                  <p className="line-clamp-3 font-medium text-neutral-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos, inventore rem. Tempore, quas aliquid expedita debitis
                    eaque nulla itaque quasi consequuntur odio asperiores beatae
                    sunt...
                  </p>
                  <Link to={"#"}>
                    <button className="mt-4 group relative px-6 py-2.5 font-semibold border-2 rounded-[34px] bg-transparent overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-100 text-light-beige border-light-beige hover:text-neutral-700 hover:shadow-[0_0_20px_rgba(201,181,156,0.4)]">
                      <span className="absolute inset-0 m-auto w-12 h-12 rounded-full scale-0 -z-10 bg-light-beige transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[4]"></span>
                      Read More
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
}

export default RecentBlogs;
