import type { Mission } from "@/types";
export function MissionCard({ mission }: { mission: Mission }) {
  return (<div className="border border-silver/20 p-4"><h3 className="uppercase tracking-widest">{mission.name}</h3><p className="text-silver">{mission.summary}</p></div>);
}
