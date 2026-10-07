import type { Equipment, StoryChapters } from "@/types";
import { StoryCard } from "@/components/ui/StoryCard";
import { Timeline } from "@/components/timeline/Timeline";
const order: [keyof StoryChapters, string][] = [["identity", "Identity"], ["mission", "Mission"], ["journey", "Journey"], ["finalMoment", "Final Moment"], ["today", "Today"], ["legacy", "Legacy"]];
export function EquipmentStory({ equipment }: { equipment: Equipment }) {
  return (
    <article>
      <h3 className="text-3xl uppercase tracking-[0.2em]">{equipment.name}</h3>
      <div className="my-8 space-y-8">{order.map(([k, label]) => <StoryCard key={k} label={label} text={equipment.story[k]} />)}</div>
      <Timeline events={equipment.timeline} />
    </article>
  );
}
