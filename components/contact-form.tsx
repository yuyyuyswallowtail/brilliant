"use client";

import { useState } from "react";
import { roles } from "@/lib/pages";

const kinds = [
  { id: "quote", label: "Get a quote", hint: "For new projects" },
  { id: "apply", label: "Apply to a position", hint: "Be part of the team" },
  { id: "talk", label: "Talk to us", hint: "General enquiries" },
] as const;

const field = "w-full border-b border-line bg-transparent py-3 outline-none transition-colors focus:border-ink";

export function ContactForm() {
  const [kind, setKind] = useState<(typeof kinds)[number]["id"]>("quote");
  const [len, setLen] = useState(0);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      kind === "apply" ? `Position: ${f.get("position")}` : "",
      kind === "apply" ? `CV or portfolio: ${f.get("link")}` : "",
      "",
      String(f.get("message") ?? ""),
    ].filter((l, i) => l !== "" || i === 4);
    const to = kind === "apply" ? "careers@brilliant.studio" : "hello@brilliant.studio";
    const subject = `[${kind}] ${f.get("name")}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="py-12">
        <p className="display text-[clamp(2rem,5vw,4rem)]">Thank you.</p>
        <p className="mt-4 max-w-md leading-relaxed">Your email app should have opened with the message ready to send. If not, write to hello@brilliant.studio.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-8 underline underline-offset-4">Go back</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-10">
      <fieldset>
        <legend className="sr-only">What can we help with?</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {kinds.map((k) => (
            <label key={k.id} className="cursor-pointer border border-line p-5 transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-signal">
              <input type="radio" name="kind" value={k.id} checked={kind === k.id} onChange={() => setKind(k.id)} className="sr-only" />
              <span className="block font-medium">{k.label}</span>
              <span className="block text-sm opacity-60">{k.hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-10 md:grid-cols-2">
        <label className="block text-sm">Name *
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm">Email address *
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>

      {kind === "apply" && (
        <div className="grid gap-10 md:grid-cols-2">
          <label className="block text-sm">Position applying for *
            <select name="position" required className={field}>
              {roles.map((r) => <option key={r.title}>{r.title}</option>)}
              <option>Spontaneous application</option>
            </select>
          </label>
          <label className="block text-sm">Link to CV or portfolio *
            <input name="link" type="url" required placeholder="https://" className={field} />
          </label>
        </div>
      )}

      <label className="block text-sm">
        {kind === "apply" ? "Tell us about yourself *" : "What is your goal, budget and timeline? *"}
        <textarea name="message" required maxLength={2000} rows={5} onChange={(e) => setLen(e.target.value.length)} className={field} />
        <span className="mt-1 block text-right text-xs text-mist">{len} / 2000</span>
      </label>

      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="text-sm text-mist">Prefer email? <a href="mailto:hello@brilliant.studio" className="text-ink underline underline-offset-4">hello@brilliant.studio</a></p>
        <button type="submit" className="rounded-full bg-ink px-8 py-4 text-sm text-paper transition-colors hover:bg-signal hover:text-ink">Send message</button>
      </div>
    </form>
  );
}
