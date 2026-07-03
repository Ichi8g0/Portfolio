import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-8xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: eyebrow + headline */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.2em] text-ember">
                <span className="h-px w-6 bg-ember" />
                How I Work
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-display text-4xl font-900 leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
                I Build the Systems
                <br />
                Behind the Interface
              </h2>
            </Reveal>
          </div>

          {/* Right: paragraph + CTA */}
          <div className="flex flex-col justify-end lg:col-span-5">
            <Reveal delay={2}>
              <p className="text-lg font-500 leading-relaxed text-ash">
                I started in engineering and stayed for the design. That means
                the data model is drawn before the screen, the API is shaped by
                real user flows, and the brand is built to survive product
                growth — not bolted on at the end. The result is work that
                holds up under load and looks like it belongs.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 self-start rounded-full border border-white/15 px-6 py-3.5 text-sm font-600 text-bone transition-all duration-300 hover:border-ember hover:bg-ember hover:text-ink"
              >
                Let&apos;s Build Something Real
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ember text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:bg-ink group-hover:text-ember">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
