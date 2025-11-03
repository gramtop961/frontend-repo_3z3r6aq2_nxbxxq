import Spline from "@splinetool/react-spline";
import { CreditCard, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 pt-20 text-center md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Sparkles className="h-3.5 w-3.5" />
          New: Glassmorphic cards with real-time insights
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          The modern way to manage money for your SaaS
        </h1>
        <p className="max-w-2xl text-balance text-base text-white/70 md:text-lg">
          Accept payments, issue cards, and get instant analytics with a delightful 3D experience. Secure, fast, and designed for builders.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Start for free
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <CreditCard className="h-4 w-4" /> See how it works
          </a>
        </div>

        <div className="relative mt-10 h-[520px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
