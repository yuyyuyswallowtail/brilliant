import Image from "next/image";
import type { Case } from "@/lib/pages";
import { Line, Reveal } from "./motion/reveal";

export function DeepDives({ items }: { items: Case[] }) {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="text-sm tracking-wide text-mist">Deep dives</h2>
          <p className="display mt-8 max-w-4xl text-[clamp(1.75rem,3.4vw,3.5rem)]">
            Some stories deserve the full version.
          </p>
        </Reveal>
        <div className="mt-20 space-y-24">
          {items.map((c, i) => (
            <Reveal key={c.title}>
              <Line />
              <div className="mt-10 grid gap-10 md:grid-cols-12">
                {c.image && (
                  <div className={`md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
                    </div>
                    <p className="mt-3 text-xs text-mist">{c.image.caption} Photo via Unsplash.</p>
                  </div>
                )}
                <div className={`md:col-span-6 ${i % 2 ? "md:order-1" : "md:col-start-7"}`}>
                  <p className="text-sm text-mist">{c.category}</p>
                  <h3 className="display mt-2 text-[clamp(2rem,4.5vw,4.5rem)]">{c.title}</h3>
                  <p className="mt-6 max-w-lg leading-relaxed">{c.did}</p>
                  <dl className="mt-12 grid grid-cols-3 gap-6">
                    {c.results?.map((r) => (
                      <div key={r.label} className="flex flex-col-reverse">
                        <dt className="mt-2 text-xs text-mist">{r.label}</dt>
                        <dd className="display text-[clamp(2rem,4vw,4rem)]">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
