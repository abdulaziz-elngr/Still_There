import type { Planet } from "@/types";
const tone: Record<Planet, string> = { earth: "bg-earth/30", moon: "bg-silver/20", mars: "bg-mars/30" };
// Integration point: replace the body with a 3D scene (dynamic import) without changing the props.
export function PlanetScene({ planet }: { planet: Planet }) {
  return (
    <div role="img" aria-label={`${planet} scene placeholder`} className="flex aspect-video w-full items-center justify-center border border-silver/20">
      <div className={`h-32 w-32 rounded-full ${tone[planet]}`} />
    </div>
  );
}
