import Petals from "./components/Petals.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./sections/Hero.jsx";
import Verse from "./sections/Verse.jsx";
import Declaration from "./sections/Declaration.jsx";
import SignOff from "./sections/SignOff.jsx";
import { verses } from "./data/content.js";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Petals />

      <main>
        <Hero />
        {verses.map((v, i) => (
          <Verse key={i} {...v} />
        ))}
        <Declaration />
        <SignOff />
      </main>
    </>
  );
}
