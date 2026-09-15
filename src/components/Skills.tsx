import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiGlobe,
  FiServer,
  FiCpu,
} from "react-icons/fi";
import { skills } from "../data/skills";

const icons = [
  FiCode,
  FiServer,
  FiGlobe,
  FiDatabase,
  FiGitBranch,
  FiCpu,
];

function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            My toolkit spans software development, backend engineering,
            databases, testing, DevOps, and core computer science fundamentals.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={skill.category}
                className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-bold text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  {skill.category}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {skill.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/20 hover:text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;