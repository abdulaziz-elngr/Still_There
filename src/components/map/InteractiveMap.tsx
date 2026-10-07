import type { Location, Planet } from "@/types";
// Integration point: swap for a real Moon/Mars map; keep these props.
export function InteractiveMap({ planet, locations }: { planet: Planet; locations: Location[] }) {
  return (
    <div className="border border-silver/20 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-silver">Map placeholder · {planet}</p>
      <ul className="mt-4 space-y-1 text-silver">{locations.map((l) => <li key={l.id}>{l.name} ({l.lat}, {l.lon})</li>)}</ul>
    </div>
  );
}
