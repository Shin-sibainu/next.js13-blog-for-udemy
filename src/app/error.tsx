"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4 rounded shadow-md max-w-md mx-auto">
      <h3 className="font-bold mb-2">エラー</h3>
      <p>エラーが発生しました。</p>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white mt-2 px-4 py-2 rounded hover:bg-red-500 transition ease-in-out duration-200"
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
