export function StoryCard({ label, text }: { label: string; text: string }) {
  return (<div className="border-l border-gold/60 pl-4"><h4 className="text-xs uppercase tracking-[0.4em] text-gold">{label}</h4><p className="mt-2 max-w-prose text-silver">{text}</p></div>);
}
