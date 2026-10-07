"use client";

import dynamic from "next/dynamic";
import { useRef, useSyncExternalStore } from "react";
import { useInView, useReducedMotion, useScroll } from "framer-motion";

const ChromeStars = dynamic(() => import("./three/chrome-stars"), { ssr: false });

const subscribe = (cb: () => void) => {
  const m = window.matchMedia("(min-width: 768px)");
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

function Fallback() {
  return (
    <div className="flex h-full items-start justify-between px-[8%] pt-12" aria-hidden>
      {[0, 1].map((i) => (
        <svg key={i} viewBox="0 0 100 100" className="size-24 md:size-36">
          <path d="M50 0Q50 50 100 50Q50 50 50 100Q50 50 0 50Q50 50 50 0Z" fill="none" stroke="#A3ACBE" strokeWidth="1.2" />
        </svg>
      ))}
    </div>
  );
}

export function VisualBreak() {
  const ref = useRef<HTMLElement>(null);
  const ever = useInView(ref, { once: true, margin: "200px" });
  const live = useInView(ref, { margin: "100px" });
  const reduce = useReducedMotion();
  const wide = useSyncExternalStore(subscribe, () => window.matchMedia("(min-width: 768px)").matches, () => false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const tall = wide && !reduce;

  return (
    <section ref={ref} aria-label="Visual break" className={`relative bg-ink ${tall ? "h-[240svh]" : "h-[70svh]"}`}>
      <div className={tall ? "sticky top-0 h-svh" : "h-full"}>
        {wide && ever ? (
          <div className="absolute inset-0">
            <ChromeStars animate={!reduce && live} progress={scrollYProgress} />
          </div>
        ) : (
          <Fallback />
        )}
      </div>
    </section>
  );
}
