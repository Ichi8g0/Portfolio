import { pillars } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      {/* Orange gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="ember-glow absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 animate-glow-pulse rounded-full blur-2xl" />
        <div className="ember-glow absolute right-[8%] top-24 h-[420px] w-[420px] opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,72,30,0.08),transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-8xl px-5 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <p className="text-sm font-500 uppercase tracking-[0.2em] text-ash">
              Hey, I&apos;m Mahmoud
            </p>
          </div>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Headline + sub */}
          <div className="lg:col-span-9">
            <Reveal delay={1}>
              <h1 className="font-display text-[2.7rem] font-900 leading-[0.95] tracking-[-0.035em] text-bone sm:text-6xl md:text-7xl lg:text-8xl">
                Full-Stack Developer
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">&amp; Product</span>
                  <span className="absolute -bottom-1 left-0 z-0 h-3 w-full -skew-x-6 bg-ember/30 md:h-4" />
                </span>{" "}
                Builder
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-8 max-w-xl text-lg font-500 leading-relaxed text-ash md:text-xl">
                I build backend-first products — from architecture to brand,
                for founders who need more than a freelancer.
              </p>
            </Reveal>
          </div>

          {/* Right-aligned supporting line */}
          <div className="flex items-end lg:col-span-3 lg:justify-end">
            <Reveal delay={3}>
              <p className="max-w-[16rem] border-l-2 border-ember/60 pl-4 text-base font-500 italic leading-relaxed text-bone/70 lg:text-right">
                Great products are built from the inside out.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Pillar strip */}
        <Reveal delay={2}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:mt-28 md:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="group relative bg-ink p-6 transition-colors duration-500 hover:bg-ink-100 md:p-8"
              >
                <span className="font-display text-sm font-700 text-ember">
                  #{p.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-700 tracking-tight text-bone md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {p.desc}
                </p>
                <span className="mt-5 block h-px w-8 bg-ember/40 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
