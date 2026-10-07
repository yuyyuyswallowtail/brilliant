import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="px-6 pb-24 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-end gap-x-10 gap-y-4">
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="group inline-flex items-center gap-4 text-sm">
            <span>{l.label}</span>
            <span className="grid size-10 place-items-center rounded-full bg-ink text-signal transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={16} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
