'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";

const Main = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-[#00162b]">
      <div className="container mx-auto py-14 sm:py-20 px-4">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 transition-all duration-300`}
        >
          {/* 1st content */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl">
            <img
              src="/imgAssets/content-1.avif"
              alt="content-1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6 z-10">
              <h1 className="text-lg sm:text-3xl font-bold text-white mb-3">
                The F1 2025 Title Fight Heats Up in Mexico
              </h1>
              <Button className="bg-[#db0a40] rounded-full text-xs sm:text-sm lg:text-base hover:bg-[#c3093b] w-fit flex items-center gap-2">
                <FaPlay /> Watch Video
              </Button>
            </div>
          </div>

          {/* 2nd content */}
          <div className="col-span-2 relative overflow-hidden rounded-2xl">
            <img
              src="/imgAssets/content-2.avif"
              alt="content-2"
              className="h-65 w-190 object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 z-10">
              <h1 className="text-lg sm:text-xl font-bold text-white mb-2">
                Oracle Strategy Guide: Sao Paulo Grand Prix 2025
              </h1>
              <Button className="bg-[#db0a40] rounded-full text-xs sm:text-sm hover:bg-[#c3093b] w-fit flex items-center gap-2">
                <FaPlay /> Watch Video
              </Button>
            </div>
          </div>

          {/* 3rd content */}
          <div
            className={`col-span-2 sm:col-span-1 relative overflow-hidden rounded-2xl ${
              !showAll ? "hidden sm:block" : ""
            }`}
          >
            <img
              src="/imgAssets/content-3.avif"
              alt="content-3"
              className="h-65 w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
              <h1 className="text-sm font-semibold sm:text-lg sm:font-bold text-white mb-2">
                The Secret Life of an F1 Test and Reserve Driver
              </h1>
              <Button className="bg-[#db0a40] rounded-full text-xs sm:text-sm hover:bg-[#c3093b] w-fit flex items-center gap-2">
                <FaPlay /> Watch Video
              </Button>
            </div>
          </div>

          {/* 4th content */}
          <div
            className={`col-span-2 sm:col-span-1 relative overflow-hidden rounded-2xl ${
              !showAll ? "hidden sm:block" : ""
            }`}
          >
            <img
              src="/imgAssets/content-4.avif"
              alt="content-4"
              className="h-65 w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
              <h1 className="text-sm font-semibold sm:text-lg sm:font-bold text-white mb-2">
                How To Do a Perfect Lap at The São Paulo Grand Prix! | Oracle Virtual Laps
              </h1>
              <Button className="bg-[#db0a40] rounded-full text-xs sm:text-sm hover:bg-[#c3093b] w-fit flex items-center gap-2">
                <FaPlay /> Watch Video
              </Button>
            </div>
          </div>
        </div>

        {/* show more */}
        <div className="mt-4 flex justify-center sm:hidden">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#db0a40] hover:bg-[#c3093b] rounded-full text-xs px-6 py-2"
          >
            {showAll ? <FiChevronsUp /> : <FiChevronsDown />}
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
