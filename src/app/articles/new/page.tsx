"use client";

// import { createArticle } from "@/pages/api/articles/articles";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateArticle = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // await createArticle(id, title, content);
    const newArtilce = await fetch(`${API_URL}/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content }),
    });

    // console.log("new article");
    // console.log(newArtilce);

    setLoading(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">Create Article</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 p-6 rounded shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            URL
          </label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            本文
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`py-2 px-4 border rounded-md ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-400 hover:bg-orange-500"
          } text-white font-semibold focus:outline-none`}
          disabled={loading}
        >
          作成
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
