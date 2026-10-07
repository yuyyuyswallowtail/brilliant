"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { Line, Reveal } from "./motion/reveal";

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 28 });
  const sy = useSpring(y, { stiffness: 200, damping: 28 });

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left + 40);
    y.set(e.clientY - r.top - 130);
  };

  return (
    <section id="services" ref={ref} onMouseMove={move} className="relative px-6 py-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="text-sm tracking-wide text-mist">What we do</h2></Reveal>
        <ul className="mt-16" onMouseLeave={() => setActive(null)}>
          {services.map((s, i) => (
            <li key={s.n}>
              <Line />
              <a
                href="#contact"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={`group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-3 py-8 transition-all duration-500 md:grid-cols-[6rem_1fr_20rem] md:py-10 ${
                  active !== null && active !== i ? "opacity-30" : ""
                } ${active === i ? "bg-ink/[0.04]" : ""}`}
              >
                <span className="text-sm text-mist">{s.n}</span>
                <span className="display flex origin-left items-center gap-4 text-[clamp(1.75rem,3.2vw,3.25rem)] transition-transform duration-500 group-hover:translate-x-4 group-hover:scale-[1.04] group-focus-visible:translate-x-4">
                  {s.title}
                  <ArrowUpRight className="size-[0.6em] shrink-0 text-signal opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                </span>
                <span className="col-start-2 text-sm leading-relaxed text-ink/70 md:col-start-3">{s.desc}</span>
              </a>
            </li>
          ))}
          <li><Line /></li>
        </ul>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="preview"
            className="pointer-events-none absolute left-0 top-0 z-10 hidden w-80 lg:block"
            style={{ x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="relative h-52 overflow-hidden">
              <Image src={services[active].image} alt={services[active].alt} fill sizes="320px" className="object-cover" />
            </div>
            <p className="bg-ink p-2 text-[11px] leading-snug text-paper">{services[active].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
