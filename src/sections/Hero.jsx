import Reveal from "../components/Reveal.jsx";
import { hero } from "../data/content.js";

export default function Hero() {
  return (
    <section className="relative z-[2] flex min-h-[100svh] flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:px-12">
      <div className="w-full max-w-3xl">
        <Reveal as="p" className="font-body italic uppercase tracking-[0.45em] text-[clamp(0.62rem,2.4vw,0.78rem)] text-orchid pl-[0.45em]">
          {hero.kicker}
        </Reveal>

        <Reveal delay={0.12}>
          <h1
            className="ink-grad mt-5 font-display italic font-normal leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,12vw,8.5rem)] text-lilac [text-shadow:0_0_60px_rgba(168,85,247,0.45)]"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          />
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-6 max-w-[30ch] font-body italic text-[clamp(1rem,3.5vw,1.35rem)] text-mist">
            {hero.subtitle}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.36} className="absolute bottom-9 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 font-body italic tracking-[0.1em] text-xs text-mist">
          <span>role</span>
          <span className="animate-cue block h-[46px] w-px bg-gradient-to-b from-orchid to-transparent" />
        </div>
      </Reveal>
    </section>
  );
}
