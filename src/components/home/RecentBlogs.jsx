import { motion } from "framer-motion";
import homeImage from "../../assets/home-img.jpg";
import { Link } from "react-router-dom";

function RecentBlogs() {
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
          className="h-0.5 w-12 bg-light-beige my-1 rounded-full opacity-60 mx-auto"
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
          .map((_, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 2 + i * 0.25,
              }}
              className="bg-muted-beige/10 border border-light-beige/20 rounded-xl text-center overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
              key={i}
            >
              {/* Image */}
              <div className="overflow-hidden w-100 h-66.5">
                <img
                  src={homeImage}
                  alt="IMG"
                  className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              {/* Content */}
              <div className="p-3 text-start">
                {/* Category */}
                <span className="text-xs uppercase text-light-beige font-semibold">
                  PERSONAL FINANCE
                </span>
                {/* Blog Heading */}
                <h1 className="line-clamp-1 truncate font-semibold text-[#A97E60] text-lg mb-2">
                  How to Earn Money in 2 hours
                </h1>
                {/* Blog Description */}
                <p className="line-clamp-3 font-medium text-neutral-800">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                  inventore rem. Tempore, quas aliquid expedita debitis eaque
                  nulla itaque quasi consequuntur odio asperiores beatae sunt,
                  est ipsam alias voluptate eius unde? Architecto temporibus ea
                  expedita facere assumenda sit enim quibusdam ad fuga. Quas
                  adipisci est recusandae fugiat? Non, officiis laborum
                  accusantium voluptas optio dolorem. Cupiditate impedit dolore
                  corrupti, velit ut sit delectus facere quis laudantium
                  eligendi numquam laboriosam asperiores excepturi, eos cum,
                  odio autem possimus eaque. Facilis culpa perspiciatis sapiente
                  saepe impedit aperiam voluptatem, quis temporibus nesciunt
                  autem vitae? Et distinctio rem dolor earum mollitia ratione
                  odit placeat incidunt ex.
                </p>
                {/* Button */}
                <Link to={"#"}>
                  <button className="mt-4 group relative px-6 py-2.5 sm:text-lg font-semibold border-2 rounded-[34px] bg-transparent overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-100 text-light-beige border-light-beige hover:text-[#1c1917] hover:shadow-[0_0_20px_rgba(201,181,156,0.4)]">
                    <span className="absolute inset-0 m-auto w-12 h-12 rounded-full scale-0 -z-10 bg-light-beige transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[4]"></span>
                    Read More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}

export default RecentBlogs;
