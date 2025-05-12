import React from "react";
import ProjectHeroSection from "../../../components/dashboard/projectComponents/ProjectHeroSection";
import DetailsSection from "../../../components/dashboard/projectComponents/DetailsSection";
import ForestRevivalSection from "../../../components/dashboard/projectComponents/ForestRevivalSection";
import PlantTreeSection from "../../../components/dashboard/projectComponents/PlantTreeSection";
import SubmitSection from "../../../components/dashboard/projectComponents/SubmitSection";
import FooterSection from "../../../components/dashboard/homeComponents/FooterSection";

const Project = () => {
  return (
    <div>
  <ProjectHeroSection/>
  <DetailsSection/>
  <ForestRevivalSection/>
  <PlantTreeSection/>
  <SubmitSection/>
  <FooterSection/>

   
    </div>
  );
};

export default Project;
