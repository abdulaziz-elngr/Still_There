import type { Equipment } from "@/types";
import { sampleTimeline } from "./timeline";
// SAMPLE DATA — add a new machine by appending an entry here.
const s = "SAMPLE DATA";
const story = { identity: s, mission: s, journey: s, finalMoment: s, today: s, legacy: s };
export const equipment: Equipment[] = [
  { id: "sample-lander", name: "Sample Lander", planet: "moon", missionId: "sample-moon-mission", kind: "lander", description: s, status: "sample", story, timeline: sampleTimeline,
    location: { id: "sample-loc-moon", name: "Sample Site", planet: "moon", lat: 0, lon: 0 } },
  { id: "sample-rover", name: "Sample Rover", planet: "mars", missionId: "sample-mars-mission", kind: "rover", description: s, status: "sample", story, timeline: sampleTimeline,
    location: { id: "sample-loc-mars", name: "Sample Site", planet: "mars", lat: 0, lon: 0 } },
];
