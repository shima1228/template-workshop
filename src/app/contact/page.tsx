"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase
      .from("form_requests")
      .insert([{ name, email, message }]);

if (error) {
  console.error(error);
  alert(error.message);
  return;
}

    alert("送信しました");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="mx-auto max-w-2xl">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-md">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-500">
            CONTACT
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            お問い合わせ
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            ご相談・ご質問など、お気軽にご連絡ください。
          </p>
        </div>

        <form onSubmit={submitContact} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              お名前
            </label>
            <input
              type="text"
              placeholder="山田 太郎"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 text-gray-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              メールアドレス
            </label>
            <input
              type="email"
              placeholder="sample@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 text-gray-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              お問い合わせ内容
            </label>
            <textarea
              placeholder="お問い合わせ内容を入力してください"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full resize-none rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 text-gray-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}