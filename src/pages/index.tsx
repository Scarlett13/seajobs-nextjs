import { useEffect } from "react";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { useUser } from "../contexts/AmplifyAuthContext";
import LandingNumberSection from "../page_components/landingpage/LandingNumberSection";
import MainHeroSection from "../page_components/landingpage/MainHeroSection";

export default function Home() {
  const { user, authenticated, isTa } = useUser();
  useEffect(() => {
    if (authenticated) {
      return;
    }
  }, [authenticated]);
  return (
    <PrimaryLayout user={user}>
      <MainHeroSection />
      <LandingNumberSection />
    </PrimaryLayout>
  );
}

Home.authenticate = true;
