import { equipment } from "./equipment";
import type { Story } from "@/types";
export const stories: Story[] = equipment.map((e) => ({ equipmentId: e.id, chapters: e.story }));
