import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/Problems";
import BringingValue from "./components/BringingValue";
import GetInTouch from "./components/GetInTouch";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <BringingValue />
      <GetInTouch />
      <Team />
    </div>
  );
}
