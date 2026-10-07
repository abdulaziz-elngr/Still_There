"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProgressIndicator } from "@/components/ui/ProgressIndicator";
export const STOPS = [
  { href: "/", label: "Earth" }, { href: "/moon", label: "The Moon" }, { href: "/forgotten", label: "The Forgotten" },
  { href: "/map", label: "Map" }, { href: "/mars", label: "Mars" }, { href: "/stories", label: "Stories" },
  { href: "/science", label: "Science" }, { href: "/last-signal", label: "The Last Signal" }, { href: "/final-message", label: "Final Message" },
] as const;
export function PlanetNavigation() {
  const path = usePathname();
  const i = Math.max(0, STOPS.findIndex((s) => s.href === path));
  const n = String(STOPS.length).padStart(2, "0");
  return (
    <nav aria-label="Journey" className="fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-void to-transparent px-6 pb-4 pt-8">
      <ProgressIndicator current={i + 1} total={STOPS.length} />
      <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
        <span className="text-silver">{String(i + 1).padStart(2, "0")} / {n}</span>
        <ul className="flex gap-4">
          {STOPS.map((s) => (
            <li key={s.href}><Link href={s.href} aria-current={path === s.href ? "page" : undefined}
              className={cn("hover:text-gold", path === s.href ? "text-gold" : "hidden text-silver lg:inline")}>{s.label}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
