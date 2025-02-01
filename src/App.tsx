import Logo from "../assets/svgs/logo.svg";
import { Navigation } from "./components/layout/Navigation";
import { Team } from "./components/sections/Team";
import { Testimonials } from "./components/sections/Testimonials";
import { Pricing } from "./components/sections/Pricing";
import { Stats } from "./components/sections/Stats";
import { LearningJourney } from "./components/sections/LearningJourney";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-dark-950 to-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f6,transparent_70%)] opacity-20" />

      {/* Add background logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
        <img
          src={Logo}
          alt="Background Logo"
          className="w-[1600px] h-[1600px] animate-slow-spin"
        />
      </div>

      <Navigation />
      <Hero />
      <Features />
      <Team />
      <Testimonials />
      <Stats />
      <LearningJourney />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
