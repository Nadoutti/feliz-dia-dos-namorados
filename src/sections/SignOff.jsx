import Reveal from "../components/Reveal.jsx";
import { signoff } from "../data/content.js";

export default function SignOff() {
  return (
    <section className="relative z-[2] flex min-h-[80vh] flex-col items-center justify-center gap-4 px-6 py-20 text-center sm:px-12">
      <Reveal as="p" className="font-body italic tracking-[0.1em] text-mist">
        {signoff.small}
      </Reveal>

      <Reveal delay={0.12} as="p" className="font-display italic font-medium text-[clamp(2rem,9vw,4rem)] text-lilac">
        {signoff.name}
      </Reveal>

      <Reveal delay={0.24} as="p" className="mt-6 font-body italic uppercase tracking-[0.3em] text-xs text-violet">
        {signoff.date}
      </Reveal>
    </section>
  );
}
