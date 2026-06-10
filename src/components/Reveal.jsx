import { motion } from "motion/react";

// Fades + lifts children into view as they scroll in.
// `delay` staggers siblings; respects reduced-motion via Motion defaults.
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.1, ease: [0.16, 0.84, 0.32, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
