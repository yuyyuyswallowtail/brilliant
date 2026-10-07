"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/content";

const fmt = (v: number, suffix: string) => String(Math.round(v)).padStart(2, "0") + suffix;

function Count({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduce) {
      el.textContent = fmt(to, suffix);
      return;
    }
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => { el.textContent = fmt(v, suffix); } });
    return () => c.stop();
  }, [inView, reduce, to, suffix]);

  return <span ref={ref}>{fmt(0, suffix)}</span>;
}

export function Stats() {
  return (
    <section aria-label="Studio in numbers" className="px-6 py-32 md:px-12 lg:px-24">
      <dl className="mx-auto grid max-w-[1440px] gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="mt-3 text-sm text-mist">{s.label}</dt>
            <dd className="display text-[clamp(2.75rem,5.5vw,5.5rem)]"><Count to={s.to} suffix={s.suffix} /></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
