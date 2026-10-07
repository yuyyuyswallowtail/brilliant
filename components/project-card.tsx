import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import { Reveal } from "./motion/reveal";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Reveal className={p.span}>
      <Link href="/work" data-cursor="View project →" className="group block">
        <figure>
          <div className={`relative overflow-hidden ${p.ratio}`}>
            <Image
              src={p.image.src}
              alt={p.image.alt}
              fill
              sizes={p.sizes}
              className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 text-xs text-mist">
            <span>{p.image.caption}</span>
            <span className="shrink-0">Photo via Unsplash</span>
          </figcaption>
        </figure>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div className="transition-transform duration-500 group-hover:translate-x-2">
            <h3 className="display text-[clamp(1.75rem,3vw,3rem)]">{p.title}</h3>
            <p className="mt-2 text-sm text-mist">{p.category}</p>
          </div>
          <div className="shrink-0 text-right text-xs leading-relaxed">
            <p>{p.year}</p>
            <p className="text-mist">{p.role}</p>
          </div>
        </div>
        <p className="mt-4 max-w-md text-sm leading-relaxed">{p.description}</p>
      </Link>
    </Reveal>
  );
}
