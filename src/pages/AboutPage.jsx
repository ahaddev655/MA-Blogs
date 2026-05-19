import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  // Sample data for your blog's team/authors
  const authors = [
    {
      name: "Muhammad Ahad",
      role: "Founder & Lead Writer",
      bio: "Passionate about tech, design, and storytelling. Founded this space to share deep dives into modern web development.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Jordan Lee",
      role: "Contributing Editor",
      bio: "Word smith and coffee enthusiast. Specializes in making complex technical concepts simple and engaging for everyone.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="min-h-screen text-neutral-800">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
        className="px-6 py-20 mx-auto max-w-7xl text-center md:py-32"
      >
        <span className="text-xs font-semibold tracking-widest text-light-beige uppercase">
          Our Story
        </span>
        <h1 className="mt-3 text-4xl font-serif font-bold tracking-tight text-neutral-900 md:text-6xl">
          Crafting ideas into words.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Welcome to our digital living room. We are a collective of writers,
          developers, and creators dedicated to sharing high-quality insights on
          design, tech, and modern culture.
        </p>
      </motion.header>

      {/* Philosophy / Mission Section */}
      <section className="bg-mutet-beigege py-16 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
                      className="text-center md:text-start"
          >
            <h2 className="text-3xl font-bold text-neutral-900">
              Why we started this blog
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              In a world flooded with fast-paced, surface-level content, we
              wanted to build an oasis for long-form, thoughtful pieces. We
              believe that great ideas deserve space to breathe and time to be
              understood.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Whether you are here to learn a new technical skill or just to
              read a slow-morning essay, we hope you find something that sparks
              your curiosity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
            className="bg-light-beige h-64 w-full rounded-2xl shadow-inner flex items-center justify-center text-neutral-100 font-serif italic text-xl p-8 text-center"
          >
            "Content isn't king. Connection is."
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-neutral-900 md:text-4xl">
            Meet the Minds
          </h2>
          <p className="mt-2 text-neutral-600">
            The voices behind the articles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
          {authors.map((author, index) => (
            <motion.div
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
              key={index}
              className="flex flex-col items-center text-center p-6 bg-muted-beige/30 rounded-2xl border border-muted-beige"
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-28 h-28 rounded-full object-cover grayscale contrast-125 border-4 border-light-beige"
              />
              <h3 className="mt-4 text-xl font-bold text-neutral-900">
                {author.name}
              </h3>
              <p className="text-xs font-medium text-light-beige uppercase tracking-wider">
                {author.role}
              </p>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed max-w-xs">
                {author.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Call to Action */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
        className="border-t border-muted-beige py-12 text-center px-6"
      >
        <h3 className="text-xl font-serif font-bold text-neutral-900">
          Want to contribute?
        </h3>
        <p className="mt-2 text-sm text-neutral-600 max-w-md mx-auto">
          We are always looking for guest writers who align with our vision.
          Drop us a line if you have a story to tell.
        </p>
        <button className="mt-6 px-6 py-2.5 bg-neutral-900 text-silky-white rounded-full text-sm font-medium hover:bg-neutral-850 transition-colors duration-200">
          Get in Touch
        </button>
      </motion.footer>
    </div>
  );
}

export default AboutPage;
