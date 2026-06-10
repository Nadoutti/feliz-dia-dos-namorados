import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Framed photo with gentle scroll parallax + tilt.
// `src`  : path under /public, ex "/photos/nos.jpg"
// `tilt` : degrees of rotation for the polaroid feel
// `side` : "left" | "right" — which way it leans
export default function Photo({ src, caption, tilt = 3, side = "left" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // drift photo as it crosses the viewport
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const rot = side === "right" ? tilt : -tilt;

  return (
    <motion.figure
      ref={ref}
      style={{ y, rotate: rot }}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.16, 0.84, 0.32, 1] }}
      whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.4 } }}
      className="relative mx-auto w-full max-w-[340px] rounded-[18px] border border-orchid/25 bg-wine/40 p-3
                 backdrop-blur-sm shadow-[0_30px_70px_-25px_rgba(124,58,237,0.6)]"
    >
      <img
        src={src}
        alt={caption || "nós"}
        loading="lazy"
        className="aspect-[4/5] w-full rounded-[10px] object-cover [filter:saturate(1.05)]"
      />
      {caption && (
        <figcaption className="mt-3 pb-1 text-center font-display italic text-sm text-mist">
          {caption}
        </figcaption>
      )}
      {/* soft violet glow behind */}
      <span className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-violet/20 blur-2xl" />
    </motion.figure>
  );
}
