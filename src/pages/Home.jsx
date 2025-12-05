import {
  Hero,
  About,
  Explore,
  Schedule,
  Artists,
  Visit,
  Gallery,
  Registration,
  FAQs,
  Sponsors,
  FamousFood,
  LocalMarket,
  AdventurePark,
} from "../components";
import festivalData from "../data/festivalData.json";

const Home = ({ isDark, reducedMotion }) => {
  return (
    <>
      <Hero
        isDark={isDark}
        festivalData={festivalData}
        reducedMotion={reducedMotion}
      />
      <About isDark={isDark} />
      <Explore isDark={isDark} />
      <Schedule isDark={isDark} festivalData={festivalData} />
      <Artists isDark={isDark} festivalData={festivalData} />
      <FamousFood isDark={isDark} />
      <LocalMarket isDark={isDark} />
      <AdventurePark isDark={isDark} />
      <Visit isDark={isDark} festivalData={festivalData} />
      {/* <Registration isDark={isDark} festivalData={festivalData} />
      <FAQs isDark={isDark} festivalData={festivalData} /> */}
      <Sponsors isDark={isDark} festivalData={festivalData} />
    </>
  );
};

export default Home;
