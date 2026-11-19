import React from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedApps from "@/components/FeaturedApps";
import TechStack from "@/components/TechStack";
import LatestUpdates from "@/components/LatestUpdates";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Hero />
      <FeaturedApps />
      <AboutSection />
      <TechStack />
      <LatestUpdates />
    </div>
  );
}
