import Hero from "@/components/home/Hero";
import AgentStrip from "@/components/home/AgentStrip";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import ToolsShowcase from "@/components/home/ToolsShowcase";
import Benchmarks from "@/components/home/Benchmarks";
import FrameworkStrip from "@/components/home/FrameworkStrip";
import Changelog from "@/components/home/Changelog";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import AskAI from "@/components/home/AskAI";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AgentStrip />
      <FeaturesGrid />
      <ToolsShowcase />
      <Benchmarks />
      <FrameworkStrip />
      <Changelog />
      <Testimonials />
      <FAQ />
      <AskAI />
      <FinalCTA />
    </>
  );
}
