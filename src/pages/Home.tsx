import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import HowWeWork from "@/components/HowWeWork";
import Vision from "@/components/Vision";
import SocialProof from "@/components/SocialProof";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";

const Home = () => {
  return (
    <main className="pt-16">
      <Hero />
      <Features />
      <Benefits />
      <HowWeWork />
      <Vision />
      <SocialProof />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
};

export default Home;