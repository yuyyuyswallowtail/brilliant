"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Reveal } from "./motion/reveal";

const text = "We turn ambitious ideas into digital products people actually use.";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const color = useTransform(progress, range, ["#A3ACBE", "#0A0F1F"]);
  return <motion.span style={{ color }} className="mr-[0.25em] inline-block">{word}</motion.span>;
}

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  return (
    <section ref={ref} className="px-6 py-40 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="display max-w-6xl text-[clamp(2rem,3.6vw,4.25rem)]">
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
          ))}
        </h2>
        <Reveal className="mt-16 md:ml-[50%] md:max-w-sm">
          <p className="leading-relaxed">
            We combine product strategy, design, engineering and emerging technology to transform complexity into clarity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
