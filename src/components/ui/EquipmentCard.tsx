import Link from "next/link";
import type { Equipment } from "@/types";
export function EquipmentCard({ equipment }: { equipment: Equipment }) {
  return (<Link href={`/stories#${equipment.id}`} className="block border border-silver/20 p-4 hover:border-gold"><h3 className="uppercase tracking-widest">{equipment.name}</h3><p className="text-silver">{equipment.description}</p></Link>);
}
