import React, { useState, useEffect } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const slides = [
  {
    image: "/dashboard/images/Co2.png",
    title: "Carbon Sequestered",
    estimate: "2024 Estimate: 150,000 tons CO₂/year",
    trend: "Trend: +8.2% from 2023",
    equivalent: "Equivalent to: Removing 32,000 cars from the road annually",
    heading: "Carbon Sequestration & Climate Impact",
    description:
      "Forests play a crucial role in absorbing carbon dioxide from the atmosphere, helping mitigate climate change. This section estimates the total amount of carbon sequestered annually, showing how much CO₂ is absorbed by trees.",
  },
  {
    image: "/dashboard/images/Co2.png",
    title: "Oxygen Generation",
    estimate: "Annual Output: 12,500 kg O₂",
    trend: "Trend: +6.5% from 2023",
    equivalent: "Oxygen for 25,000 people per year",
    heading: "Oxygen Production Impact",
    description:
      "Healthy forests not only absorb carbon but also produce significant amounts of oxygen. This data highlights annual oxygen production, reflecting the forest's contribution to breathable air.",
  },
  {
    image: "/dashboard/images/Co2.png",
    title: "Air Quality Enhancement",
    estimate: "Air Purity Improvement: 14%",
    trend: "NOₓ Reduction: -9%",
    equivalent: "Improved conditions for 100,000 residents",
    heading: "Pollution Reduction",
    description:
      "By reducing nitrogen dioxide and carbon monoxide, forests help improve air quality. This section highlights the positive environmental changes from forest preservation.",
  },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/dashboard/images/SliderBG.png')" }}
    >
      <div className="relative backdrop-blur-lg border border-white/20 rounded-[24px] shadow-2xl w-full max-w-[1200px] text-white overflow-hidden p-6 md:p-12 mb-[90px] mt-[30px]">
        <div className="relative z-10 space-y-12">
          {/* Slider Box */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-11 items-center border border-white/30 rounded-2xl p-4 md:p-6 max-w-[900px] mx-auto transition-all duration-700 ease-in-out">
            {/* Image Card */}
            <div
              className="relative bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-4 w-full max-w-[280px] min-h-[271px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="relative z-10 text-white text-center">
                <h3 className="text-[20px] font-semibold my-3">
                  {slide.title}
                </h3>
                <p className="text-[16px]">{slide.estimate}</p>
                <p className="text-[16px] my-3">{slide.trend}</p>
                <p className="text-[16px]">{slide.equivalent}</p>
              </div>
              <div className="absolute inset-0 bg-black/30 z-0 rounded-xl" />
            </div>

            {/* Text */}
            <div className="w-full text-center md:text-left">
              <h2 className="text-[24px] md:text-[26px] font-bold mb-2">
                {slide.heading}
              </h2>
              <p className="text-[15px] md:text-[16px] text-white/80 mx-auto md:mx-0 max-w-md">
                {slide.description}
              </p>

              {/* Dots */}
              <div className="flex justify-center md:justify-start space-x-2 mt-4">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      index === currentSlide ? "bg-white" : "bg-white/30"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Arrows (only desktop) */}
            <div
              onClick={prevSlide}
              className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer hidden md:block"
            >
              {IoIosArrowDropleft({ size: 24, color: "white" })}
            </div>

            <div
              onClick={nextSlide}
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer hidden md:block"
            >
              {IoIosArrowDropright({ size: 24, color: "white" })}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto  text-center md:text-left">
            <div>
              <h3 className="text-[24px] md:text-[34px] font-bold mb-2">
                Oxygen Production
              </h3>
              <p className="text-[15px] md:text-[16px]">12,500 kg O₂/year</p>
              <p className="text-[15px] md:text-[16px]">
                Equivalent to: 🏃Oxygen for 25,000 people annually
              </p>
            </div>
            <div>
              <h3 className="text-[24px] md:text-[34px] font-bold mb-1">
                Air Quality Improvement
              </h3>
              <p className="text-[15px] md:text-[16px] mb-2">
                -14% (Improved air purity), NOₓ Reduction: -9%, Lower nitrogen
                dioxide emissions
              </p>
              <p className="text-[15px] md:text-[16px]">CO Levels: Stable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
