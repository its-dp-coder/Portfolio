import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Where I&apos;ve worked.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Professional experience working on real software products,
            collaborating with teams, and solving engineering problems.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent md:block" />

          <div className="space-y-8">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="relative md:pl-16"
              >
                <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-900 text-cyan-300 md:flex">
                  <Briefcase size={20} />
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-slate-900">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-cyan-300">
                        {item.company}
                      </p>

                      <h3 className="mt-1 text-2xl font-black text-white">
                        {item.role}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays size={15} />
                          {item.duration}
                        </span>

                        <span className="inline-flex items-center gap-2">
                          <MapPin size={15} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3">
                    {item.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="flex gap-3 text-sm leading-7 text-slate-400"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;