"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "../../data/portfolio";

const particles = [
  { x: 0, y: -95, color: "bg-pink-500" },
  { x: 28, y: -88, color: "bg-yellow-400" },
  { x: 58, y: -72, color: "bg-sky-500" },
  { x: 82, y: -42, color: "bg-violet-500" },
  { x: 95, y: 0, color: "bg-emerald-500" },
  { x: 82, y: 42, color: "bg-red-500" },
  { x: 58, y: 72, color: "bg-orange-500" },
  { x: 28, y: 88, color: "bg-fuchsia-500" },
  { x: 0, y: 95, color: "bg-cyan-500" },
  { x: -28, y: 88, color: "bg-lime-500" },
  { x: -58, y: 72, color: "bg-rose-500" },
  { x: -82, y: 42, color: "bg-amber-500" },
  { x: -95, y: 0, color: "bg-blue-500" },
  { x: -82, y: -42, color: "bg-purple-500" },
  { x: -58, y: -72, color: "bg-teal-500" },
  { x: -28, y: -88, color: "bg-orange-400" },

  { x: 18, y: -60, color: "bg-pink-400" },
  { x: 52, y: -30, color: "bg-yellow-500" },
  { x: 60, y: 18, color: "bg-sky-400" },
  { x: 38, y: 52, color: "bg-violet-400" },
  { x: 0, y: 62, color: "bg-emerald-400" },
  { x: -38, y: 52, color: "bg-red-400" },
  { x: -60, y: 18, color: "bg-orange-400" },
  { x: -52, y: -30, color: "bg-fuchsia-400" },
  { x: -18, y: -60, color: "bg-cyan-400" },
  { x: 42, y: -55, color: "bg-lime-400" },
  { x: 68, y: 34, color: "bg-rose-400" },
  { x: -42, y: 55, color: "bg-amber-400" },
];

export const Profile = () => {
  return (
    <motion.section
      className="flex flex-col items-center gap-8 sm:flex-row"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative flex items-center justify-center">
        {/* 外側の淡い発光 */}
        <motion.div
          className="absolute h-56 w-56 rounded-full bg-pink-400/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.9, 0.25], scale: [0.4, 1.2, 1.35] }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.8, 0.2], scale: [0.5, 1.15, 1.3] }}
          transition={{ duration: 1.5, delay: 0.08, ease: "easeOut" }}
        />
        <motion.div
          className="absolute h-44 w-44 rounded-full bg-yellow-300/25 blur-2xl"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: [0, 0.9, 0.15], scale: [0.3, 1.05, 1.2] }}
          transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        />

        {/* 中央のフラッシュ */}
        <motion.div
          className="absolute h-10 w-10 rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.95)]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 2.4, 0] }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        />

        {/* 波紋リング */}
        <motion.div
          className="absolute h-36 w-36 rounded-full border-4 border-pink-500/80"
          initial={{ opacity: 0.9, scale: 0.2 }}
          animate={{ opacity: [0.9, 0], scale: [0.2, 2.1] }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute h-36 w-36 rounded-full border-4 border-cyan-500/80"
          initial={{ opacity: 0.9, scale: 0.2 }}
          animate={{ opacity: [0.85, 0], scale: [0.2, 2.45] }}
          transition={{ duration: 1.25, delay: 0.32, ease: "easeOut" }}
        />
        <motion.div
          className="absolute h-36 w-36 rounded-full border-4 border-yellow-400/80"
          initial={{ opacity: 0.85, scale: 0.2 }}
          animate={{ opacity: [0.8, 0], scale: [0.2, 2.75] }}
          transition={{ duration: 1.4, delay: 0.45, ease: "easeOut" }}
        />

        {/* 花火パーティクル */}
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className={`absolute rounded-full ${particle.color} shadow-[0_0_16px_rgba(255,255,255,0.45)]`}
            style={{
              width: index % 3 === 0 ? 10 : index % 2 === 0 ? 8 : 6,
              height: index % 3 === 0 ? 10 : index % 2 === 0 ? 8 : 6,
            }}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.4, 1, 0.2],
              x: particle.x,
              y: particle.y,
            }}
            transition={{
              duration: 1.3,
              delay: 0.28 + index * 0.02,
              ease: "easeOut",
            }}
          />
        ))}

        {/* キラキラ追加 */}
        {[...Array(10)].map((_, index) => {
          const sparklePositions = [
            { x: 0, y: -118 },
            { x: 76, y: -86 },
            { x: 116, y: -6 },
            { x: 86, y: 78 },
            { x: 0, y: 120 },
            { x: -90, y: 82 },
            { x: -118, y: 0 },
            { x: -82, y: -86 },
            { x: 104, y: 52 },
            { x: -104, y: 52 },
          ];

          return (
            <motion.span
              key={`sparkle-${index}`}
              className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.8, 0],
                x: sparklePositions[index].x,
                y: sparklePositions[index].y,
              }}
              transition={{
                duration: 0.9,
                delay: 0.5 + index * 0.05,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* プロフィール画像 */}
        <motion.div
          className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-2xl"
          initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          whileHover={{
            scale: 1.08,
            rotate: 2,
            transition: { duration: 0.25 },
          }}
        >
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      <motion.div
        className="text-center sm:text-left"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          {profile.name}
        </motion.h2>

        <motion.p
          className="mt-1 text-lg font-medium text-pink-600"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          {profile.role}
        </motion.p>

        <motion.p
          className="mt-3 max-w-xl leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          {profile.bio}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};