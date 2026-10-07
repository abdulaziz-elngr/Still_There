import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";
export function Button({ className, ...p }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...p} className={cn("border border-silver/40 px-8 py-3 text-xs uppercase tracking-[0.35em] text-bone transition hover:border-gold hover:text-gold", className)} />;
}
