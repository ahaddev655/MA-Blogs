import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Mocking the InputItem component based on common standards
// Replace this with your actual import if it lives in a separate file
function InputItem({ label, value, onChange, placeholder, id }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-sm font-semibold text-neutral-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-light-beige px-5 py-3 text-neutral-800 font-medium placeholder-neutral-400 focus:outline-none focus:border-text-secondary transition-colors"
      />
    </div>
  );
}

function AddBlogs() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const dropdownRef = useRef(null);
  const categories = ["Design", "Development", "Marketing", "Photography", "Writing"];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation Guard
    if (!title.trim() || !content.trim() || selectedCategory === "Select Category") {
      alert("Please fill in all fields and select a category.");
      return;
    }

    /* 
      Processing raw text lines into semantic HTML strings wrapped in 
      Tailwind utility classes matching your theme.
    */
    const htmlContent = content
      .split("\n\n") // Split text into distinct paragraphs via double line breaks
      .map((paragraph) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return "";
        
        // Simple regex check: if a line starts with '#' transform it to an H2 heading
        if (trimmed.startsWith("#")) {
          const headingText = trimmed.replace(/^#\s*/, "");
          return `<h2 class="text-xl font-bold text-neutral-800 mt-6 mb-3">${headingText}</h2>`;
        }
        
        // Default structural paragraph tag
        return `<p class="text-base text-neutral-700 leading-relaxed mb-4">${trimmed}</p>`;
      })
      .join("");

    // The structured blog payload ready for your state sync, Context, or API call
    const blogPayload = {
      id: Date.now(),
      title: title.trim(),
      category: selectedCategory,
      bodyHtml: htmlContent,
      createdAt: new Date().toISOString(),
    };

    console.log("Generated Blog Payload:", blogPayload);
    
    // Clear out form fields upon successful creation
    setTitle("");
    setContent("");
    setSelectedCategory("Select Category");
  };

  return (
    <>
      {/* Heading */}
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-neutral-700">
          Create and Post Your Blogs
        </h1>
        <p className="text-sm mt-1.5 text-neutral-600 font-medium">
          Create, and post your blog posts from one place.
        </p>
      </div>

      {/* Main Creation Form Container */}
      <form onSubmit={handleSubmit} className="bg-white/80 shadow-md p-6 mt-4 rounded-2xl flex flex-col gap-6">
        
        {/* Row setup: Title Field and Category Picker */}
        <div className="flex flex-col md:flex-row gap-6 items-end">
          <div className="flex-1 w-full">
            <InputItem
              label="Blog Title"
              id="blog-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter an attention-grabbing headline..."
            />
          </div>

          {/* Category Dropdown Input Area */}
          <div className="flex flex-col gap-1.5 w-full md:w-auto">
            <label className="text-sm font-semibold text-neutral-700">Category</label>
            <div ref={dropdownRef} className="relative w-full md:w-64 select-none">
              
              {/* Dropdown Trigger Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className={`
                  flex w-full items-center justify-between rounded-xl border-2 px-5 py-3
                  text-neutral-800 font-medium transition-all duration-200 backdrop-blur-sm
                  ${
                    isOpen
                      ? "border-light-beige bg-silky-white shadow-md shadow-neutral-200/50"
                      : "border-light-beige bg-white hover:bg-silky-white/30 hover:border-text-secondary"
                  }
                `}
              >
                <span className={selectedCategory === "Select Category" ? "text-neutral-400" : "text-neutral-800"}>
                  {selectedCategory}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-text-secondary"
                >
                  <ChevronDown strokeWidth={2} size={18} />
                </motion.div>
              </button>

              {/* Dropdown Menu Overlay */}
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl shadow-neutral-200/80"
                  >
                    {categories.map((category) => {
                      const isSelected = selectedCategory === category;
                      return (
                        <li key={category}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCategory(category);
                              setIsOpen(false);
                            }}
                            className={`
                              flex w-full items-center rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors
                              ${
                                isSelected
                                  ? "bg-silky-white text-text-secondary"
                                  : "text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100"
                              }
                            `}
                          >
                            {category}
                          </button>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Textarea Description Body */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex justify-between items-end">
            <label htmlFor="blog-content" className="text-sm font-semibold text-neutral-700">
              Blog Content
            </label>
            <span className="text-xs text-neutral-400 italic">
              Tip: Use double line breaks for new paragraphs. Start lines with '#' for subheadings.
            </span>
          </div>
          <textarea
            id="blog-content"
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your creative thoughts here..."
            className="w-full rounded-xl border-2 border-light-beige px-5 py-3 text-neutral-800 font-medium placeholder-neutral-400 focus:outline-none focus:border-text-secondary transition-colors resize-y min-h-37.5"
          />
        </div>

        {/* Action Buttons Wrapper */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 bg-text-secondary text-white hover:bg-[#91694d] active:scale-[0.98] font-semibold rounded-xl shadow-md transition-all duration-150"
          >
            Publish Post
          </button>
        </div>

      </form>
    </>
  );
}

export default AddBlogs;
