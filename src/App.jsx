import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-white/10 bg-black/70 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} FinGlide. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
