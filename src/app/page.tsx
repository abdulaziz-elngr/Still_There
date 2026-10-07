import { CinematicIntro } from "@/components/intro/CinematicIntro";
import { PlanetScene } from "@/components/earth/PlanetScene";
import { SectionTitle } from "@/components/ui/SectionTitle";
export default function Home() {
  return (
    <>
      <CinematicIntro />
      <section id="earth" className="py-24">
        <SectionTitle index="01 / 09" label="Earth" title="Everything you are about to see started here." />
        <PlanetScene planet="earth" />
      </section>
    </>
  );
}
