import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold text-white">
            {profile.name}
            <span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {profile.primaryRole}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-400 transition hover:border-cyan-400/20 hover:text-white"
          >
            <FiGithub size={18} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-400 transition hover:border-cyan-400/20 hover:text-white"
          >
            <FiLinkedin size={18} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-400 transition hover:border-cyan-400/20 hover:text-white"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-white/5 pt-5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {profile.name}. Built with React & TypeScript.
      </div>
    </footer>
  );
}

export default Footer;