"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const projectData = [
  {
    title: "FOREST REVIVAL ‘25",
    description:
      "Be a part of the solution! Your donations fuel initiatives that plant trees, helping to heal our environment and tackle climate change.",
    date: "January, 2025",
    location: "Lisbon, Portugal",
    image: "/dashboard/images/Plant.png",
  },
  {
    title: "FOREST REVIVAL ‘25",
    description:
      "Be a part of the solution! Your donations fuel initiatives that plant trees, helping to heal our environment and tackle climate change.",
    date: "2nd March, 2025",
    location: "Lisbon, Portugal",
    image: "/dashboard/images/Plant.png",
  },
  {
    title: "FOREST REVIVAL ‘25",
    description:
      "Be a part of the solution! Your donations fuel initiatives that plant trees, helping to heal our environment and tackle climate change.",
    date: "2nd March, 2025",
    location: "Lisbon, Portugal",
    image: "/dashboard/images/Plant.png",
  },
  {
    title: "FOREST REVIVAL ‘25",
    description:
      "Be a part of the solution! Your donations fuel initiatives that plant trees, helping to heal our environment and tackle climate change.",
    date: "5th April, 2025",
    location: "Lisbon, Portugal",
    image: "/dashboard/images/Plant.png",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    if (currentIndex + visibleCards < projectData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const [mobileIndex, setMobileIndex] = useState(0);
  const nextMobile = () => {
    if (mobileIndex < projectData.length - 1) {
      setMobileIndex(mobileIndex + 1);
    }
  };
  const prevMobile = () => {
    if (mobileIndex > 0) {
      setMobileIndex(mobileIndex - 1);
    }
  };

  return (
    <section className="mt-[150px] md:mt-10">
      {/* === DESKTOP VIEW === */}
      <div className="hidden md:flex mt-7">
        <div className="pl-[120px]">
          <p className="font-bold text-[28px]">PROJECTS</p>
          <p className="font-medium text-[16px] text-[#7A7A7A] pr-4">
            Discover all ongoing and completed <br />
            environmental initiatives by Roburna Forest.
          </p>
        </div>

        <div className="relative max-w-[1000px]">
          <div className="flex gap-4 transition-transform duration-500 ease-in-out justify-end">
            {projectData
              .slice(currentIndex, currentIndex + visibleCards)
              .map((project, index) => (
                <div
                  key={index}
                  className={`min-w-[300px] max-w-[300px] overflow-hidden shadow-lg transition-opacity duration-300 ${
                    index === 0 ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <div className="relative h-[517px] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md text-white p-4">
                      <h3 className="text-[16px] font-bold">{project.title}</h3>
                      <p className="text-[14px] font-medium text-white/60 mt-1">
                        {project.description}
                      </p>
                      <div className="flex justify-between text-[12px] my-3">
                        <span>{project.date}</span>
                        <span className="flex items-center gap-1">
                          <IoLocationOutline /> {project.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-8 h-8 rounded-full bg-[#797979] text-white flex items-center justify-center hover:bg-gray-400 transition disabled:opacity-50 cursor-pointer"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex + visibleCards >= projectData.length}
              className="w-8 h-8 rounded-full bg-[#797979] text-white flex items-center justify-center hover:bg-gray-400 transition disabled:opacity-50 cursor-pointer"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* === MOBILE VIEW === */}
      <div className="md:hidden flex flex-col items-center min-w-[348px] mt-4">
        <div className="mb-4 w-full px-4">
          <p className="font-bold text-[24px]">PROJECTS</p>
          <p className="font-medium text-[14px] text-[#7A7A7A] leading-5">
            Discover all ongoing and completed <br />
            environmental initiatives by Roburna Forest.
          </p>
        </div>

        <div className="relative w-full px-4">
          <div className="relative h-[517px] w-full overflow-hidden shadow-lg">
            <Image
              src={projectData[mobileIndex].image}
              alt={projectData[mobileIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md text-white p-4">
              <h3 className="text-[16px] font-bold">{projectData[mobileIndex].title}</h3>
              <p className="text-[14px] font-medium text-white/60 mt-1">
                {projectData[mobileIndex].description}
              </p>
              <div className="flex justify-between text-[12px] my-3">
                <span>{projectData[mobileIndex].date}</span>
                <span className="flex items-center gap-1">
                  <IoLocationOutline /> {projectData[mobileIndex].location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={prevMobile}
            disabled={mobileIndex === 0}
            className="w-8 h-8 rounded-full bg-[#797979] text-white flex items-center justify-center hover:bg-gray-400 transition disabled:opacity-50 cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextMobile}
            disabled={mobileIndex >= projectData.length - 1}
            className="w-8 h-8 rounded-full bg-[#797979] text-white flex items-center justify-center hover:bg-gray-400 transition disabled:opacity-50 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
