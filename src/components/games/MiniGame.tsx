import type { Equipment, GameType } from "@/types";
// Independent from the app: games receive data via props only.
export function MiniGame({ type, equipment }: { type: GameType; equipment: Equipment }) {
  return <div className="border border-silver/20 p-6 text-silver">Mini game placeholder: {type} · {equipment.name}</div>;
}
