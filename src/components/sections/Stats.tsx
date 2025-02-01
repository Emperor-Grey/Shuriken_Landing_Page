import { motion } from 'framer-motion';

export const Stats = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { number: "10K+", label: "Active Users" },
                        { number: "500+", label: "Team Members" },
                        { number: "99.9%", label: "Uptime" },
                        { number: "24/7", label: "Support" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-dark-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
