import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import LandingNumberSection from "./landingpage/LandingNumberSection";
import MainHeroSection from "./landingpage/MainHeroSection";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <MainHeroSection />
      <LandingNumberSection />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <>
      <PrimaryLayout>{page}</PrimaryLayout>
    </>
  );
};
