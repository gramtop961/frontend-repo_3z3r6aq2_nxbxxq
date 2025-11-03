import { Rocket, CreditCard, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">FinGlide</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#security" className="flex items-center gap-1 transition hover:text-white">
            <Shield className="h-4 w-4" /> Security
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-md px-4 py-2 text-sm text-white/80 transition hover:text-white">Sign in</button>
          <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
