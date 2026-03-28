"use client";

import type { Metadata } from "next";
import "./globals.css";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "ポートフォリオ | coen エンジニアコミュニティ",
  description:
    "coen エンジニアコミュニティ ワークショップで作成したポートフォリオ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className="relative min-h-screen overflow-x-hidden text-gray-800">
        {/* 🌈 背景グラデーション（メイン） */}
        <motion.div
          className="pointer-events-none fixed inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(34,197,94,0.2), transparent 40%)",
              "radial-gradient(circle at 30% 40%, rgba(236,72,153,0.25), transparent 40%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.25), transparent 40%), radial-gradient(circle at 40% 70%, rgba(34,197,94,0.2), transparent 40%)",
              "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(34,197,94,0.2), transparent 40%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 🌟 うっすらノイズ */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* ヘッダー */}
        <header className="bg-white/70 backdrop-blur-md shadow-sm">
          <div className="mx-auto max-w-4xl px-4 py-4">
            <h1 className="text-lg font-bold text-gray-700">
              My Portfolio
            </h1>
          </div>
        </header>

        {/* メイン */}
        <main className="mx-auto max-w-4xl px-4 py-10">
          {children}
        </main>

        {/* フッター */}
        <footer className="border-t bg-white/70 py-6 text-center text-sm text-gray-500 backdrop-blur-md">
          &copy; {new Date().getFullYear()} coen エンジニアコミュニティ
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;