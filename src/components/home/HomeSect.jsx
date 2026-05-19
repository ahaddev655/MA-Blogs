import { Link } from "react-router-dom";
import homeImage from "../../assets/home-img.jpg";
import { motion } from "framer-motion";

function HomeSect() {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="flex items-center justify-center h-screen relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 backdrop-blur-xs" />
        <div className="relative z-20 text-center flex flex-col items-center justify-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-light-beige font-bold"
          >
            A Curated Space For
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1.2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
            className="text-5xl md:text-7xl font-black tracking-wide text-transparent bg-clip-text bg-linear-to-b from-silky-white to-muted-beige drop-shadow-sm"
          >
            MA BLOGS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 1.5 }}
            className="h-0.75 w-16 bg-linear-to-r from-transparent via-light-beige to-transparent mb-2 shadow-[0_0_8px_rgba(201,181,156,0.8)]"
          />
          <div className="flex items-center justify-center gap-3 sm:flex-row flex-col">
            <Link to={"#"}>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 2 }}
                className="group relative px-6 py-2.5 sm:text-lg font-semibold border-2 rounded-[34px] bg-transparent overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-100 text-light-beige border-light-beige hover:text-[#1c1917] hover:shadow-[0_0_20px_rgba(201,181,156,0.4)]"
              >
                <span className="absolute inset-0 m-auto w-12 h-12 rounded-full scale-0 -z-10 bg-light-beige transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[4]"></span>
                Explore Stories
              </motion.button>
            </Link>
            <Link to={"#"}>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 2 }}
                className="group relative px-6 py-2.5 sm:text-lg font-semibold border-2 rounded-[34px] bg-transparent overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-100 text-light-beige border-light-beige hover:text-[#1c1917] hover:shadow-[0_0_20px_rgba(201,181,156,0.4)]"
              >
                <span className="absolute inset-0 m-auto w-12 h-12 rounded-full scale-0 -z-10 bg-light-beige transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[4]"></span>
                Start Writing
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSect;
