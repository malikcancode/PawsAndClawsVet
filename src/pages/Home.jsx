import Intro from "../components/Intro";
import ScrollingText from "../components/ScrollingText";
import Services from "../components/Services";
import VisitUs from "../components/VisitUs";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <ScrollingText />
      <VisitUs />
    </>
  );
}

export default Home;
