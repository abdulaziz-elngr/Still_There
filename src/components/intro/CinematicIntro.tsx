import { ExploreButton } from "@/components/ui/ExploreButton";
const lines = ["I was built to explore.", "I was sent millions of miles away.", "I completed my mission.", "And then...", "I WAS LEFT BEHIND."];
export function CinematicIntro() {
  return (
    <section className="flex min-h-[80dvh] flex-col items-center justify-center gap-6 text-center">
      {lines.map((l, i) => (
        <p key={l} className={`reveal ${i === 4 ? "text-2xl tracking-[0.3em] text-gold" : "text-silver"}`} style={{ animationDelay: `${i * 1.8}s` }}>{l}</p>
      ))}
      <div className="reveal mt-10" style={{ animationDelay: `${lines.length * 1.8}s` }}>
        <h1 className="text-5xl uppercase tracking-[0.4em] md:text-7xl">Still There</h1>
        <p className="mt-3 text-silver">The machines we left behind on other worlds.</p>
        <div className="mt-8"><ExploreButton href="#earth" /></div>
      </div>
    </section>
  );
}
