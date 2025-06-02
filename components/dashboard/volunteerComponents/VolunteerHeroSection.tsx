import React from "react";
import Navbar from "../homeComponents/Navbar";
import ButtonComponent from "./ButtonComponent";

const VolunteerHeroSection = () => {
  return (
    <div
      className="md:min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/dashboard/images/BgTexture.png')" }}
    >
      <Navbar />

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-[120px] py-12 md:py-0 gap-8 md:gap-0">
        {/* Left content: Heading, Paragraph, Button */}
        <div className=" text-center md:text-left">
          <h1 className="text-[32px] md:text-[64px] font-bold leading-tight">
            JOIN THE GREEN MOVEMENT
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#7A7A7A] max-w-[400px] md:max-w-[450px] mx-auto md:mx-0 my-4 md:my-[44px]">
            Be a part of something bigger. Whether you&apos;re joining solo or as a
            family, your time and hands help restore forests and build a
            sustainable future.
          </p>

          <div className="flex justify-center md:justify-start">
            <ButtonComponent />
          </div>
        </div>

        <div className=" ">
          <img src="/dashboard/images/VolunteerImage.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default VolunteerHeroSection;
