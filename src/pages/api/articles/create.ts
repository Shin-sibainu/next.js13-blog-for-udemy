import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { id, title, content } = req.body;

  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, created_at: new Date().toISOString() }]);

  console.log(data, error);
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data![0]);
}
