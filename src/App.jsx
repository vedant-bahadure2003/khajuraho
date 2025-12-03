import { useTheme, useReducedMotion } from "./hooks";
import {
  Navbar,
  Hero,
  About,
  Schedule,
  Artists,
  Visit,
  Gallery,
  Registration,
  FAQs,
  Sponsors,
  Footer,
} from "./components";
import festivalData from "./data/festivalData.json";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const { reducedMotion } = useReducedMotion();

  return (
    <div
      className={`min-h-screen theme-transition ${
        isDark ? "bg-dark-bg text-offwhite" : "bg-offwhite text-charcoal"
      }`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero
          isDark={isDark}
          festivalData={festivalData}
          reducedMotion={reducedMotion}
        />
        <About isDark={isDark} />
        <Schedule isDark={isDark} festivalData={festivalData} />
        <Artists isDark={isDark} festivalData={festivalData} />
        <Visit isDark={isDark} festivalData={festivalData} />
        <Gallery isDark={isDark} />
        <Registration isDark={isDark} festivalData={festivalData} />
        <FAQs isDark={isDark} festivalData={festivalData} />
        <Sponsors isDark={isDark} festivalData={festivalData} />
      </main>

      <Footer isDark={isDark} festivalData={festivalData} />
    </div>
  );
}

export default App;
