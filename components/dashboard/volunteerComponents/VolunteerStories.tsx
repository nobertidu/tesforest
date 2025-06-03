"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoArrowDownOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Faith Braun",
    image: "/dashboard/images/faithImage.png",
    date: "25th January, 2024",
    quote:
      "Volunteering with Roburna Forest changed my perspective on environmental impact. Planting trees with my kids was not just fulfilling—it was empowering. We left knowing we contributed to something that will outlive us.",
    location: "Maria Lopez, Lisbon, Portugal",
  },
  {
    name: "John Doe",
    image: "/dashboard/images/faithImage.png",
    date: "3rd March, 2024",
    quote:
      "It was a magical experience. Seeing the forest grow, knowing we planted some of it, brought tears to my eyes.",
    location: "John Doe, Berlin, Germany",
  },
  {
    name: "Linda Green",
    image: "/dashboard/images/faithImage.png",
    date: "10th April, 2024",
    quote:
      "My company joined as a team activity — we bonded over nature and left inspired to live more sustainably.",
    location: "Linda Green, Cape Town, South Africa",
  },

  {
    name: "Godwin Neem",
    image: "/dashboard/images/faithImage.png",
    date: "25th April, 2024",
    quote:
      "I love this and happy I joined as a team activity — we bonded over nature and left inspired to live more sustainably.",
    location: "Linda Green, Cape Town, South Africa",
  },
];

const VolunteerStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="my-[44px] max-w-[1201px] mx-auto max-h-[712px]">
      {/* Header */}
      <div className="bg-[#74a43e98] max-w-[202px] rounded-[4px] flex justify-center items-center mx-auto py-1 px-3 mb-8">
        <div className="flex items-center gap-2 text-[16px] font-medium text-black">
           <>{IoArrowDownOutline({ size: 16 })}</>
        
          <p className="m-0">See Volunteer Stories</p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col items-center justify-center mx-auto rounded-[8px] bg-[#2C2C2C] px-6 py-8">
        {/* Slider Thumbnails */}
        <div className="flex items-end gap-4 mb-6">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`bg-white p-2 rounded-full ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white/20"
            }`}
          >
              <>{FaChevronLeft({ size: 16 })}</>
         
          </button>
          <button
            onClick={next}
            disabled={currentIndex === testimonials.length - 1}
            className={`bg-white p-2 rounded-full ${
              currentIndex === testimonials.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-white/20"
            }`}
          >
             <>{FaChevronRight({ size: 16 })}</>
         
          </button>

          <div className="flex gap-4">
            {testimonials.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-[250px] h-[200px] rounded-[8px] overflow-hidden cursor-pointer border transition-all duration-300 ${
                  index === currentIndex
                    ? "border-2 border-white"
                    : "border border-transparent"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                {/* Blur overlay + noise */}
                <div className="absolute bottom-0 h-[50px] w-full text-white uppercase text-[16px] text-center font-bold flex justify-center items-center backdrop-blur-md bg-white/30 z-10">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Testimonial */}
        <div className="bg-white text-black p-6 rounded-lg min-h-[388px] w-[1113px] flex flex-col justify-center">
          <p className="text-[16px] text-[#7A7A7A] mb-[50px] uppercase">
            {testimonials[currentIndex].date}
          </p>
          <p className="text-[24px] italic font-bold text-[#3A3A3A] leading-relaxed mb-4 uppercase text-center">
            “{testimonials[currentIndex].quote}”
          </p>
          <p className="text-[16px] uppercase font-bold text-right w-full mt-[64px]">
            — {testimonials[currentIndex].location}
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden bg-[#2C2C2C] w-full px-4 py-8 text-white relative flex justify-center">
        <div className="relative w-full max-w-[330px] flex items-center justify-center overflow-hidden">
          {/* Left Button */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`absolute -left-1 top-1/2 transform -translate-y-1/2 p-1  text-white rounded-full z-20 transition-opacity duration-300 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100"
            }`}
          >
              <>{FaChevronLeft({ size: 16 })}</>
        
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center space-y-4 bg-[#1A1A1A] p-6 rounded-lg"
                >
                  <div className="relative w-[100px] h-[100px] mx-auto rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-white/60">{item.date}</p>
                  <p className="text-[14px] italic text-center leading-relaxed">
                    “{item.quote}”
                  </p>
                  <p className="text-[13px] font-medium uppercase">
                    — {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={currentIndex === testimonials.length - 1}
            className={`absolute -right-1 top-1/2 transform -translate-y-1/2 p-1  text-white rounded-full z-20 transition-opacity duration-300 ${
              currentIndex === testimonials.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100"
            }`}
          >
              <>{FaChevronRight({ size: 16 })}</>
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerStories;
