import Image from "next/image";
import { about } from "@/lib/content";
import { Reveal } from "./motion/reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={about.image.src} alt={about.image.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-xs text-mist">
              <span>{about.image.caption}</span>
              <span className="shrink-0">Photo via Unsplash</span>
            </figcaption>
          </figure>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <Reveal>
            <h2 className="text-sm tracking-wide text-mist">Who we are</h2>
            <p className="display mt-8 text-[clamp(1.75rem,3.4vw,3.5rem)]">
              We are a small team with unreasonable attention to detail.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-12 max-w-md">
            <p className="leading-relaxed">
              Senior people close to the problem, close to the result. No bloated decks, no handoffs for the sake of it.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
              {about.roles.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
