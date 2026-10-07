import { Line, Reveal } from "./motion/reveal";

type Q = { quote: string; name: string; role: string };

export function Quotes({ title, items }: { title: string; items: Q[] }) {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="display max-w-3xl text-[clamp(1.75rem,3.4vw,3.5rem)]">{title}</h2></Reveal>
        <div className="mt-20 space-y-16">
          {items.map((q) => (
            <Reveal key={q.name}>
              <Line />
              <figure className="mt-8 grid gap-6 md:grid-cols-12">
                <blockquote className="text-[clamp(1.25rem,2.2vw,2rem)] leading-snug md:col-span-8">“{q.quote}”</blockquote>
                <figcaption className="text-sm md:col-span-3 md:col-start-10">
                  {q.name}
                  <span className="block text-mist">{q.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
