import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Brain, Compass, GraduationCap, Rocket } from 'lucide-react';

export const LearningJourney = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <TextGenerateEffect
          words="Your Learning Journey"
          className="text-5xl md:text-6xl font-bold mb-20 text-center bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[40px] top-[40px] bottom-[40px] w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600" />

          {[
            {
              title: 'AI-Powered Course Discovery',
              description:
                'Get personalized course recommendations from Udemy and LinkedIn Learning based on your interests and skill level',
              icon: <Compass className="w-8 h-8 text-primary-500" />,
            },
            {
              title: 'Learn with AI Assistant',
              description:
                'Find the perfect YouTube tutorials and resources curated by AI to match your learning style',
              icon: <Brain className="w-8 h-8 text-primary-500" />,
            },
            {
              title: 'Test Your Knowledge',
              description:
                'Challenge yourself with AI-generated quizzes and get instant feedback on your progress',
              icon: <GraduationCap className="w-8 h-8 text-primary-500" />,
            },
            {
              title: 'Career Boost',
              description:
                'Build ATS-friendly resumes and get AI-powered tips to improve your job applications',
              icon: <Rocket className="w-8 h-8 text-primary-500" />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative mb-16 last:mb-0 flex items-start pl-20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              {/* Horizontal connecting line */}
              <div className="absolute left-[40px] top-[40px] w-[40px] h-0.5 bg-primary-500" />

              <motion.div
                className="absolute left-0 top-[20px] w-20 h-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 + 0.1 }}
              >
                <div className="w-full h-full rounded-2xl bg-dark-900/80 backdrop-blur-sm flex items-center justify-center border-2 border-primary-500 shadow-lg shadow-primary-500/20">
                  {item.icon}
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-900/50 backdrop-blur-sm p-8 ml-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/50 transition-colors flex-1"
                whileHover={{ x: 10 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-primary-400/80">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
