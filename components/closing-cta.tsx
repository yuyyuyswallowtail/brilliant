import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./motion/reveal";

export function ClosingCta({ id, title, label, href }: { id?: string; title: React.ReactNode; label: string; href: string }) {
  return (
    <section id={id} className="bg-ink px-6 py-40 text-paper md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="display text-[clamp(2.5rem,6.5vw,6.5rem)]">{title}</h2>
        </Reveal>
        <Link href={href} data-cursor="Go →" className="group mt-20 inline-flex items-center gap-6 text-2xl md:text-4xl">
          <span className="transition-transform duration-500 group-hover:translate-x-2">{label}</span>
          <span className="grid size-20 place-items-center rounded-full bg-signal text-ink transition-transform duration-500 group-hover:scale-110">
            <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}
