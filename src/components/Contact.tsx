"use client";

import { motion } from "framer-motion";
import { contact } from "../../data/portfolio";

export const Contact = () => {
  return (
    <section className="relative overflow-hidden py-8">
      {/* 背景オーラ */}
      <motion.div
        className="pointer-events-none absolute -top-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-30 blur-3xl"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.h2
        className="relative mb-8 text-xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      <motion.ul
        className="relative space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {contact.github && (
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-white/60 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-md transition"
            >
              {/* 流れる光 */}
              <motion.span
                className="absolute inset-0 bg-white/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{ transform: "skewX(-20deg)" }}
              />

              {/* 発光 */}
              <div className="absolute inset-0 rounded-xl opacity-0 shadow-[0_0_40px_rgba(59,130,246,0.3)] transition group-hover:opacity-100" />

              <span className="relative z-10 font-medium text-gray-800">
                🐙 GitHub
              </span>
              <p className="relative z-10 mt-1 text-sm text-blue-600 underline group-hover:text-blue-800">
                {contact.github}
              </p>
            </a>
          </motion.li>
        )}

        {contact.email && (
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a
              href={`mailto:${contact.email}`}
              className="group relative block overflow-hidden rounded-xl border border-white/60 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-md transition"
            >
              {/* 流れる光 */}
              <motion.span
                className="absolute inset-0 bg-white/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{ transform: "skewX(-20deg)" }}
              />

              {/* 発光 */}
              <div className="absolute inset-0 rounded-xl opacity-0 shadow-[0_0_40px_rgba(236,72,153,0.3)] transition group-hover:opacity-100" />

              <span className="relative z-10 font-medium text-gray-800">
                📧 Email
              </span>
              <p className="relative z-10 mt-1 text-sm text-pink-600 underline group-hover:text-pink-800">
                {contact.email}
              </p>
            </a>
          </motion.li>
        )}
      </motion.ul>
    </section>
  );
};