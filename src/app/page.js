import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import WeConnectYouInstantly from "./components/WeConnectYouInstantly"
import PayLessStress from "./components/PayLessStress";
import HowItWork from './components/HowItWork'
import RealReview from './components/RealReview'
import WhyThousands from "./components/WhyThousands";
import PreviewYourSavings from "./components/PreviewYourSavings"
import FrequentlyAsked from "./components/FrequentlyAsked";
import FindYourLowestAutoRate from "./components/FindYourLowestAutoRate";
import NeedQuoteFast from "./components/NeedQuoteFast";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeConnectYouInstantly/>
      <PayLessStress/>
      <HowItWork/>
      <RealReview/>
      <WhyThousands/>
      <PreviewYourSavings/>
      <FrequentlyAsked/>
      <FindYourLowestAutoRate/>
      <NeedQuoteFast/>
    </>
  );
}
