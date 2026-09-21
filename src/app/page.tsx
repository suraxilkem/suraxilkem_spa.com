import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Industries } from "@/components/sections/Industries";
import { WhySuraxil } from "@/components/sections/WhySuraxil";
import { OurApproach } from "@/components/sections/OurApproach";
import { SuraxilDifference } from "@/components/sections/SuraxilDifference";
import { Catalog } from "@/components/sections/Catalog";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustExperience } from "@/components/sections/TrustExperience";
import { Faq } from "@/components/sections/Faq";
import { SolutionDetails } from "@/components/sections/SolutionDetails";
import { CustomSolutions } from "@/components/sections/CustomSolutions";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Industries />
      <WhySuraxil />
      <OurApproach />
      <SuraxilDifference />
      <Catalog />
      <HowItWorks />
      <TrustExperience />
      <Faq />
      <SolutionDetails />
      <CustomSolutions />
      <Contact />
    </main>
  );
}
