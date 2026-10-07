import type { TimelineEvent as Event } from "@/types";
import { TimelineEvent } from "./TimelineEvent";
export function Timeline({ events }: { events: Event[] }) {
  return <ol className="border-l border-silver/30 pl-6">{events.map((e, i) => <TimelineEvent key={`${e.kind}-${i}`} event={e} />)}</ol>;
}
