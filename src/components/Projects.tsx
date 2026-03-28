"use client";

import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export const Projects = () => {
  return (
    <section className="relative overflow-hidden py-6">
      {/* 背景の光 */}
      <motion.div
        className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl"
        animate={{
          x: [0, 18, 0],
          y: [0, -24, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.h2
        className="relative mb-8 text-xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="relative grid gap-6 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -10,
              rotateX: 4,
              rotateY: -4,
              scale: 1.03,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative block overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* カード内の動く光 */}
            <motion.div
              className="pointer-events-none absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/30 blur-xl"
              initial={{ x: -120, opacity: 0 }}
              whileHover={{ x: 320, opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />

            {/* 背景グラデーション */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-cyan-500/10 to-violet-500/10 opacity-80 transition duration-300 group-hover:opacity-100" />

            {/* 外枠発光 */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/60" />
            <div className="absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_40px_rgba(59,130,246,0.15)] transition duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <motion.h3
                className="text-lg font-semibold text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="mt-2 text-sm leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
              >
                {project.description}
              </motion.p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.25 + index * 0.06,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    className="rounded-full border border-white/60 bg-gray-100/90 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm transition"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* 下部のアクセントライン */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-500"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};