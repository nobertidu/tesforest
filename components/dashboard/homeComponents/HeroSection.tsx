import React, { useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("PROJECT AREA");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const stats = [
    { value: "321", label: "Trees Planted" },
    { value: "85%", label: "Survival rate" },
    { value: "24cm/yr", label: "Tree Growth Rate (cm/year)" },
    { value: "28%", label: "Canopy Cover" },
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="inline-flex rounded-full border border-[#007741] overflow-hidden">
        <button
          onClick={() => handleTabClick("PROJECT AREA")}
          className={`px-6 py-2 text-[14px] md-text-[16px] font-semibold transition-colors duration-200 ${
            activeTab === "PROJECT AREA"
              ? "bg-[#007741] text-white"
              : "bg-transparent text-black"
          }`}
        >
          PROJECT AREA
        </button>
        <button
          onClick={() => handleTabClick("PORTUGAL")}
          className={`px-6 py-2 md-text-[16px] text-[14px] font-semibold transition-colors duration-200 ${
            activeTab === "PORTUGAL"
              ? "bg-[#007741] text-white"
              : "bg-transparent text-black"
          }`}
        >
          PORTUGAL
        </button>
      </div>

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

      {/* Image display */}
      <div>
        {activeTab === "PROJECT AREA" ? (
          <img src="/dashboard/images/ProjectMap.png" alt="Project Area" />
        ) : (
          <img src="/dashboard/images/PortugalMap.png" alt="Portugal Map" />
        )}
      </div>

      {/* Plant Button */}
      <div className="pb-[80px]">
        <Link
          href="/plant-a-tree"
          className="cursor-pointer text-white font-medium bg-[#007741] hover:bg-[#75A43E] md:px-9 px-4 py-2 rounded-full text-[14px] md:text-[16px]"
        >
          Plant a Tree
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
