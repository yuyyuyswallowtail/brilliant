import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Reveal } from "./motion/reveal";

export function ServicesCloser() {
  return (
    <section className="px-6 pb-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Link
            href="/contact"
            className="group flex flex-wrap items-center justify-between gap-4 bg-signal px-6 py-8 text-ink transition-transform duration-500 hover:translate-x-2 md:px-10"
          >
            <span className="display text-[clamp(2rem,4vw,4rem)]">Customized</span>
            <span className="text-sm">Shaped around what your product needs →</span>
          </Link>
        </Reveal>
        <Reveal className="mx-auto mt-24 max-w-3xl text-center">
          <p className="display text-[clamp(1.75rem,3.5vw,3.5rem)]">
            We don’t offer a fixed stack. We adapt to what your product needs: fast or foundational, frontend or backend.
          </p>
          <a
            href="#process"
            aria-label="Scroll to how we work"
            className="mt-10 inline-grid size-12 place-items-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <ArrowDown size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
