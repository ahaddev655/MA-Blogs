import { motion } from "framer-motion";

function GridCardItem({ heading, content, Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: index * 0.3,
      }}
      className="bg-white w-full h-20 rounded-xl shadow-lg hover:shadow-xl hover:scale-101 transition-all duration-200 ease-in-out p-3 flex items-center gap-2"
    >
      {/* Icon */}
      <div className="w-10 h-10 bg-light-beige/40 rounded-lg grid place-items-center">
        <Icon size={20} className="text-neutral-800" />
      </div>
      {/* Content */}
      <div>
        <span className="text-sm font-semibold text-neutral-800">
          {heading}
        </span>
        <h1 className="text-xl font-semibold text-text-secondary">{content}</h1>
      </div>
    </motion.div>
  );
}

export default GridCardItem;
