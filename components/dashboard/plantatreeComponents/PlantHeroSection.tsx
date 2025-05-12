import React from "react";
import Navbar from "../homeComponents/Navbar";

const stats = [
    { value: "321", label: "Trees Planted" },
    { value: "85%", label: "Survival rate" },
    { value: "034", label: "Trees were planted today" },
    { value: "250mpp", label: "CO2 removed" },
  ];


const PlantHeroSection = () => {
  return (
    <div
      className="md:min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/dashboard/images/BgTexture.png')" }}
    >
      <Navbar />

      <div className="md:px-[120px] flex flex-col items-center justify-center text-center ">
  <p className="text-[14px] md:text-[20px] text-[#7A7A7A] font-medium my-[24px]">MAKE A DIFFERENCE</p>
  <h1 className="md:text-[64px] text-center text-[34px] font-bold ">PLANT A TREE TODAY</h1>

  <p className="text-[16px] text-[#7A7A7A] md:w-[473px] w-[325px] font-medium text-center">
    Your contribution helps restore
    forests and fight climate change by funding tree planting
    initiatives.
  </p>

  <button
        type="button"

        className="w-[176px] mt-[60px] mb-[24px] justify-center flex rounded-[24px] text-white py-2"
        style={{
          background: "linear-gradient(to right, #75A43E, #007741)",
        }}
      >
        Contribute Now
      </button>


     {/* Stats */}
     <div className="flex flex-wrap gap-4 bg-[#f9fdf7] p-4 rounded-md justify-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] rounded-md md:px-4 px-2 py-2 min-w-[0px] flex items-center justify-center space-x-2"
          >
            <span className="text-[#007741] font-bold md:text-[32px] text-[16px] leading-none">
              {stat.value}
            </span>
            <span className="md:text-[14px] text-[10px] text-[#7a7a7a88] whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        ))}
      </div>



</div>

    </div>
  );
};

export default PlantHeroSection;
