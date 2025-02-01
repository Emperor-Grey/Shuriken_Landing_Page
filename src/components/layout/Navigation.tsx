import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MovingBorder } from "../ui/moving-border";
import Logo from "../../../assets/svgs/logo.svg";
import { NAV_ITEMS } from "@/constants";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Features",
    "Solutions",
    "Pricing",
    "Team",
    "About",
    "Contact",
  ];

  return (
    <motion.nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
      <div className="bg-slate-900/40 backdrop-blur-xl rounded-full border border-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex-1 flex items-center justify-start">
              <div className="relative w-14 h-14">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <img
                    className="w-full h-full"
                    src={Logo}
                    alt="Shuriken Logo"
                  />
                </motion.div>
              </div>
              <div className="ml-2">
                <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Shuriken
                </span>
                <p className="text-xs text-primary-400">Sure You Can</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div className="hidden md:flex flex-1 items-center justify-center">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="px-3 sm:px-4 md:px-6 py-2 mx-1 text-sm sm:text-base font-medium text-slate-300 hover:text-primary-400 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex flex-1 items-center justify-end">
              <MovingBorder duration={3000} containerClassName="rounded-full">
                <button className="px-6 py-2 text-sm font-medium">
                  Get Started
                </button>
              </MovingBorder>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-dark-900/95 backdrop-blur-xl rounded-2xl border border-dark-800/50 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-4 py-2 text-dark-300 hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <div className="mt-4">
          <button className="w-full px-6 py-2 bg-primary-500 rounded-full text-white font-medium">
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};
