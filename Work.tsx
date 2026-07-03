import { projects, type Project } from "@/lib/content";
import Reveal from "./Reveal";

function Thumbnail({ project }: { project: Project }) {
  return (
    <div
      className="group/thumb relative h-full w-full overflow-hidden rounded-2xl"
      style={{
        background: `linear-gradient(135deg, #111 0%, #0c0c0c 60%, #080808 100%)`,
      }}
    >
      {/* Duotone ember wash */}
      <div
        className="absolute inset-0 opacity-50 mix-blend-screen transition-opacity duration-500 group-hover/thumb:opacity-70"
        style={{
          background: `radial-gradient(120% 90% at 20% 10%, ${project.accent}33 0%, transparent 55%), radial-gradient(120% 90% at 90% 100%, ${project.accent}22 0%, transparent 50%)`,
        }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Large wordmark */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <span
          className="font-display text-5xl font-900 tracking-[-0.04em] text-bone/90 transition-transform duration-700 group-hover/thumb:scale-105 md:text-7xl"
          style={{ textShadow: "0 8px 40px rgba(0,0,0,0.6)" }}
        >
          {project.name}
        </span>
      </div>
      {/* Bottom gradient + meta */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 md:p-6">
        <span className="font-display text-sm font-600 uppercase tracking-[0.15em] text-bone/80">
          {project.tagline}
        </span>
        <span className="text-xs font-500 text-ash">{project.year}</span>
      </div>
    </div>
  );
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article
        id={project.slug}
        className="group rounded-3xl border border-white/5 bg-ink-100/60 p-3 transition-all duration-500 hover:border-white/10 hover:bg-ink-100 md:p-4"
      >
        <div
          className={`grid grid-cols-1 gap-3 md:gap-4 ${
            reversed ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]"
          }`}
        >
          {/* Thumbnail */}
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[340px]">
            <Thumbnail project={project} />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-3 md:p-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-700 text-ember">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-5 font-display text-3xl font-900 tracking-tight text-bone md:text-4xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-md text-base font-500 leading-relaxed text-ash">
                {project.description}
              </p>
            </div>

            {/* Hover reveal details */}
            <div className="mt-6 overflow-hidden">
              <div className="space-y-4 border-t border-white/10 pt-5 transition-all duration-500">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-600 uppercase tracking-[0.15em] text-ash">
                      Role
                    </p>
                    <p className="mt-1.5 text-sm font-500 text-bone">
                      {project.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-600 uppercase tracking-[0.15em] text-ash">
                      Status
                    </p>
                    <p className="mt-1.5 text-sm font-500 text-bone">
                      {project.outcome}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-500 text-ash transition-colors duration-300 group-hover:border-ember/40 group-hover:text-bone"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-8xl px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.2em] text-ember">
                <span className="h-px w-6 bg-ember" />
                Selected Work
              </span>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-900 leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl md:text-6xl">
                Products being built to carry weight
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-xs text-sm text-ash md:text-right">
              Three projects, three different problems — each currently under
              active coding and product design.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-5 md:mt-20 md:gap-6">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
