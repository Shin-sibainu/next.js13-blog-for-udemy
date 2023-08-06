"use client";

// import { deleteArticle } from "@/pages/api/articles/articles";
import { useRouter } from "next/navigation";
import React from "react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    // console.log(id);

    // await deleteArticle(id);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${API_URL}/api/${id}`, {
      method: "DELETE",
    });

    console.log(res)

    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5"
    >
      削除
    </button>
  );
};

export default DeleteButton;
