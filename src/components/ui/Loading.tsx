export function Loading({ label = "Receiving signal" }: { label?: string }) {
  return <p role="status" aria-live="polite" className="text-xs uppercase tracking-[0.4em] text-silver motion-safe:animate-pulse">{label}…</p>;
}
