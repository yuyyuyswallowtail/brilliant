import Link from "next/link";
import { Wordmark } from "./wordmark";

const col = "space-y-2 text-sm";
const hover = "hover:text-signal";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-24 text-paper md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="display text-[clamp(2rem,4vw,4rem)]">
          We build for clarity,<br />speed and substance.
        </p>
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Wordmark />
            <p className="mt-3 text-sm text-mist">Digital product studio.</p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-mist">Work</p>
            <ul className={col}>
              <li><Link href="/work" className={hover}>Products</Link></li>
              <li><Link href="/automation" className={hover}>Automation</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-mist">Studio</p>
            <ul className={col}>
              <li><Link href="/about" className={hover}>Who we are</Link></li>
              <li><Link href="/contact" className={hover}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-mist">Contact</p>
            <ul className={col}>
              <li><a href="mailto:hello@brilliant.studio" className={hover}>hello@brilliant.studio</a></li>
              <li><a href="mailto:careers@brilliant.studio" className={hover}>careers@brilliant.studio</a></li>
              <li className="text-mist">Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-mist">Social</p>
            <ul className={col}>
              <li><a href="https://instagram.com" className={hover}>Instagram</a></li>
              <li><a href="https://linkedin.com" className={hover}>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-mist">
          <p>© 2026 BRILLIANT</p>
          <p className="flex gap-6"><Link href="/" className="hover:text-paper">Privacy</Link><Link href="/" className="hover:text-paper">Terms</Link></p>
        </div>
      </div>
    </footer>
  );
}
