import Reveal from "./Reveal";

export default function Contact() {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/v01dst" },
    { label: "X / Twitter", href: "https://x.com/V0_Kernl" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-44">
      {/* Orange glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="ember-glow absolute bottom-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 translate-y-1/3 animate-glow-pulse rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,72,30,0.1),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-8xl px-5 text-center md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.2em] text-ember">
            <span className="h-px w-6 bg-ember" />
            Let&apos;s Talk
            <span className="h-px w-6 bg-ember" />
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-900 leading-[0.98] tracking-[-0.035em] text-bone sm:text-7xl md:text-8xl">
            Got a product
            <br />
            to build?
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mx-auto mt-8 max-w-lg text-lg font-500 leading-relaxed text-ash">
            I take on a handful of projects each quarter. If you&apos;re
            building something real, tell me about it — I reply within a day.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:ma2093231@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-base font-700 text-ink transition-all duration-300 hover:scale-[1.02] hover:bg-ember-400 hover:shadow-[0_0_50px_-8px_rgba(217,72,30,0.8)]"
            >
              Start a project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-ember transition-transform duration-300 group-hover:translate-x-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a
              href="https://wa.me/201276129042"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-4 text-base font-600 text-bone transition-all duration-300 hover:border-bone/40 hover:bg-white/5"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.5a6.5 6.5 0 00-5.6 9.8L1.2 14.5l3.3-1.2A6.5 6.5 0 108 1.5z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.6 5.2c.2-.4.4-.4.6-.4h.4c.1 0 .3 0 .5.4l.5 1.2c.1.2 0 .4-.1.5l-.3.4c-.1.1-.2.3-.1.5.2.4.6 1.1 1.2 1.5.6.4.9.5 1.1.6.2 0 .3-.1.4-.2l.3-.4c.1-.2.3-.2.5-.1l1.1.6c.2.0.3.2.3.3 0 .3-.1.8-.4 1-.4.3-1 .5-1.5.4-.6-.1-1.6-.4-2.7-1.2-1-.8-1.8-1.7-2.4-2.8-.5-1-.7-1.8-.7-2.5 0-.6.2-1 .4-1.2z"
                  fill="currentColor"
                />
              </svg>
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <p className="mt-8 text-sm text-ash">
            Or email{" "}
            <a
              href="mailto:ma2093231@gmail.com"
              className="font-600 text-bone underline decoration-ember/50 underline-offset-4 transition-colors hover:decoration-ember"
            >
              ma2093231@gmail.com
            </a>
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-600 text-ash transition-all duration-300 hover:border-ember/50 hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="mx-auto mt-24 max-w-8xl border-t border-white/5 px-5 py-8 md:px-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-ash md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-ember font-display text-xs font-900 text-ink">
              M
            </span>
            <span className="font-500 text-bone/70">
              © {new Date().getFullYear()} Mahmoud
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/v01dst"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              GitHub
            </a>
            <a
              href="https://x.com/V0_Kernl"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              X
            </a>
            <a
              href="#top"
              className="transition-colors hover:text-bone"
            >
              Back to top ↑
            </a>
            <span className="text-ash/60">Built from the inside out.</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
