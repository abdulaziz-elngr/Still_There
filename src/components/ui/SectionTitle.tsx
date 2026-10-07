export function SectionTitle({ index, label, title }: { index: string; label: string; title?: string }) {
  return (
    <header className="mb-8">
      <p className="text-xs tracking-[0.4em] text-silver">{index}</p>
      <h2 className="mt-1 text-2xl uppercase tracking-[0.3em] text-gold md:text-4xl">{label}</h2>
      {title && <p className="mt-3 max-w-xl text-silver">{title}</p>}
    </header>
  );
}
