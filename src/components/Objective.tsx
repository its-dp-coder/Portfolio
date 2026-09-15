import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiTarget,
} from "react-icons/fi";
import { profile } from "../data/profile";

function Objective() {
  const targetRoles = [
    "Python Developer",
    "Software Developer",
    "AI Engineer",
    "ML Engineer",
  ];

  return (
    <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.06] via-slate-900/80 to-violet-500/[0.06] p-7 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
                <FiTarget size={15} />
                Career Objective
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Looking for the right team to build impactful software with.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                {profile.objective}
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 sm:text-base"
              >
                Let&apos;s Connect
                <FiArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                  <FiBriefcase size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Open To
                  </p>
                  <p className="mt-1 font-bold text-white">
                    Engineering Opportunities
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {targetRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3"
                  >
                    <FiCheckCircle
                      size={17}
                      className="shrink-0 text-emerald-400"
                    />
                    <span className="text-sm font-semibold text-slate-200 sm:text-base">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objective;