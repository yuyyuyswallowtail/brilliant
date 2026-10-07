"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import type { Case } from "@/lib/pages";
import { Line } from "./motion/reveal";

export function CaseList({ items }: { items: Case[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDialogElement>(null);
  const c = open === null ? null : items[open];

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (c && !d.open) d.showModal();
    if (!c && d.open) d.close();
  }, [c]);

  return (
    <>
      <ul>
        {items.map((it, i) => (
          <li key={it.title}>
            <Line />
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group grid w-full grid-cols-[1fr_auto] items-baseline gap-4 py-8 text-left transition-opacity md:grid-cols-[1fr_20rem_auto]"
            >
              <span className="display text-[clamp(1.5rem,3vw,3rem)] transition-transform duration-500 group-hover:translate-x-3">{it.title}</span>
              <span className="hidden text-sm text-mist md:block">{it.category}</span>
              <span className="flex items-center gap-2 text-sm">
                More details <ArrowUpRight size={16} className="text-signal" aria-hidden />
              </span>
            </button>
          </li>
        ))}
        <li><Line /></li>
      </ul>

      <dialog
        ref={ref}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        aria-labelledby="case-title"
        className="m-auto max-h-[90svh] w-[min(92vw,960px)] overflow-auto bg-paper p-0 text-ink backdrop:bg-ink/70"
      >
        {c && (
          <div className="p-6 md:p-12">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-mist">{c.category}</p>
                <h3 id="case-title" className="display mt-2 text-[clamp(1.75rem,3.4vw,3.25rem)]">{c.title}</h3>
              </div>
              <button type="button" onClick={() => setOpen(null)} aria-label="Close" className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-paper">
                <X size={16} />
              </button>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-signal">What we did</p>
                <p className="mt-3 leading-relaxed">{c.did}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-signal">Impact</p>
                <p className="mt-3 leading-relaxed">{c.impact}</p>
              </div>
            </div>
            {c.image && (
              <figure className="mt-10">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 768px) 900px, 92vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-xs text-mist">{c.image.caption} Photo via Unsplash.</figcaption>
              </figure>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
