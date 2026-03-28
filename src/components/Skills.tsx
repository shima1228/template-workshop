"use client";

import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

export const Skills = () => {
  return (
    <section className="relative overflow-hidden py-6">
      {/* 背景オーラ（ゆらゆら動く） */}
      <motion.div
        className="pointer-events-none absolute -top-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 opacity-30 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <h2 className="mb-8 text-xl font-bold text-gray-900">
        Skills
      </h2>

      <motion.div
        className="relative flex flex-wrap gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.15,
              y: -6,
              rotate: 2,
            }}
            className="
              relative cursor-pointer overflow-hidden
              rounded-full px-5 py-2 text-sm font-semibold text-white
              shadow-lg
              transition
            "
          >
            {/* グラデーション背景 */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-90" />

            {/* ネオン光 */}
            <span className="absolute inset-0 blur-md bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-60" />

            {/* キラキラ流れるライン */}
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2,
              }}
              style={{ transform: "skewX(-20deg)" }}
            />

            {/* テキスト */}
            <span className="relative z-10">
              {skill.name}
              <span className="ml-1 text-white/80">
                ({skill.level})
              </span>
            </span>
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};