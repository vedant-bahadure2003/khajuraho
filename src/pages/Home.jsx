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
  BecomeASponsor,
  Judges,
  Highlights,
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
      <TalentHunt isDark={isDark} />
      <Artists isDark={isDark} festivalData={festivalData} />
      <Judges isDark={isDark} />
      <BecomeASponsor isDark={isDark} />
      <Highlights isDark={isDark} />
      <Explore isDark={isDark} />
      <AdventurePark isDark={isDark} />
      <FamousFood isDark={isDark} />
      <LocalMarket isDark={isDark} />
      <About isDark={isDark} />
      <Schedule isDark={isDark} festivalData={festivalData} />
      <Visit isDark={isDark} festivalData={festivalData} />
      {/* <Sponsors isDark={isDark} festivalData={festivalData} /> */}

      {/* <Registration isDark={isDark} festivalData={festivalData} />
      <FAQs isDark={isDark} festivalData={festivalData} /> */}
      {/* <Chetan isDark={isDark} /> */}
    </>
  );
};

export default Home;
