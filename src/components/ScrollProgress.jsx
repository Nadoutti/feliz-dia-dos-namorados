import { motion, useScroll, useSpring } from "motion/react";

// Thin gradient bar tracking scroll position.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-20 h-[3px] w-full origin-left
                 bg-gradient-to-r from-violet via-orchid to-gold
                 shadow-[0_0_14px_rgba(168,85,247,0.45)]"
      aria-hidden="true"
    />
  );
}
