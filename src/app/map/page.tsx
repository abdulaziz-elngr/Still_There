import { InteractiveMap } from "@/components/map/InteractiveMap";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { equipment } from "@/data/equipment";
export default function MapPage() {
  const locations = equipment.flatMap((e) => (e.location ? [e.location] : []));
  return (<><SectionTitle index="04 / 09" label="Map" /><InteractiveMap planet="moon" locations={locations} /></>);
}
