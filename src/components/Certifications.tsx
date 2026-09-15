import { FiAward, FiCalendar } from "react-icons/fi";
import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Continuous learning.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Certifications that support my foundation in Python, machine
            learning, and modern web development.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={`${certification.name}-${certification.issuer}`}
              className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-105">
                <FiAward size={22} />
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                {certification.name}
              </h3>

              <p className="mt-2 font-semibold text-cyan-300">
                {certification.issuer}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-400">
                <FiCalendar size={14} />
                {certification.date}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;