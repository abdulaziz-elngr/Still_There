import { PlanetScene } from "@/components/earth/PlanetScene";
import { InteractiveMap } from "@/components/map/InteractiveMap";
import { EquipmentCard } from "@/components/ui/EquipmentCard";
import { MissionCard } from "@/components/ui/MissionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { equipment } from "@/data/equipment";
import { missions } from "@/data/missions";
// Shared shell for Moon/Mars. Each team replaces its own page's section.
export function PlanetSection({ planet, index, label }: { planet: "moon" | "mars"; index: string; label: string }) {
  const items = equipment.filter((e) => e.planet === planet);
  return (
    <div>
      <SectionTitle index={index} label={label} />
      <PlanetScene planet={planet} />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {missions.filter((m) => m.planet === planet).map((m) => <MissionCard key={m.id} mission={m} />)}
        {items.map((e) => <EquipmentCard key={e.id} equipment={e} />)}
      </div>
      <div className="mt-8"><InteractiveMap planet={planet} locations={items.flatMap((e) => (e.location ? [e.location] : []))} /></div>
    </div>
  );
}
