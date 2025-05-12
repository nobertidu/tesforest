import React from "react";
import Navbar from "../homeComponents/Navbar";

const BlogHeroSection = () => {
  return (
    <div
      className="min-h-[90%] bg-cover bg-center"
      style={{ backgroundImage: "url('/dashboard/images/BgTexture.png')" }}
    >
      <Navbar />

      <div className="px-4 md:px-[120px]">
        <div>
          <h1 className="text-[36px] md:text-[64px] font-bold">
            BLOG
          </h1>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:max-w-[522px] my-4 md:my-[44px]">
              <p className="text-[14px] md:text-[16px] text-[#7A7A7A]">
                Be a part of something bigger. Read our blog to discover innovative tree planting initiatives that restore forests and promote a healthier planet.
              </p>

              <div className="flex w-full max-w-md mt-4">
                <input
                  type="text"
                  placeholder="Search Blog"
                  className="flex-grow p-2 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <button
                  className="bg-[#007741] hidden md:block text-white px-5 md:px-7 mx-2 md:mx-[8px] rounded-full hover:bg-green-800 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="md:max-w-[380px] mt-6 md:mt-0">
              <p className="text-[14px] md:text-[16px] font-medium text-[#7A7A7A]">
                Join us in our mission to combat climate change and revitalize our planet! Your support funds vital tree planting projects that restore forests and promote a healthier environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
