// Integration point for a future full-space 3D scene (e.g. Earth → Moon transit). Keep 3D behind this component.
export function SpaceScene({ label = "Space scene placeholder" }: { label?: string }) {
  return <div role="img" aria-label={label} className="aspect-video w-full border border-silver/20 bg-void" />;
}
