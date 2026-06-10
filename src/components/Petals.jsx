import { useMemo } from "react";

const GLYPHS = ["❀", "✿", "❁", "✦", "♡"];

// Decorative falling petals. Count scales down on small screens.
export default function Petals() {
  const petals = useMemo(() => {
    const n = typeof window !== "undefined" && window.innerWidth < 700 ? 9 : 16;
    return Array.from({ length: n }, (_, i) => ({
      glyph: GLYPHS[i % GLYPHS.length],
      left: Math.random() * 100,
      size: 0.7 + Math.random() * 1.3,
      duration: 11 + Math.random() * 12,
      delay: -Math.random() * 16,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal text-orchid"
          style={{
            left: `${p.left}vw`,
            fontSize: `${p.size}rem`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  );
}
