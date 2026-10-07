import type { ReactNode } from "react";
export function DataPanel({ title, children, source }: { title: string; children: ReactNode; source?: string }) {
  return (
    <section className="border border-silver/20 bg-panel/50 p-5">
      <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold">{title}</h3>
      <div className="mt-3 text-silver">{children}</div>
      {source && <p className="mt-3 text-[10px] uppercase tracking-widest text-silver/60">Source: {source}</p>}
    </section>
  );
}
