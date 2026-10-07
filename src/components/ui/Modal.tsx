"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const d = ref.current; if (!d) return; if (open && !d.open) d.showModal(); if (!open && d.open) d.close(); }, [open]);
  return (
    <dialog ref={ref} onClose={onClose} aria-label={title} className="m-auto max-w-lg border border-silver/30 bg-ink p-6 text-bone backdrop:bg-black/80">
      <h2 className="mb-4 text-sm uppercase tracking-[0.4em] text-gold">{title}</h2>
      {children}
      <button type="button" onClick={onClose} className="mt-6 text-xs uppercase tracking-widest text-silver hover:text-gold">Close</button>
    </dialog>
  );
}
