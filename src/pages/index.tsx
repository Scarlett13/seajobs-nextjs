import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { useUser } from "../contexts/AmplifyAuthContext";
import LandingNumberSection from "./landingpage/LandingNumberSection";
import MainHeroSection from "./landingpage/MainHeroSection";

export default function Home() {
  const { user } = useUser();
  return (
    <PrimaryLayout user={user}>
      <MainHeroSection />
      <LandingNumberSection />
    </PrimaryLayout>
  );
}
