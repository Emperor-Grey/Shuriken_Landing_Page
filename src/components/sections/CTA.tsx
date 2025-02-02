import { AnimatedText } from '../ui/animated-text';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-r from-dark-900/50 to-dark-800/50 backdrop-blur-xl rounded-3xl p-6 sm:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <AnimatedText
              text="Ready to Transform Your Business?"
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            />
            <p className="text-xl text-white/60 mb-12">
              Join thousands of businesses that have already revolutionized
              their operations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25">
                Get Started Now
              </button>
              <button className="px-8 py-4 rounded-full border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10 text-white font-medium transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
