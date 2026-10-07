import { NextResponse } from "next/server";
import { askStoryAi, type StoryAiRequest } from "@/lib/ai";
export async function POST(req: Request) {
  let body: Partial<StoryAiRequest>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  if (!body.equipmentId || !body.question) return NextResponse.json({ error: "equipmentId and question are required" }, { status: 400 });
  try { return NextResponse.json(await askStoryAi({ equipmentId: body.equipmentId, question: body.question })); }
  catch (e) { return NextResponse.json({ error: e instanceof Error ? e.message : "Error" }, { status: 501 }); }
}
