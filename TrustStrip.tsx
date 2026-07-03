import { systems } from "@/lib/content";
import Reveal from "./Reveal";

export default function TrustStrip() {
  const row = [...systems, ...systems];

  return (
    <section className="relative border-y border-white/5 py-14 md:py-20">
      <div className="mx-auto max-w-8xl px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm font-500 uppercase tracking-[0.2em] text-ash">
              Systems I&apos;m Building
            </p>
            <p className="max-w-md text-sm text-ash">
              Three products currently under active coding, design, and system
              architecture.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1}>
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12 pr-12 md:gap-20 md:pr-20">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-3xl font-900 tracking-tight text-ink-400 transition-colors duration-300 hover:text-ember md:text-5xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
