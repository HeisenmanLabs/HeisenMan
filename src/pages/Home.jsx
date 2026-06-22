import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { ContactSection } from "../components/ContactSection";
import { ErrorBoundary } from "../components/ErrorBoundary";
import React from "react";

export const Home = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        {/* Background Effects */}

        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <WhyChooseUsSection />
          <ContactSection />
        </main>

        {/* Footer */}
      </div>
    </ErrorBoundary>
  );
};
