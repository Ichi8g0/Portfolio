import { services } from "@/lib/content";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-8xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.2em] text-ember">
                <span className="h-px w-6 bg-ember" />
                Services
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-display text-4xl font-900 leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
                Pick the scope,
                <br />
                not a skill list
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-sm text-base font-500 leading-relaxed text-ash">
                Clear packages with defined outcomes. No retainers, no
                mystery scopes — just the work it takes to ship.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col gap-4">
              {services.map((s, i) => (
                <Reveal key={s.name} delay={(i + 1) as 1 | 2 | 3}>
                  <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-ink-100/60 p-6 transition-all duration-500 hover:border-ember/30 hover:bg-ink-100 md:p-8">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-ember/0 blur-3xl transition-all duration-500 group-hover:bg-ember/20" />
                    <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="md:max-w-md">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-sm font-700 text-ember">
                            0{i + 1}
                          </span>
                          <span className="h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-ember/40" />
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-800 tracking-tight text-bone md:text-3xl">
                          {s.name}
                        </h3>
                        <p className="mt-3 text-base font-500 leading-relaxed text-ash">
                          {s.desc}
                        </p>
                      </div>

                      <div className="md:w-56 md:shrink-0 md:border-l md:border-white/10 md:pl-6">
                        <p className="text-xs font-600 uppercase tracking-[0.15em] text-ember">
                          Starting scope
                        </p>
                        <p className="mt-1.5 text-sm font-600 text-bone">
                          {s.scope}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {s.points.map((p) => (
                            <li
                              key={p}
                              className="flex items-start gap-2.5 text-sm text-ash"
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="mt-1 shrink-0 text-ember"
                              >
                                <path
                                  d="M2.5 7.5l3 3 6-6.5"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
