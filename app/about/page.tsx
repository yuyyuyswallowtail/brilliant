import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Quotes } from "@/components/quotes";
import { ClosingCta } from "@/components/closing-cta";
import { Line, Reveal } from "@/components/motion/reveal";
import { about } from "@/lib/content";
import { growth, life, roles, team, teamQuotes, thrive, values } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Who we are — BRILLIANT",
  description: "Meet the senior designers, engineers and product thinkers behind BRILLIANT, a small digital product studio.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        muted="Precision. Candour."
        strong="Care."
        text="We are technical, thoughtful and human first. Hopefully you can tell from the work, and from meeting us."
      />

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={about.image.src} alt={about.image.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-xs text-mist">{about.image.caption} Photo via Unsplash.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 md:pt-24">
            <p className="display text-[clamp(1.75rem,3.2vw,3.2rem)]">
              A boutique studio of senior designers, engineers and product thinkers, who enjoy execution more than decks and reports.
            </p>
            <p className="mt-8 max-w-md leading-relaxed text-ink/70">
              We build web and mobile products, AI and automation, and creative technology for clients around the world, and we keep the team small on purpose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><h2 className="text-sm tracking-wide text-mist">Our values</h2></Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {values.map((v) => (
              <Reveal key={v.title}>
                <Line />
                <h3 className="display mt-6 text-[clamp(1.5rem,2.5vw,2.5rem)]">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/70">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><h2 className="display text-[clamp(2.25rem,5vw,5rem)]">Life at BRILLIANT</h2></Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {life.map((l) => (
              <Reveal key={l.title}>
                <Line />
                <h3 className="mt-6 text-lg font-medium">{l.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{l.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><h2 className="text-sm tracking-wide text-mist">Our present and future</h2></Reveal>
          <div className="mt-12">
            {team.map((m) => (
              <Reveal key={m.name}>
                <Line />
                <div className="grid gap-4 py-10 md:grid-cols-12">
                  <h3 className="display text-[clamp(1.5rem,2.8vw,2.75rem)] md:col-span-5">{m.name}</h3>
                  <p className="text-sm text-mist md:col-span-2 md:pt-3">{m.role}</p>
                  <p className="leading-relaxed md:col-span-4 md:col-start-9">{m.bio}</p>
                </div>
              </Reveal>
            ))}
            <Line />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><h2 className="text-sm tracking-wide text-mist">Open roles</h2></Reveal>
          <div className="mt-12">
            {roles.map((r) => (
              <details key={r.title} className="group border-t border-line py-8 last:border-b">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="display text-[clamp(1.375rem,2.4vw,2.4rem)]">{r.title}</span>
                  <span className="shrink-0 text-sm text-mist">{r.mode}</span>
                </summary>
                <div className="mt-6 max-w-2xl">
                  <p className="leading-relaxed">{r.intro}</p>
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-ink/70">
                    {r.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <Link href="/contact" className="mt-8 inline-block underline underline-offset-4 hover:text-signal">Apply now →</Link>
                </div>
              </details>
            ))}
          </div>
          <Reveal className="mt-16">
            <h3 className="text-sm tracking-wide text-mist">Growth opportunities include</h3>
            <ul className="mt-6 space-y-2">
              {growth.map((g) => <li key={g} className="display text-[clamp(1.25rem,2.2vw,2rem)]">{g}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <Quotes title="What the team says" items={teamQuotes} />

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><h2 className="display text-[clamp(1.75rem,3.4vw,3.5rem)]">You will thrive here if you want:</h2></Reveal>
          <ul className="mt-12 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {thrive.map((t) => <li key={t} className="border-t border-line pt-4 text-lg">{t}</li>)}
          </ul>
        </div>
      </section>

      <ClosingCta title={<>Interested in<br />joining the team?</>} label="Send us a hello" href="/contact" />
    </>
  );
}
