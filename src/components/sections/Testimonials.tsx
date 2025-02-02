import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { testimonials } from '@/constants';

export const Testimonials = () => {
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
            words="What Our Students Say"
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
          />
          <p className="text-xl text-white/60">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-950 to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-none">
                  {testimonials.map((testimonial, idx) => (
                    <motion.div
                      key={`${i}-${idx}`}
                      className="flex-none w-[400px] mx-3 bg-white/[0.02] rounded-2xl p-6 border border-white/[0.05] relative group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                      <div className="relative z-10">
                        <div className="mb-6">
                          <svg
                            className="w-10 h-10 text-primary-500/20"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>
                        <p className="text-lg text-white/80 mb-6">
                          {testimonial.content}
                        </p>
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="text-white font-semibold">
                              {testimonial.author}
                            </h4>
                            <p className="text-white/60 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
