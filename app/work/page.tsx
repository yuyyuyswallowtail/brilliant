import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { DeepDives } from "@/components/deep-dives";
import { CaseList } from "@/components/case-list";
import { Stats } from "@/components/stats";
import { Quotes } from "@/components/quotes";
import { LogoMarquee } from "@/components/logo-marquee";
import { ClosingCta } from "@/components/closing-cta";
import { Reveal } from "@/components/motion/reveal";
import { testimonials, workCases } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Work — BRILLIANT",
  description: "Digital products designed and built by BRILLIANT: healthcare, finance, collaboration and interactive experiences.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        muted="Built to ship."
        strong="Proven in production."
        text="Products for teams that needed to deliver, from first sketch to steady, measurable results."
      />
      <DeepDives items={workCases.filter((c) => c.results)} />
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal><h2 className="text-sm tracking-wide text-mist">All projects</h2></Reveal>
          <div className="mt-12"><CaseList items={workCases} /></div>
        </div>
      </section>
      <Stats />
      <Quotes title="Lean. Senior. No fluff." items={testimonials} />
      <LogoMarquee />
      <ClosingCta title={<>Ready to build<br />something that ships?</>} label="Start the conversation" href="/contact" />
    </>
  );
}
