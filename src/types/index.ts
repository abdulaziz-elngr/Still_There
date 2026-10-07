export type Planet = "earth" | "moon" | "mars";
export type DataStatus = "sample" | "verified";
export interface Location { id: string; name: string; planet: Planet; lat: number; lon: number; note?: string }
export interface ScienceData { summary: string; facts: { label: string; value: string }[]; sourceUrl?: string }
export type TimelineKind = "launch" | "arrival" | "exploration" | "problem" | "final-communication" | "current-status";
export interface TimelineEvent { date: string; kind: TimelineKind; title: string; description: string }
export interface Mission { id: string; name: string; planet: Planet; agency: string; years: string; summary: string; status: DataStatus }
export interface StoryChapters { identity: string; mission: string; journey: string; finalMoment: string; today: string; legacy: string }
export interface Equipment {
  id: string; name: string; planet: Exclude<Planet, "earth">; missionId: string; description: string;
  kind: "rover" | "lander" | "orbiter" | "instrument" | "other"; story: StoryChapters;
  timeline: TimelineEvent[]; location?: Location; science?: ScienceData; status: DataStatus;
}
export type Story = { equipmentId: string; chapters: StoryChapters };
export type GameType = "find-equipment" | "mission-decisions" | "power-management" | "communication" | "exploration";
