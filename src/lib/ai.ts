// Server-only AI layer. Never import into client components.
export interface StoryAiRequest { equipmentId: string; question: string }
export interface StoryAiResponse { answer: string }
export async function askStoryAi(req: StoryAiRequest): Promise<StoryAiResponse> {
  if (!process.env.AI_API_KEY) throw new Error("AI_API_KEY is not set");
  // TODO: load verified equipment data, build a grounded prompt, call the model; answer only from that data.
  throw new Error(`AI provider not implemented (equipment: ${req.equipmentId})`);
}
