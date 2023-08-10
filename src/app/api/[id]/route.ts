import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

// GET specific post
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   console.log("Incoming request query:", req.query);

//   if (!req.query || typeof req.query.id === "undefined") {
//     console.error("Error: ID is missing in the request.");
//     return res.status(400).json({ error: "ID is required" });
//   }

//   const { id } = req.query;

//   const { data, error } = await supabase
//     .from("posts")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error("Supabase error:", error);
//     return res.status(500).json({ error: error.message });
//   }

//   if (!data) {
//     console.error("Error: Data not found for ID:", id);
//     return res.status(404).json({ error: "Not found" });
//   }

//   console.log("Successful response data:", data);
//   return res.status(200).json(data);
// }

export async function GET(req: Request, res: Response) {
  // console.log("SINGLE GET");
  // console.log(req.url);
  const id = req.url?.split("/api/")[1];
  // console.log(id);

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return NextResponse.json(error);
  if (!data) {
    notFound();
  }

  return NextResponse.json(data);
}

export async function DELETE(req: Request, res: Response) {
  const id = req.url?.split("/api/")[1];

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) return NextResponse.json(error);

  return NextResponse.json({ message: "Deleted successfully" });
}

// POST handler
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { id, title, content } = req.body;

  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, created_at: new Date().toISOString() }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return NextResponse.json(data);
}
