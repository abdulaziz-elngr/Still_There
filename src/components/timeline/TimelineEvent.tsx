import type { TimelineEvent as Event } from "@/types";
export function TimelineEvent({ event }: { event: Event }) {
  return (
    <li className="relative mb-8">
      <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-gold" />
      <p className="text-[10px] uppercase tracking-[0.3em] text-silver">{event.date} · {event.kind.replace("-", " ")}</p>
      <h4 className="text-lg text-bone">{event.title}</h4>
      <p className="text-silver">{event.description}</p>
    </li>
  );
}
