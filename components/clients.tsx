import { clients } from "@/lib/content";
import { Line, Reveal } from "./motion/reveal";

export function Clients() {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="text-sm tracking-wide text-mist">Who we work with</h2></Reveal>
        <div className="mt-16 space-y-20">
          {clients.map((c, i) => (
            <Reveal key={c.label} className={i % 2 ? "md:ml-[25%]" : ""}>
              <Line />
              <p className="mt-6 text-sm uppercase tracking-widest text-signal">{c.label}</p>
              <p className="display mt-4 max-w-4xl text-[clamp(1.75rem,3.4vw,3.5rem)]">{c.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
