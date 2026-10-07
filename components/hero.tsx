"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section ref={ref} id="top" className="relative flex min-h-[72svh] items-end px-6 pb-14 pt-40 md:min-h-[68svh] md:px-12 lg:px-24">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 md:grid-cols-12 md:items-end">
        <motion.h1 style={{ y }} className="display text-[clamp(3rem,14vw,6rem)] md:col-span-7 md:text-[clamp(3.5rem,6vw,7rem)]">
          <motion.span className="block text-mist" {...rise(0.2)}>Complex ideas,</motion.span>
          <motion.span className="block" {...rise(0.45)}>made tangible.</motion.span>
        </motion.h1>
        <motion.p
          className="max-w-md text-lg leading-snug md:col-span-4 md:col-start-8 md:text-xl md:pb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          We design and build digital products for ambitious teams that want clarity, speed and substance.
        </motion.p>
      </div>
    </section>
  );
}
