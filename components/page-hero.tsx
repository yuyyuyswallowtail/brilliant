import { Reveal } from "./motion/reveal";

export function PageHero({ eyebrow, muted, strong, text }: { eyebrow: string; muted: string; strong: string; text: string }) {
  return (
    <section className="px-6 pb-24 pt-44 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal><p className="mb-8 text-sm tracking-wide text-mist">{eyebrow}</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-[clamp(3rem,14vw,6rem)] md:text-[clamp(3.5rem,6vw,7rem)]">
              <span className="block text-mist">{muted}</span>
              <span className="block">{strong}</span>
            </h1>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="md:col-span-3 md:col-start-10">
          <p className="max-w-xs leading-relaxed">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
