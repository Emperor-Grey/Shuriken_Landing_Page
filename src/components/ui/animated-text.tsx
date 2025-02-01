import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    });
  }, [controls]);

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className={className}
      >
        {text}
      </motion.div>
    </div>
  );
};