import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiMail,
} from "react-icons/fi";
import { profile } from "../data/profile";

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setRoleIndex((current) => (current + 1) % profile.roles.length);
        setIsVisible(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[10%] h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="absolute right-[-10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute bottom-[-10%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <div className="flex min-h-full flex-col justify-evenly">
          <div>
            <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300 sm:text-sm">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />

              <span>{profile.availability}</span>
            </div>
          </div>

          <div>
            <p className="text-base font-semibold text-cyan-300 sm:text-lg">
              Hi, I&apos;m {profile.name} 👋
            </p>
          </div>

          <div>
            <h1 className="max-w-4xl text-2xl font-black leading-[1.08] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {profile.headline}
            </h1>

            <div
              className={`mt-4 min-h-[2.5rem] text-xl font-black text-transparent transition-all duration-300 sm:text-2xl md:text-3xl ${
                isVisible
                  ? "translate-y-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              {profile.roles[roleIndex]}
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              {profile.heroDescription}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 sm:text-base"
            >
              Explore Projects

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:text-base"
            >
              Let&apos;s Connect
              <FiMail size={18} />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3.5 text-sm font-bold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/15 sm:text-base"
            >
              Download Resume
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE CARD */}
<div className="relative mx-auto flex min-h-full w-full max-w-md items-center lg:translate-x-6">          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-violet-500/30 blur-xl" />

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 blur-md opacity-70" />

                <img
                  src={profile.image}
                  alt={profile.name}
                  className="relative h-28 w-28 rounded-full border-4 border-slate-950 object-cover sm:h-32 sm:w-32"
                />
              </div>

              <h2 className="mt-5 text-2xl font-black text-white">
                {profile.name}
              </h2>

              <div
                className={`mt-1 text-sm font-bold text-cyan-300 transition-opacity duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {profile.roles[roleIndex]}
              </div>

              <p className="mt-3 max-w-sm text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                {profile.headline}
              </p>
            </div>

            <div className="mt-7 border-t border-white/10 pt-5">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Core Focus
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  Backend • AI • ML
                </h3>
              </div>

              <div className="grid gap-3">
                {[
                  ["Python", "Software Development"],
                  ["FastAPI", "Backend Engineering"],
                  ["PostgreSQL + SQL", "Database"],
                  ["RAG + LLM + ML", "AI Engineering"],
                  ["Docker", "Deployment"],
                ].map(([technology, category]) => (
                  <div
                    key={technology}
                    className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                  >
                    <span className="font-semibold text-slate-200">
                      {technology}
                    </span>

                    <span className="text-right text-xs text-slate-500 sm:text-sm">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                Open to
              </p>

              <p className="mt-1 text-sm font-bold leading-6 text-emerald-300">
                Python Developer • Software Developer • AI Engineer • ML Engineer
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-white md:block"
      >
        <FiArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;