import { Article } from "@/app/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {}

const baseUrl = "http://localhost:3001";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`${baseUrl}/posts`, { cache: "no-store" }); //getserversideprops
  const articles = await res.json();
  return articles;
};
