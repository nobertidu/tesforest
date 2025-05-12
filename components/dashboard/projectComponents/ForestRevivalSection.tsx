import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';

const ForestRevivalSection = () => {
  return (
    <div>
      <div className="w-full rounded-2xl md:px-8 pb-8 text-black mt-9 md:mt-0">
        <div className="relative">
          {/* Background Image */}
          <img
            src="/dashboard/images/ForestRevivalSection.png"
            alt=""
            className="w-full h-screen md:h-full"
          />

          {/* Overlay Content */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col  p-0 md:p-8">
            {/* Title & Progress Section */}
            <div className="flex flex-col md:flex-row md:justify-between items-center md:mx-[86px]  md:my-[53px] my-[70px] gap-4 ">
              {/* Text */}
              <div className="text-center md:text-left">
                <h2 className="text-[20px] font-bold">FOREST REVIVAL '25</h2>
                <p className="text-[14px] mt-1 flex justify-center md:justify-start items-center gap-1 text-black">
                  <IoLocationOutline /> Lisbon, Portugal
                </p>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center w-full md:w-[60%] max-w-[298px] px-4 md:px-0">
                <div className="relative w-full h-3 bg-green-100 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
                    style={{ width: '44%' }}
                  ></div>
                </div>
                <span className="ml-2 text-[16px] font-medium">44%</span>
              </div>
            </div>

            {/* Stacked Image */}
           
            <div className="relative flex justify-center pt-[55px] md:pt-[35px]  ">
              {/* Bottom Image */}
              <img
                src="/dashboard/images/RevivalImg1.png"
                alt=""
                className="relative top-[50%] md:top-0 z-0  w-full md:w-auto"
              />

              {/* Top Image */}
              <img
                src="/dashboard/images/RevivalImg2.png"
                alt=""
                className="
                  absolute 
                   md:top-[150px] 
                  left-1/2 transform -translate-x-1/2 z-10 
                  w-[300px] sm:w-[180px] md:w-auto
                "
              />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div>
          <p className=" text-[14px] md:text-[16px] font-bold text-center py-3 px-2">
            LISBON GREENBELT PROJECT” (2022–2023) – PLANTED 12,000 TREES
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForestRevivalSection;
