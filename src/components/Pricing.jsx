import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    blurb: "Everything you need to test and launch",
    features: ["Up to 1k transactions/mo", "Basic analytics", "Email support"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$49/mo",
    blurb: "Advanced tools for scaling teams",
    features: ["Up to 100k transactions/mo", "Cohorts & churn", "Priority support"],
    cta: "Start 14‑day trial",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    blurb: "Designed for high‑volume and enterprise",
    features: ["Unlimited transactions", "SLA & SSO", "Dedicated manager"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/10 bg-black py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-20 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free and scale as you grow. No hidden fees.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border border-white/10 p-6 ${
                tier.highlighted ? "bg-white text-black" : "bg-white/5 text-white"
              }`}
            >
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <span className={`rounded-full px-3 py-1 text-xs ${tier.highlighted ? "bg-black/10" : "bg-white/10"}`}>
                  {tier.blurb}
                </span>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">{tier.price}</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${tier.highlighted ? "text-emerald-600" : "text-emerald-400"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto rounded-md px-4 py-2 text-sm font-semibold transition ${
                  tier.highlighted
                    ? "bg-black text-white hover:bg-black/90"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-white/70">
            Need a custom setup or have compliance requirements? Our team can tailor FinGlide to your needs.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="#" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">
              Talk to sales
            </a>
            <a href="#" className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
              Read docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
