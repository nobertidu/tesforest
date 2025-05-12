import React from "react";

import FooterSection from "../../../components/dashboard/homeComponents/FooterSection";
import PlantHeroSection from "../../../components/dashboard/plantatreeComponents/PlantHeroSection";
import PlantImageSection from "../../../components/dashboard/plantatreeComponents/PlantImageSection";
import PlantTreeSection from "../../../components/dashboard/projectComponents/PlantTreeSection";
import PlantCertificateSection from "../../../components/dashboard/plantatreeComponents/PlantCertificateSection";
import PlantContact from "../../../components/dashboard/plantatreeComponents/PlantContact";

const PlantATree = () => {
  return (
    <div>
      <PlantHeroSection />
      <PlantImageSection />
      <PlantTreeSection />
      <PlantCertificateSection />
      <PlantContact />
      <FooterSection />
    </div>
  );
};

export default PlantATree;
