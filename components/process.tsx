"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/content";

const circles = [[85, 215], [100, 200], [115, 185], [130, 170], [150, 150]];

function Capsule({ active }: { active: number }) {
  const [l, r] = circles[active] ?? circles[0];
  const spring = { type: "spring" as const, stiffness: 80, damping: 18 };
  return (
    <svg viewBox="0 0 300 140" aria-hidden className="w-full max-w-sm">
      <rect x="2" y="2" width="296" height="136" rx="68" fill="none" stroke="#FF6B2C" strokeWidth="1.5" />
      <motion.circle cy="70" r="48" fill="none" stroke="#FF6B2C" strokeWidth="1.5" initial={{ cx: l }} animate={{ cx: l }} transition={spring} />
      <motion.circle cy="70" r="48" fill="none" stroke="#FF6B2C" strokeWidth="1.5" initial={{ cx: r }} animate={{ cx: r }} transition={spring} />
    </svg>
  );
}

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const marker = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(processSteps.length - 1, Math.max(0, Math.floor(v * processSteps.length))));
  });

  const pinned = !reduce;

  return (
    <section
      id="process"
      ref={ref}
      className="relative px-3 md:px-6"
      style={pinned ? { height: `${processSteps.length * 90 + 40}svh` } : undefined}
    >
      <div className={pinned ? "sticky top-3 h-[calc(100svh-1.5rem)]" : ""}>
        <div className="flex h-full min-h-[34rem] flex-col rounded-2xl bg-ink p-6 text-paper md:p-12">
          <h2 className="inline-block self-start border border-white/20 px-3 py-1 text-[11px] font-normal uppercase tracking-widest text-mist">
            How we work
          </h2>
          <div className="mt-8 grid flex-1 grid-cols-[1.5rem_1fr] gap-6 md:grid-cols-[3rem_1fr_24rem]">
            <div aria-hidden className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15" />
              <motion.span style={{ top: marker }} className="absolute left-1/2 size-2.5 -translate-x-1/2 bg-signal" />
            </div>
            <ol className="flex flex-col justify-center gap-1">
              {processSteps.map((s, i) => {
                const on = !pinned || i === active;
                return (
                  <li key={s.n} className={`transition-colors duration-500 ${on ? "text-paper" : "text-white/25"}`}>
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm">{s.n}</span>
                      <h3 className="display text-[clamp(2rem,4vw,4rem)]">{s.title}</h3>
                    </div>
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.p
                          key="desc"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="ml-9 max-w-sm overflow-hidden text-sm leading-relaxed text-mist"
                        >
                          {s.text}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
            <div className="hidden items-center justify-center md:flex">
              <Capsule active={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
