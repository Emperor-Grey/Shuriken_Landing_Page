import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect = ({ words, className = "" }: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const characters = words.split("");

  useEffect(() => {
    const enterAnimation = async () => {
      await animate(
        "span",
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 0.3,
          delay: stagger(0.03),
          ease: "easeOut",
        }
      );
    };

    enterAnimation();
  }, [scope.current]);

  return (
    <motion.div ref={scope} className={className}>
      {characters.map((char, idx) => (
        <motion.span
          key={char + idx}
          className="inline-block"
          initial={{ opacity: 0, x: -20 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};