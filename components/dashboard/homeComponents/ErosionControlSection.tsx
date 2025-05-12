import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Location A', value: 59.71 },
  { name: 'Location B', value: 40.29 },
];

const COLORS = ['#8FD29A', '#E27272'];

const ErosionControlSection = () => {
  return (
    <div className="px-4 lg:px-[80px] py-[60px] bg-[#f8fcf6] mx-4 lg:mx-[60px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-[20px] font-semibold">Erosion Control</h1>
          <p className="text-[12px] font-medium mb-4">Soil Stability by Location</p>

          <div className="text-[14px] space-y-1">
            <p>Location A: <strong>59.71%</strong></p>
            <p>Location B: <strong>40.29%</strong></p>
          </div>
        </div>

        {/* Donut Chart Section */}
        <div className="w-[200px] h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center text-[12px] mt-2">
            <span className="text-[#E27272] font-semibold mr-1">40.29%</span>
            <span className="text-[#8FD29A] font-semibold">59.71%</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#4D683D] rounded-[8px] p-[24px] max-w-[500px] text-white text-left mt-5 md:mt-0">
          <h1 className="text-[20px] mb-4">Biodiversity Report</h1>
          <ul className="space-y-5 list-disc pl-5 text-[16px]">
            <li>Wildlife: 46 species recorded, including 15 mammals and 23 birds.</li>
            <li>Pollinators: 120 bees & 85 butterflies/m², with 78% pollination success.</li>
            <li>Soil: 32 fungal species, 450 mg C/kg microbial biomass, 5.2% organic matter.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErosionControlSection;
