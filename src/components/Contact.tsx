"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contact } from "../../data/portfolio";

export const Contact = () => {
  return (
    <section className="relative overflow-hidden py-10">
      {/* 背景オーラ */}
      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-30 blur-3xl"
        animate={{
          rotate: 360,
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.h2
        className="relative mb-8 text-2xl font-bold text-gray-900"
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
              className="group relative block overflow-hidden rounded-2xl border border-white/60 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <motion.span
                className="absolute inset-0 bg-white/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{ transform: "skewX(-20deg)" }}
              />

              <div className="absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_45px_rgba(59,130,246,0.35)] transition group-hover:opacity-100" />

              <span className="relative z-10 font-medium text-gray-800">
                🐙 GitHub
              </span>
              <p className="relative z-10 mt-1 break-all text-sm text-blue-600 underline group-hover:text-blue-800">
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
              className="group relative block overflow-hidden rounded-2xl border border-white/60 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <motion.span
                className="absolute inset-0 bg-white/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{ transform: "skewX(-20deg)" }}
              />

              <div className="absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_45px_rgba(236,72,153,0.35)] transition group-hover:opacity-100" />

              <span className="relative z-10 font-medium text-gray-800">
                📧 Email
              </span>
              <p className="relative z-10 mt-1 break-all text-sm text-pink-600 underline group-hover:text-pink-800">
                {contact.email}
              </p>
            </a>
          </motion.li>
        )}
      </motion.ul>

      {/* お問い合わせフォーム導線 */}
      <motion.div
        className="relative mt-10 overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 text-center shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-pink-300/30 blur-3xl" />

        <p className="relative text-sm font-medium text-gray-500">
          Have a question?
        </p>

        <h3 className="relative mt-2 text-2xl font-bold text-gray-900">
          お問い合わせはこちら
        </h3>

        <p className="relative mt-3 text-sm leading-7 text-gray-600">
          制作のご相談・ご連絡など、お気軽にメッセージを送ってください。
        </p>

        <Link
          href="/contact"
          className="group relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-2xl"
        >
          <span className="absolute inset-0 translate-x-[-100%] bg-white/25 transition duration-500 group-hover:translate-x-[100%]" />
          <span className="relative z-10">📨 Send Message</span>
        </Link>
      </motion.div>
    </section>
  );
};