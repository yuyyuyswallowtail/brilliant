"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  { label: "Work", href: "/work" },
  { label: "Automation", href: "/automation" },
  { label: "Who we are", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-ink px-6 py-6 text-paper"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <button type="button" onClick={onClose} className="self-end text-[13px] tracking-wide">
            Close
          </button>
          <ul className="space-y-2">
            {items.map((it, i) => (
              <motion.li
                key={it.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.08, duration: 0.6 } }}
                exit={{ opacity: 0 }}
              >
                <Link href={it.href} onClick={onClose} className="display block text-[clamp(3rem,14vw,6rem)]">
                  {it.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <p className="text-sm text-mist">hello@brilliant.studio</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
