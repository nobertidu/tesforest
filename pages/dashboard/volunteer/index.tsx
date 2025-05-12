import React from "react";

import FooterSection from "../../../components/dashboard/homeComponents/FooterSection";
import VolunteerHeroSection from "../../../components/dashboard/volunteerComponents/VolunteerHeroSection";
import ButtonComponent from "../../../components/dashboard/volunteerComponents/ButtonComponent";
import VolunteerStories from "../../../components/dashboard/volunteerComponents/VolunteerStories";

const Project = () => {
  return (
    <div>
      <VolunteerHeroSection />
      <div className="flex justify-center">
      <VolunteerStories/>
      </div>
      <div className="flex justify-center my-[135px]">
        <ButtonComponent />
      </div>
     
      <FooterSection />
    </div>
  );
};

export default Project;
