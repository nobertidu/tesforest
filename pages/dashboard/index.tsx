import React from "react";
import Navbar from "../../components/dashboard/homeComponents/Navbar";
import HeroSection from "../../components/dashboard/homeComponents/HeroSection";
import SliderSection from "../../components/dashboard/homeComponents/SliderSection";
import SoilQualitySection from "../../components/dashboard/homeComponents/SoilQualitySection";
import ErosionControlSection from "../../components/dashboard/homeComponents/ErosionControlSection";
import AirQualitySection from "../../components/dashboard/homeComponents/AirQualitySection";
import FooterSection from "../../components/dashboard/homeComponents/FooterSection";
import FireResistanceSection from "../../components/dashboard/homeComponents/FireResistanceSection";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SliderSection />
      <SoilQualitySection />
      <ErosionControlSection />
      <AirQualitySection />
      <FireResistanceSection />
      <FooterSection />
    </div>
  );
};

export default Dashboard;
