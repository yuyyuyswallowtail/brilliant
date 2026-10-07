"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [label, setLabel] = useState<string | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    document.body.classList.add("cursor-on");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setShown(true);
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setLabel(t?.dataset.cursor ?? null);
    };
    const leave = () => setShown(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.body.classList.remove("cursor-on");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  const big = label !== null;
  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60]" style={{ x: sx, y: sy }}>
      <motion.div
        className="grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-signal text-center text-[10px] font-medium uppercase leading-tight tracking-widest text-ink"
        animate={{ width: big ? 96 : 10, height: big ? 96 : 10, opacity: shown ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {big && label}
      </motion.div>
    </motion.div>
  );
}
