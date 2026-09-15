import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiStar,
} from "react-icons/fi";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Featured Work
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Projects I&apos;ve built.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Real-world applications focused on backend engineering, AI,
            databases, APIs, testing, and production deployment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-slate-900/70 p-6 transition duration-500 hover:-translate-y-2 ${
                project.featured
                  ? "border-cyan-400/25 shadow-xl shadow-cyan-950/20"
                  : "border-white/10 hover:border-cyan-400/20"
              }`}
            >
              {project.featured && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-300">
                  <FiStar size={13} />
                  Featured
                </div>
              )}

              <div className="pr-20">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-400">
                  {project.subtitle}
                </p>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Technology
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/20 hover:text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Highlights
                </p>

                <div className="mt-3 space-y-2.5">
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  <FiGithub size={16} />
                  GitHub
                </a>
              </div>

              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

              <div className="mt-5 flex items-center justify-end text-xs text-slate-600">
                <span className="inline-flex items-center gap-1">
                  View project
                  <FiArrowUpRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;