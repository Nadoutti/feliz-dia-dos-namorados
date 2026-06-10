import Reveal from "../components/Reveal.jsx";

// One full-screen verse. Alternates left/right alignment on desktop.
export default function Verse({ num, title, body, align = "left", ornament = false }) {
  const isRight = align === "right";

  return (
    <section className="relative z-[2] flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center sm:px-12">
      <div
        className={[
          "quote-mark relative w-full max-w-[720px]",
          isRight
            ? "sm:ml-auto sm:mr-0 sm:text-right"
            : "sm:mr-auto sm:ml-0 sm:text-left",
        ].join(" ")}
      >
        <Reveal as="span" className="mb-6 block font-display italic tracking-[0.3em] text-[clamp(0.8rem,2.6vw,1rem)] text-violet">
          {num}
        </Reveal>

        <Reveal delay={0.12}>
          <h2
            className="ink mb-6 font-display italic font-normal leading-[1.05] tracking-[-0.01em] text-[clamp(1.9rem,7vw,4rem)] text-lilac"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Reveal>

        <Reveal delay={0.24}>
          <p
            className={[
              "max-w-[34ch] font-body italic text-[clamp(1.05rem,4vw,1.45rem)] text-mist",
              "mx-auto",
              isRight ? "sm:ml-auto sm:mr-0" : "sm:ml-0 sm:mr-auto",
            ].join(" ")}
          >
            {body}
          </p>
        </Reveal>

        {ornament && (
          <Reveal delay={0.24}>
            <div className="mx-auto mt-9 flex items-center justify-center gap-4 text-violet">
              <span className="h-px w-[min(90px,18vw)] bg-gradient-to-r from-transparent via-violet to-transparent" />
              ✦
              <span className="h-px w-[min(90px,18vw)] bg-gradient-to-r from-transparent via-violet to-transparent" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
