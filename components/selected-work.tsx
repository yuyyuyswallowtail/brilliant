import Link from "next/link";
import { projects } from "@/lib/content";
import { ProjectCard } from "./project-card";
import { Reveal } from "./motion/reveal";

export function SelectedWork() {
  return (
    <section id="work" className="px-6 py-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[clamp(2.5rem,5.5vw,5.5rem)]">Selected work</h2>
          <Link href="/work" className="text-sm underline underline-offset-4 hover:text-signal">All work →</Link>
        </Reveal>
        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-12">
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
