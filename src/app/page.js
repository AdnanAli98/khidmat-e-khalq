import Carousel from "@/components/carouselSection/Carousel";
import CounterSection from "@/components/counterSection/CounterSection";
import ProgramSection from "@/components/programsSection/programSection";
import programs from "@/components/programsSection/programData"; 
import AboutSection from "@/components/aboutSection/AboutSection";
import LeadershipSection from "@/components/leadershipSection/leadershipSection"; 
import data from "@/components/leadershipSection/data"; 
import LatestNewsSection from "@/components/newsSection/LatestNewsSection";
import newsData from "@/components/newsSection/newsData";
import GoalsGrid from "@/components/goalsSection/GoalsGrid";
import gridData from "@/components/goalsSection/gridData";
import BannerSlider from "@/components/bannerSection/bannerSlider";


export default function Home() {
  return (
    <div>
      <BannerSlider />
      <CounterSection />
      <ProgramSection programs={programs} /> 
      <GoalsGrid gridData={gridData} />  
      <Carousel />
      <AboutSection />
      <LeadershipSection data={data} />  
      <LatestNewsSection newsData={newsData} />
    </div>
  );
}
