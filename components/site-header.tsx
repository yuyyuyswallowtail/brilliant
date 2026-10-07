"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";

const work = [
  { label: "Products", href: "/work" },
  { label: "Automation", href: "/automation" },
];

const linkCls = "inline-flex h-10 items-center px-3 transition-opacity hover:opacity-60";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  const cur = (href: string) => (path === href ? "page" : undefined);
  const move = { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-40 bg-paper transition-colors duration-500 ${scrolled ? "md:pointer-events-none md:bg-transparent" : ""}`}
      >
        <div className="relative mx-auto flex h-24 max-w-[1440px] items-center px-6 md:px-12 lg:px-24">
          <div className={`pointer-events-auto ${scrolled ? "md:hidden" : ""}`}>
            <Wordmark />
          </div>

          <motion.div
            key={scrolled ? "float" : "flat"}
            initial={{ opacity: 0, y: reduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={move}
            className={`pointer-events-auto hidden items-center md:flex ${scrolled ? "absolute left-1/2 -translate-x-1/2" : "ml-auto mr-6"}`}
          >
            {scrolled && (
              <Link
                href="/"
                aria-label="BRILLIANT home"
                className="grid size-10 place-items-center rounded-full bg-signal text-lg text-ink transition-transform duration-500 hover:rotate-90"
              >
                <span aria-hidden>✦</span>
              </Link>
            )}
            <nav
              aria-label="Primary"
              className={`flex items-center text-[15px] ${scrolled ? "ml-0.5 h-10 rounded-md bg-ink/70 px-1 text-paper backdrop-blur-md" : "gap-3"}`}
            >
              <div className="group relative">
                <Link href="/work" className={`${linkCls} gap-1`}>
                  Work <ChevronDown size={13} aria-hidden />
                </Link>
                <ul className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <li className="min-w-40 border border-line bg-paper p-2 text-ink">
                    {work.map((w) => (
                      <Link key={w.href} href={w.href} aria-current={cur(w.href)} className="block px-3 py-2 hover:bg-ink hover:text-paper">
                        {w.label}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
              <Link href="/about" aria-current={cur("/about")} className={linkCls}>Who we are</Link>
            </nav>
          </motion.div>

          <div className={`pointer-events-auto hidden md:block ${scrolled ? "ml-auto" : ""}`}>
            <Link href="/contact" aria-current={cur("/contact")} className="group relative isolate inline-flex h-10 items-center pl-5 pr-12">
              <span
                aria-hidden
                className={`absolute right-0 top-0 -z-10 h-10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  scrolled ? "w-full bg-signal" : "w-10 bg-ink group-hover:w-full group-focus-visible:w-full"
                }`}
              />
              <span className={`transition-colors duration-300 ${scrolled ? "text-ink" : "group-hover:text-signal group-focus-visible:text-signal"}`}>
                Contact us
              </span>
              <ArrowRight
                size={16}
                aria-hidden
                className={`absolute right-3 transition-all duration-500 group-hover:translate-x-0.5 ${scrolled ? "text-ink" : "text-signal"}`}
              />
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto text-[15px] md:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </motion.header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
