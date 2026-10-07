import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Line, Reveal } from "@/components/motion/reveal";
import { faqs, stages } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Contact — BRILLIANT",
  description: "Talk to BRILLIANT about your product. Email hello@brilliant.studio. We reply within one working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        muted="How can"
        strong="we help?"
        text="Tell us what you are building. We reply within one working day."
      />

      <section className="px-6 pb-32 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl"><ContactForm /></div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <h2 className="text-sm tracking-wide text-mist">What is next</h2>
            <p className="display mt-8 text-[clamp(1.75rem,3.4vw,3.5rem)]">Four stages of building together</p>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((s) => (
              <Reveal key={s.n}>
                <Line />
                <p className="mt-6 text-sm text-signal">{s.n}</p>
                <h3 className="display mt-2 text-[clamp(1.5rem,2.5vw,2.5rem)]">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/70">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <Reveal><h2 className="display text-[clamp(1.75rem,3vw,3rem)]">Frequently asked questions</h2></Reveal>
          <div className="mt-12">
            {faqs.map((f) => (
              <details key={f.q} className="border-t border-line py-6 last:border-b">
                <summary className="cursor-pointer list-none text-lg font-medium [&::-webkit-details-marker]:hidden">{f.q}</summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
