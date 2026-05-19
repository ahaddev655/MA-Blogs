import { Mail, MapPin, Phone } from "lucide-react";
import InputItem from "./../InputItem";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-stretch justify-center gap-6 lg:flex-row flex-col w-full">
        {/* Left Side: Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
          className="bg-white lg:max-w-sm w-full p-8 rounded-2xl border border-silky-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center space-y-6 h-fit"
        >
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#A97E60]">
              Contact Information
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Reach out directly and we will get back to you shortly.
            </p>
          </div>

          <div className="space-y-4">
            {/* Mail Row */}
            <div className="flex items-center gap-3 group">
              <div className="p-2.5 rounded-xl bg-muted-beige/10 text-muted-beige transition-colors duration-300 group-hover:bg-muted-beige group-hover:text-white">
                <Mail size={18} />
              </div>
              <span className="text-neutral-600 font-medium text-sm transition-colors duration-300 group-hover:text-neutral-900 break-all">
                ahad.dev.eng@gmail.com
              </span>
            </div>

            {/* Phone Row */}
            <div className="flex items-center gap-3 group">
              <div className="p-2.5 rounded-xl bg-muted-beige/10 text-muted-beige transition-colors duration-300 group-hover:bg-muted-beige group-hover:text-white">
                <Phone size={18} />
              </div>
              <span className="text-neutral-600 font-medium text-sm transition-colors duration-300 group-hover:text-neutral-900">
                +923165837272
              </span>
            </div>

            {/* MapPin Row */}
            <div className="flex items-center gap-3 group">
              <div className="p-2.5 rounded-xl bg-muted-beige/10 text-muted-beige transition-colors duration-300 group-hover:bg-muted-beige group-hover:text-white">
                <MapPin size={18} />
              </div>
              <span className="text-neutral-600 font-medium text-sm transition-colors duration-300 group-hover:text-neutral-900">
                Islamabad, Pakistan
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
          className="bg-white p-8 w-full rounded-2xl border border-silky-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#A97E60]">
              Contact Us
            </h1>
            <div className="h-0.75 w-12 bg-linear-to-r from-transparent via-light-beige to-transparent my-2 rounded-full shadow-[0_0_8px_rgba(201,181,156,0.6)] mx-auto" />
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Responsive Row wrapper */}
            <div className="flex items-center justify-between gap-4 md:flex-row flex-col">
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

            {/* Enhanced Custom Textarea styling */}
            <div className="relative w-full">
              <textarea
                name="message"
                id="message"
                placeholder=" "
                rows={5}
                className="block w-full px-4 pt-4 text-sm text-neutral-800 transition-all bg-transparent border-2 border-neutral-200/80 appearance-none rounded-xl focus:outline-none focus:ring-0 focus:border-light-beige peer placeholder-transparent resize-none leading-relaxed"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-neutral-400 duration-200 transform z-10 origin-left left-3 bg-white px-1.5 pointer-events-none text-sm font-medium top-4 -translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-focus:top-0 peer-focus:scale-85 peer-focus:text-light-beige peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-85 peer-[:not(:placeholder-shown)]:text-neutral-500"
              >
                Your Message
              </label>
            </div>

            {/* Action Button align structure */}
            <div className="text-start pt-2">
              <button className="group relative w-full sm:w-auto px-8 py-3 text-base font-semibold border-2 rounded-full bg-transparent overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-98 text-light-beige border-light-beige/90 hover:text-[#1c1917] hover:border-light-beige hover:shadow-[0_0_15px_rgba(201,181,156,0.3)] cursor-pointer">
                <span className="absolute inset-0 destruction-safe m-auto w-10 h-10 rounded-full scale-0 -z-10 bg-light-beige transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[6]"></span>
                Submit Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
