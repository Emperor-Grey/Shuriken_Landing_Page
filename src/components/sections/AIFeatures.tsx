import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Bot, Brain, Scan } from 'lucide-react';

export const AIFeatures = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TextGenerateEffect
            words="Powered by Advanced AI"
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
          />
          <p className="text-xl text-white/60">
            Experience the future of learning with our cutting-edge AI features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Learning Assistant',
              description:
                '24/7 personalized support with our intelligent chatbot. Get instant answers to your questions and guidance throughout your learning journey.',
              icon: <Bot className="w-12 h-12" />,
              gradient: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Smart Mock Interviews',
              description:
                'Practice with our AI interviewer that adapts to your responses. Receive real-time feedback and detailed performance analysis to improve your skills.',
              icon: <Brain className="w-12 h-12" />,
              gradient: 'from-purple-500 to-pink-500',
            },
            {
              title: 'Secure Test Environment',
              description:
                'Advanced face recognition technology ensures test integrity. Focus on your performance while our AI maintains academic honesty.',
              icon: <Scan className="w-12 h-12" />,
              gradient: 'from-green-500 to-emerald-500',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-dark-900/50 backdrop-blur-sm p-8 border border-white/10 h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="mb-8 inline-block p-4 rounded-2xl bg-primary-500/10">
                    <div className="text-primary-400">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
