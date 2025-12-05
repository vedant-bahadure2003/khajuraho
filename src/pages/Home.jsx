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
  Chetan,
  WhatsNew,
  TalentHunt,
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
      <WhatsNew isDark={isDark} />
      <About isDark={isDark} />
      <TalentHunt isDark={isDark} />
      <Artists isDark={isDark} festivalData={festivalData} />
      <Schedule isDark={isDark} festivalData={festivalData} />
      <Explore isDark={isDark} />
      <AdventurePark isDark={isDark} />
      <FamousFood isDark={isDark} />
      <LocalMarket isDark={isDark} />
      <Visit isDark={isDark} festivalData={festivalData} />
      <Sponsors isDark={isDark} festivalData={festivalData} />
      {/* <Registration isDark={isDark} festivalData={festivalData} />
      <FAQs isDark={isDark} festivalData={festivalData} /> */}
      {/* <Chetan isDark={isDark} /> */}
    </>
  );
};

export default Home;
