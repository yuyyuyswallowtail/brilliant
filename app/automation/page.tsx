import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CaseList } from "@/components/case-list";
import { ClosingCta } from "@/components/closing-cta";
import { Line, Reveal } from "@/components/motion/reveal";
import { automationCases, automationFacts, automationServices } from "@/lib/pages";

export const metadata: Metadata = {
  title: "AI & Automation — BRILLIANT",
  description: "Practical AI and automation: workflow orchestration, integrations and data pipelines, built by a senior team.",
  alternates: { canonical: "/automation" },
};

export default function AutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialists in"
        muted="AI &"
        strong="Automation."
        text="We plan, build and maintain the automation layers that let systems, and teams, work together."
      />

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="display text-[clamp(1.75rem,3vw,3rem)]">Why automation?</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
            <p className="leading-relaxed">
              In large ecosystems, communication is everything. Well-built automation reduces friction between services, systems and people, and keeps a human in the loop wherever judgement matters.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><h2 className="text-sm tracking-wide text-mist">Our services</h2></Reveal>
          <ul className="mt-12">
            {automationServices.map((s, i) => (
              <li key={s}>
                <Line />
                <div className="grid grid-cols-[3rem_1fr] gap-4 py-8">
                  <span className="text-sm text-mist">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display text-[clamp(1.5rem,2.8vw,2.75rem)]">{s}</span>
                </div>
              </li>
            ))}
            <li><Line /></li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-2">
          <Reveal>
            <h2 className="text-sm tracking-wide text-mist">How we work with you</h2>
            <p className="mt-8 max-w-md leading-relaxed">
              We start by understanding the ecosystem: what is in place, what needs to talk to what, and where the bottlenecks are. Then we map a clean, scalable architecture and build it with rigour.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-sm tracking-wide text-mist">Built for partnerships</h2>
            <ul className="mt-8 space-y-3">
              {automationFacts.map((f) => <li key={f} className="display text-[clamp(1.25rem,2.2vw,2rem)]">{f}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><h2 className="display text-[clamp(2.25rem,5vw,5rem)]">Selected work</h2></Reveal>
          <div className="mt-16"><CaseList items={automationCases} /></div>
        </div>
      </section>

      <ClosingCta title={<>Need automation<br />you can rely on?</>} label="Get started" href="/contact" />
    </>
  );
}
