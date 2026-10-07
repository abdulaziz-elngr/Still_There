// Integration point for a 3D equipment model. Load heavy assets lazily from /public/models.
export function EquipmentModel({ equipmentId }: { equipmentId: string }) {
  return <div role="img" aria-label={`3D model placeholder for ${equipmentId}`} className="flex aspect-square w-full items-center justify-center border border-silver/20 text-xs uppercase tracking-widest text-silver">3D · {equipmentId}</div>;
}
