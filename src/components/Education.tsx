import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { education } from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            My academic journey.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A foundation in computer science and information technology,
            combined with hands-on software development experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {education.map((item, index) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                  <GraduationCap size={25} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-4 lg:flex-row">
                    <div>
                      <p className="text-sm font-semibold text-cyan-300">
                        {item.institution}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-snug text-white">
                        {item.degree}
                      </h3>
                    </div>

                    <span className="flex h-fit w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-400">
                      <span>{index + 1}</span>
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={15} />
                      {item.duration}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin size={15} />
                      {item.location}
                    </span>
                  </div>

                  <div className="mt-5 inline-flex rounded-xl border border-emerald-400/10 bg-emerald-400/5 px-4 py-2.5">
                    <span className="text-sm font-bold text-emerald-300">
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;