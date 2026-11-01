import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalBackground } from "@/components/ui/StarfieldCanvas";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { TransparencySection } from "@/components/sections/TransparencySection";

export default function HomePage() {
  return (
    <>
      {/* Fixed full-page space environment — z-index 0 */}
      <GlobalBackground />

      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PrivacySection />
        <TransparencySection />
      </main>
      <Footer />
    </>
  );
}
