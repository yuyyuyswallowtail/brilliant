import { testimonial } from "@/lib/content";
import { Reveal } from "./motion/reveal";

export function Testimonial() {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-24">
      <Reveal className="mx-auto max-w-[1440px]">
        <figure>
          <span aria-hidden className="display block text-[clamp(4rem,9vw,9rem)] leading-[0.6] text-signal">“</span>
          <blockquote className="display mt-6 max-w-5xl text-[clamp(1.75rem,3.2vw,3.25rem)]">{testimonial.quote}</blockquote>
          <figcaption className="mt-12 text-sm">
            — {testimonial.name}
            <span className="block text-mist">{testimonial.role}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
