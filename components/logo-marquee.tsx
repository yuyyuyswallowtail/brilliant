import { clientNames } from "@/lib/pages";

export function LogoMarquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-16 pr-16">
      {clientNames.map((n) => (
        <li key={n} className="display whitespace-nowrap text-[clamp(1.75rem,3vw,3rem)] text-mist">{n}</li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Selected partners" className="overflow-hidden border-y border-line py-10">
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
