import { EquipmentStory } from "@/components/story/EquipmentStory";
import { MiniGame } from "@/components/games/MiniGame";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { equipment } from "@/data/equipment";
export default function StoriesPage() {
  return (
    <>
      <SectionTitle index="06 / 09" label="Stories" />
      {equipment.map((e) => (<div key={e.id} id={e.id} className="mb-24"><EquipmentStory equipment={e} /><div className="mt-8"><MiniGame type="find-equipment" equipment={e} /></div></div>))}
    </>
  );
}
