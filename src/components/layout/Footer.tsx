import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import Logo from "../../../assets/svgs/logo.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-dark-800 py-16 bg-dark-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={Logo} alt="Shuriken Logo" className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent">
                  Shuriken
                </h3>
                <p className="text-sm text-primary-400">Sure You Can</p>
              </div>
            </div>
            <p className="text-dark-400 max-w-sm">
              Empowering learners with AI-driven precision training. Transform
              your learning journey with cutting-edge technology.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full bg-dark-800/50 text-dark-400 hover:text-primary-400 hover:bg-dark-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Platform",
              links: ["Features", "Pricing", "Documentation", "Updates"],
            },
            {
              title: "Resources",
              links: ["Help Center", "Community", "Tutorials", "Support"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Contact", "Partners"],
            },
          ].map((column, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-dark-800 pt-8 text-center text-dark-400">
          <p>&copy; 2024 Shuriken. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
