import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';

export const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-block mb-6 px-8 py-2 rounded-full bg-primary-500/10 border border-primary-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-base md:text-lg bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Sure You Can
            </span>
          </motion.div>
          <div className="mb-8 space-y-4">
            <TextGenerateEffect
              words="Learn Smarter with"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
            />
            <TextGenerateEffect
              words="AI-Powered Education"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
            />
          </div>
          <motion.p
            className="text-lg md:text-xl text-dark-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empower your learning journey with cutting-edge AI technology and
            personalized education
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-3 text-base md:text-lg rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 text-base md:text-lg rounded-full border border-primary-500/20 text-white font-medium hover:bg-primary-500/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
