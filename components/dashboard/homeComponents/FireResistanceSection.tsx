import React from "react";

const FireResistanceSection = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 md:max-w-[780px] min-w-[327px] items-center">
        {/* Left Box */}
        <div className="bg-[#4D683D] rounded-[8px] p-[24px] text-white w-full lg:min-w-[500px] min-h-[205px]">
          <h1 className="text-[18px] lg:text-[20px] mb-4 font-semibold">
            Fire Resistance Parameters
          </h1>
          <ul className="space-y-3 font-medium text-[14px]">
            <li>Fire-Prone Areas: 12%</li>
            <li>Fire Prevention Effectiveness: 85%</li>
            <li>Risk Level: Low (Green)</li>
          </ul>
        </div>

        {/* Right Box with Image */}
        <div className="bg-[#F4FFE7] rounded-[8px] p-4 flex items-center justify-center w-full">
          <img
            src="/dashboard/images/Fire.png"
            alt="Fire Safety"
            className="w-[220px] lg:max-w-[349px] lg:max-h-[323px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FireResistanceSection;
