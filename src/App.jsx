import { Routes, Route } from "react-router-dom";
import { useTheme, useReducedMotion } from "./hooks";
import { Navbar, Footer, BottomBar } from "./components";
import Home from "./pages/Home";
import GalleryPage from "./pages/Gallery";
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
        <Routes>
          <Route
            path="/"
            element={<Home isDark={isDark} reducedMotion={reducedMotion} />}
          />
          <Route path="/gallery" element={<GalleryPage isDark={isDark} />} />
        </Routes>
      </main>

      <Footer isDark={isDark} festivalData={festivalData} />
      <BottomBar isDark={isDark} />
    </div>
  );
}

export default App;
