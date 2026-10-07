"use client";
import { useState } from "react";
// Muted by default; audio only starts after a user click (browser autoplay rules).
export function AudioButton({ src }: { src?: string }) {
  const [on, setOn] = useState(false);
  return (
    <button type="button" aria-pressed={on} aria-label={on ? "Mute audio" : "Enable audio"} data-src={src}
      onClick={() => setOn((v) => !v)} className="fixed right-4 top-4 z-50 text-xs uppercase tracking-widest text-silver hover:text-gold">
      Sound: {on ? "on" : "off"}
    </button>
  );
}
