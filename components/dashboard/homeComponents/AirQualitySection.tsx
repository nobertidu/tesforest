import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Annual\nTimber\nGrowth", value: 4500 },
  { name: "Total\nTimber\nGrowth", value: 3900 },
];

const AirQualitySection = () => {
  return (
    <div className=" lg:px-[80px] py-[60px] flex justify-center">
      <div className="bg-[#4D683D] w-full max-w-[1299px] rounded-[16px] p-[24px] lg:p-[70px] flex flex-col lg:flex-row justify-between items-center gap-10">
        
        {/* Left Section */}
        <div className="flex-1 text-white text-center lg:text-left">
          <h2 className="text-[20px] lg:text-[24px] font-semibold mb-4">
            Air Quality Improvement.
          </h2>
          <div className="space-y-2">
            <p className="text-[28px] lg:text-[44px] font-bold">
              PM 2.5 <span className="text-[16px] lg:text-[24px] font-medium"> µg/m³</span>
            </p>
            <p className="text-[28px] lg:text-[44px] font-bold">
              NO₂: 0.03 <span className="text-[16px] lg:text-[24px] font-medium"> ppm</span>
            </p>
            <p className="text-[28px] lg:text-[44px] font-bold">
              CO: 0.01 <span className="text-[16px] lg:text-[24px] font-medium"> ppm</span>
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center mb-[80px] md:mb-0">
          <img
            src="/dashboard/images/AirQuality.png"
            alt="Plant"
            className="max-w-[280px] lg:max-w-[349px] max-h-[260px] lg:max-h-[323px] -mb-10 lg:-mb-[170px]"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 text-white flex flex-col items-center lg:items-start w-full">
          <div className="mb-2 text-center lg:text-left">
            <h2 className="text-[20px] lg:text-[24px] font-semibold mb-1">Timber Growth</h2>
            <p className="text-sm">Kilos</p>
          </div>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barSize={60}>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "white", fontSize: 12 }}
                  interval={0}
                  tickFormatter={(value) => value.split("\n").join(" ")}
                />
                <YAxis
                  tick={{ fill: "white", fontSize: 12 }}
                  domain={[0, 5000]}
                  tickCount={5}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "#2f4f4f", border: "none" }}
                />
                <Bar dataKey="value" fill="#FFFFFF" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQualitySection;
