import { Shield, BarChart3, Zap, Server, Check } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank‑grade security",
    desc: "End‑to‑end encryption, tokenized cards, and fine‑grained access controls by default.",
  },
  {
    icon: BarChart3,
    title: "Real‑time analytics",
    desc: "See revenue, churn, and cohort insights update live as transactions happen.",
  },
  {
    icon: Zap,
    title: "Lightning fast",
    desc: "Optimized API and edge caching keep your checkout and dashboard snappy.",
  },
  {
    icon: Server,
    title: "Built to scale",
    desc: "Multi‑region infrastructure and automated failover for global reliability.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 bg-zinc-950 py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Everything you need to launch and grow
          </h2>
          <p className="mt-3 text-white/70">
            From secure payments to granular analytics, FinGlide is a complete money ops platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Easy integration</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Comprehensive docs</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> 24/7 support</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
