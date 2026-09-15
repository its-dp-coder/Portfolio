import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { profile } from "../data/profile";

function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I&apos;m actively looking for opportunities as a Python
              Developer, Software Developer, AI Engineer, or ML Engineer.
              I&apos;d love to connect with recruiters, hiring managers, and
              engineering teams.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300 sm:text-base"
            >
              <FiMail size={18} />
              Send Email
              <FiSend
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="grid gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3 text-cyan-300">
                  <FiMail size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-1 break-all font-semibold text-white">
                    {profile.email}
                  </p>
                </div>
              </div>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-3 text-emerald-300">
                  <FiPhone size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="mt-1 font-semibold text-white">
                    {profile.phone}
                  </p>
                </div>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200">
                  <FiGithub size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="mt-1 font-semibold text-white">
                    its-dp-coder
                  </p>
                </div>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200">
                  <FiLinkedin size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="mt-1 font-semibold text-white">
                    Connect with me
                  </p>
                </div>
              </div>
            </a>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300">
                  <FiMapPin size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-semibold text-white">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;