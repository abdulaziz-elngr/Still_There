import { EquipmentCard } from "@/components/ui/EquipmentCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { equipment } from "@/data/equipment";
export default function ForgottenPage() {
  return (<><SectionTitle index="03 / 09" label="The Forgotten" title="SAMPLE DATA — machines that completed their missions and stayed." />
    <div className="grid gap-4 md:grid-cols-2">{equipment.map((e) => <EquipmentCard key={e.id} equipment={e} />)}</div></>);
}
