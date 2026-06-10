import Reveal from "../components/Reveal.jsx";
import Photo from "../components/Photo.jsx";

// One full-screen verse. Alternates left/right on desktop.
// If `photo` is set, text + photo sit side-by-side (stacked on mobile).
export default function Verse({ num, title, body, align = "left", ornament = false, photo, caption }) {
  const isRight = align === "right";

  const text = (
    <div
      className={[
        "quote-mark relative w-full max-w-[560px]",
        isRight ? "sm:text-right" : "sm:text-left",
      ].join(" ")}
    >
      <Reveal as="span" className="mb-6 block font-display italic tracking-[0.3em] text-[clamp(0.8rem,2.6vw,1rem)] text-violet">
        {num}
      </Reveal>

      <Reveal delay={0.12}>
        <h2
          className="ink mb-6 font-display italic font-normal leading-[1.05] tracking-[-0.01em] text-[clamp(1.7rem,6vw,3.4rem)] text-lilac"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Reveal>

      <Reveal delay={0.24}>
        <p
          className={[
            "max-w-[42ch] font-body italic text-[clamp(1.05rem,4vw,1.4rem)] text-mist mx-auto",
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
  );

  return (
    <section className="relative z-[2] flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center sm:px-12">
      {photo ? (
        <div
          className={[
            "flex w-full max-w-5xl flex-col items-center gap-12 md:gap-16",
            // text first on mobile; on desktop photo sits opposite the text alignment
            isRight ? "md:flex-row" : "md:flex-row-reverse",
          ].join(" ")}
        >
          <div className="flex-1">{text}</div>
          <div className="w-full flex-1">
            <Photo src={photo} caption={caption} side={isRight ? "right" : "left"} />
          </div>
        </div>
      ) : (
        <div className={["w-full max-w-[720px]", isRight ? "sm:ml-auto" : "sm:mr-auto"].join(" ")}>
          {text}
        </div>
      )}
    </section>
  );
}
