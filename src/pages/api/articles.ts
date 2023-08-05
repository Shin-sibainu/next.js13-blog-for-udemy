import { Article } from "@/app/types";
import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {}

// const baseUrl = "http://localhost:3001";

// export const getAllArticles = async (): Promise<Article[]> => {
//   const res = await fetch(`${baseUrl}/posts`, { cache: "no-store" }); //getserversideprops

//   if (!res.ok) {
//     throw new Error("Faild to fetch articles");
//   }

//   await new Promise((resolve) => setTimeout(resolve, 1500));

//   const articles = await res.json();
//   return articles;
// };

// export const getDetailArticle = async (id: string): Promise<Article> => {
//   const res = await fetch(`${baseUrl}/posts/${id}`, { cache: "no-store" }); //getserversideprops

//   if (res.status === 404) {
//     notFound();
//   }

//   if (!res.ok) {
//     throw new Error("Faild to fetch article");
//   }

//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const article = await res.json();
//   return article;
// };

// export const createArticle = async (
//   id: string,
//   title: string,
//   content: string
// ): Promise<Article> => {
//   // 現在の日時を取得します。これはUTCの日時です。
//   const currentDatetime = new Date().toISOString();
//   const res = await fetch(`${baseUrl}/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
//   });

//   if (!res.ok) {
//     throw new Error("Faild to fetch article");
//   }

//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const newArticle = await res.json();
//   return newArticle;
// };

// export const deleteArticle = async (id: string): Promise<Article> => {
//   // 現在の日時を取得します。これはUTCの日時です。
//   const res = await fetch(`${baseUrl}/posts/${id}`, {
//     method: "DELETE",
//   });

//   if (!res.ok) {
//     throw new Error("Faild to fetch article");
//   }

//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const deleteArticle = await res.json();
//   return deleteArticle;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { data, error } = await supabase.from("posts").select("*");

//   if (error) {
//     return res.status(500).json({ error: error.message });
//   }

//   res.status(200).json(data);
// }

// // すべての記事を取得
// export const getAllArticles = async (): Promise<Article[]> => {
//   let { data: posts, error } = await supabase.from("posts").select("*");

//   if (error) throw error;
//   return posts!;
// };

// // 特定の記事を取得
// export const getDetailArticle = async (id: string): Promise<Article> => {
//   const { data, error } = await supabase
//     .from("posts")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) throw error;
//   if (!data) throw new Error("Not found");
//   return data;
// };
// // 記事を作成
// export const createArticle = async (
//   id: string,
//   title: string,
//   content: string
// ): Promise<Article> => {
//   const { data, error } = await supabase
//     .from("posts")
//     .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

//   if (error) throw error;
//   return data![0];
// };

// // 記事を削除
// export const deleteArticle = async (id: string): Promise<void> => {
//   const { error } = await supabase.from("posts").delete().eq("id", id);

//   if (error) throw error;
// };
