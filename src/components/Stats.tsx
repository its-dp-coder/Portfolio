import {
  FiAward,
  FiBriefcase,
  FiCode,
  FiCpu,
} from "react-icons/fi";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
    icon: FiCode,
  },
  {
    value: "1",
    label: "Product Developer Internship",
    icon: FiBriefcase,
  },
  {
    value: "100+",
    label: "LeetCode Problems Solved",
    icon: FiCpu,
  },
  {
    value: "AI/ML",
    label: "Projects & Applications",
    icon: FiAward,
  },
];

function Stats() {
  return (
    <section className="border-y border-white/5 bg-slate-950 px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:scale-110">
                <Icon size={22} />
              </div>

              <p className="mt-5 text-3xl font-black tracking-tight text-white">
                {stat.value}
              </p>

              <p className="mx-auto mt-2 max-w-[180px] text-sm font-medium leading-6 text-slate-500">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;