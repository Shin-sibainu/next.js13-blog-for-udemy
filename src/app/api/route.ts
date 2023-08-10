import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "GET") {
//     return res.status(405).end();
//   }

//   const { data, error } = await supabase.from("posts").select("*");

//   if (error) {
//     return res.status(500).json({ error: error.message });
//   }

//   // return NextResponse.json(data);
//   return res.status(200).json(data);
// }

export async function GET(req: Request, res: Response) {
  // console.log("ALL Blogs GET");

  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}

export async function POST(req: Request, res: Response) {
  console.log("POST");
  const { id, title, content } = await req.json();
  console.log(id, title, content);

  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, created_at: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}

// GET specific post
// export async function GET_POST(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;

//   const { data, error } = await supabase
//     .from("posts")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) return res.status(500).json({ error: error.message });
//   if (!data) return res.status(404).json({ error: "Not found" });

//   return NextResponse.json(data);

//   // return res.status(200).json(data);
// }

// DELETE handler
// export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;

//   const { error } = await supabase.from("posts").delete().eq("id", id);

//   if (error) return res.status(500).json({ error: error.message });

//   return res.status(200).json({ message: "Deleted successfully" });
// }

// // POST handler
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   const { id, title, content } = req.body;

//   const { data, error } = await supabase
//     .from("posts")
//     .insert([{ id, title, content, created_at: new Date().toISOString() }]);

//   if (error) {
//     return res.status(500).json({ error: error.message });
//   }

//   return res.status(200).json(data);
// }
