import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { month: "Jan", value: 5.0 },
  { month: "Feb", value: 4.8 },
  { month: "Mar", value: 4.9 },
  { month: "Apr", value: 5.0 },
  { month: "May", value: 5.1 },
  { month: "Jun", value: 5.3 },
  { month: "Jul", value: 5.2 },
  { month: "Aug", value: 5.4 },
  { month: "Sep", value: 5.6 },
  { month: "Oct", value: 6.0 },
  { month: "Nov", value: 6.2 },
  { month: "Dec", value: 6.1 },
];

const SoilQualitySection = () => {
  return (
    <div className=" lg:px-[80px] py-[60px] flex justify-center">
      <div className="bg-[#4D683D] w-full max-w-[1299px] rounded-[16px] p-[24px] flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Chart Section */}
        <div className="flex-1 text-white pr-0 lg:pr-4 w-full">
          <h2 className="text-[20px] font-semibold mb-2">Soil Quality</h2>
          <p className="text-[12px] mb-2">Rainfall</p>
          <div className="bg-white/10 rounded-lg p-2 mb-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={data}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRainfall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#ffffff33" vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke="#fff"
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[3.6, 6.2]}
                  stroke="#fff"
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="none"
                  fill="url(#colorRainfall)"
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    r: 4,
                    stroke: "#fff",
                    strokeWidth: 2,
                    fill: "#4D683D",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between pt-4 text-white text-[14px]  sm:flex-row gap-4">
            <div>
              <h1 className="text-[20px]">Organic Matter</h1>
              <p>3.7%</p>
            </div>
            <div className="text-[12px]">
              <p>Nitrogen Level: 4.6 kg</p>
              <p>Phosphorous Level: 2.3 kg</p>
              <p>Potassium Level: 3.1 kg</p>
            </div>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/dashboard/images/GrassSand.png"
            alt="Plant"
            className="max-w-[349px] max-h-[323px] -mb-[150px] lg:-mb-[150px] mb-0"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1 text-white text-center max-w-[356px]">
          <h1 className="text-[44px] font-bold mb-2">84.56%</h1>
          <p className="text-[14px] font-medium">
            Healthy soil ensures that plants thrive by providing nutrients and
            preventing erosion, while adequate water retention supports the
            ecosystem by stabilizing groundwater levels and promoting biodiversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoilQualitySection;
