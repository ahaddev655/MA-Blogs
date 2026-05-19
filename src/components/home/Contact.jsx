import { Mail, MapPin, Phone } from "lucide-react";
import InputItem from "./../InputItem";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-start justify-between gap-5 md:flex-row flex-col">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
          className="bg-white md:w-md p-6 w-full h-auto rounded-xl border border-silky-white shadow-lg space-y-3"
        >
          <div>
            <h1 className="text-lg font-semibold text-[#A97E60]">
              Contact Information
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-muted-beige" />
            <span className="text-neutral-500 font-medium text-sm">
              ahad.dev.eng@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-muted-beige" />
            <span className="text-neutral-500 font-medium text-sm">
              +923165837272
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-muted-beige" />
            <span className="text-neutral-500 font-medium text-sm">
              Islamabad, Pakistan
            </span>
          </div>
        </motion.div>
        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
          className="bg-white p-6 w-full rounded-xl border border-silky-white shadow-lg space-y-3"
        >
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-semibold text-[#A97E60]">
              Contact Us
            </h1>
            <div className="h-0.5 w-12 bg-light-beige my-1 rounded-full opacity-60 mx-auto" />
            <form className="mt-2 space-y-4">
              <div className="flex items-center justify-center gap-3 w-full md:flex-row flex-col">
                <div className="relative w-full">
                  <InputItem
                    label={"Full Name"}
                    name={"name"}
                    id={"name"}
                    type={"text"}
                  />
                </div>
                <div className="relative w-full">
                  <InputItem
                    label={"Email"}
                    name={"email"}
                    id={"email"}
                    type={"email"}
                  />
                </div>
              </div>
              <div className="relative w-full">
                <InputItem
                  label={"Subject"}
                  name={"subject"}
                  id={"subject"}
                  type={"text"}
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  placeholder=" "
                  rows={6}
                  className="block w-full px-4 pt-4 text-gray-900 transition-all bg-transparent border-2 border-silky-white appearance-none rounded-xl focus:outline-none focus:ring-0 focus:border-light-beige peer placeholder-transparent resize-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-gray-400 duration-200 transform z-10 origin-left left-3 bg-white px-1.5 pointer-events-none text-sm font-medium top-4 -translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:scale-85 peer-focus:text-light-beige peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-85 peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Your Message
                </label>
              </div>
              <button className="group relative z-10 px-6 py-2.5 sm:text-lg font-semibold border-2 rounded-[34px] bg-transparent overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-100 text-light-beige border-light-beige hover:text-[#1c1917] hover:shadow-[0_0_20px_rgba(201,181,156,0.4)]">
                <span className="absolute inset-0 m-auto w-12 h-12 rounded-full scale-0 z-0 bg-light-beige transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[5]"></span>
                <span className="relative z-10">Submit Message</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
