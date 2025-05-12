import React from "react";
import Navbar from "../homeComponents/Navbar";

const ProjectHeroSection = () => {
  return (
    <div
    className="md:min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/dashboard/images/BgTexture.png')" }}
    
    >
      <Navbar />

      <div className="px-4 md:px-[60px] lg:px-[120px] pt-10">
        <p className="text-[14px] md:text-[20px] lg:text-[20px] text-[#7A7A7A] font-medium mb-2">OUR JOURNEY, YOUR IMPACT</p>
        <h1 className="text-[28px] md:text-[42px] lg:text-[64px] font-bold leading-tight mb-6 w-[317px] md:w-full">
          EXPLORE THE FOREST PROJECTS THAT SHAPE OUR FUTURE
        </h1>

        
      <div className="flex justify-between my-[44px] text-[#7A7A7A] text-[16px] space-x-[376px]">
        <div>
          <p>Each project  offers an in-depth look into Roburna Forest’s reforestation and sustainability efforts.</p>
        </div>

        <div className="hidden md:flex">
          <p>Read our blog to discover innovative tree planting initiatives that restore forests and promote a healthier planet.</p>
        </div>
      </div>
      </div>

    </div>
  );
};

export default ProjectHeroSection;
