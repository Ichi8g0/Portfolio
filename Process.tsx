import { process } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-36">
      {/* Subtle top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-8xl px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.2em] text-ember">
                <span className="h-px w-6 bg-ember" />
                Process
              </span>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-900 leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
                How we get from
                <br />
                idea to shipped
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-xs text-sm text-ash md:text-right">
              A predictable loop built for freelance clients — clarity and
              trust at every step.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 md:mt-24">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-ember/40 via-white/10 to-ember/40 md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="group relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink font-display text-lg font-900 text-ember transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-ink md:h-14 md:w-14">
                    {step.n}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-800 tracking-tight text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-500 leading-relaxed text-ash">
                    {step.desc}
                  </p>
                  {i < process.length - 1 && (
                    <div className="mt-8 flex items-center gap-2 text-ember/50 md:hidden">
                      <span className="h-px w-8 bg-ember/40" />
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6h8M6 2l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
