import { Code2, Database, BrainCircuit, Rocket } from "lucide-react";
import { profile } from "../data/profile";

function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Engineering",
      description:
        "Designing clean, secure, and scalable APIs with Python and FastAPI.",
    },
    {
      icon: Database,
      title: "Data & Infrastructure",
      description:
        "Working with PostgreSQL, SQLAlchemy, Redis, Docker, and production systems.",
    },
    {
      icon: BrainCircuit,
      title: "AI Engineering",
      description:
        "Building practical AI applications with LLMs, RAG, NLP, and intelligent matching.",
    },
    {
      icon: Rocket,
      title: "Production Mindset",
      description:
        "Testing, CI workflows, deployment, debugging, and turning ideas into real products.",
    },
  ];

  return (
    <section
      id="about"
      className="border-y border-white/5 bg-white/[0.02] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Intro */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              I build systems that solve real problems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              {profile.about}
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              {profile.goals}
            </p>

            <div className="mt-8 inline-flex rounded-2xl border border-cyan-400/10 bg-cyan-400/5 px-5 py-4">
              <div>
                <p className="text-sm text-slate-500">Currently seeking</p>
                <p className="mt-1 font-bold text-cyan-300">
                  Python Backend Developer • AI Engineer • ML Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/90"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-400/15">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;