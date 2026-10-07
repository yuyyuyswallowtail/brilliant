import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="BRILLIANT home" className={`inline-flex items-start text-2xl font-medium tracking-[-0.05em] md:text-3xl ${className}`}>
      BRILLIANT
      <span aria-hidden className="ml-0.5 text-[0.45em] text-signal">✦</span>
    </Link>
  );
}
