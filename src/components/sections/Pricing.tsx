import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { PRICING_PLANS } from '@/constants';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TextGenerateEffect
            words="Choose Your Learning Plan"
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
          />
          <p className="text-xl text-white/60">
            Start free, upgrade when you're ready
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.title}
              className={`relative rounded-3xl p-1 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent'
                  : 'bg-white/[0.02]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`h-full rounded-[22px] p-8 ${plan.popular ? 'bg-dark-950/90' : 'bg-dark-950/50'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-primary-500 text-white text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {plan.title}
                  </h3>
                  <div className="p-2 rounded-xl bg-primary-500/10">
                    {plan.icon}
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-white/60 ml-2">/month</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="mr-3 p-1 rounded-full bg-primary-500/10">
                        {plan.icon}
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-2xl bg-primary-500/10 hover:bg-primary-500 text-white font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
