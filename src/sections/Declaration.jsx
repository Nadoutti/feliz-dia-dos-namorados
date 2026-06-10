import Reveal from "../components/Reveal.jsx";
import { declaration } from "../data/content.js";

export default function Declaration() {
  return (
    <section className="relative z-[2] flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center sm:px-12
                        [background:radial-gradient(120%_90%_at_50%_0%,rgba(124,58,237,0.22),transparent_60%)]">
      <div className="w-full max-w-3xl">
        <Reveal>
          <div className="rounded-[26px] border border-orchid/20 p-[clamp(2rem,6vw,4rem)] backdrop-blur-md
                          [background:linear-gradient(160deg,rgba(45,15,71,0.72),rgba(26,11,46,0.55))]
                          shadow-[0_30px_80px_-30px_rgba(124,58,237,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]">
            <Reveal delay={0.12}>
              <div className="animate-beat inline-block text-[clamp(2.4rem,9vw,3.6rem)] text-orchid drop-shadow-[0_0_22px_rgba(168,85,247,0.45)]">
                ❤
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h2
                className="ink-grad mt-2 font-display italic font-normal leading-[1.04] text-[clamp(2.2rem,8vw,4.4rem)] text-lilac"
                dangerouslySetInnerHTML={{ __html: declaration.title }}
              />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-6 max-w-[38ch] font-body italic text-[clamp(1.05rem,4vw,1.4rem)] text-mist">
                {declaration.body}
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
