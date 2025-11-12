'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Allcars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = [
    {
      id: 1,
      name: 'RB20',
      image: '/imgAssets/cars/rb20.png',
      driver1: 'Max Verstappen',
      driver2: 'Sergio Perez',
      designer: 'Adrian Newey',
      wdc: '/imgAssets/cars/wdc-rb20.svg',
      wcc: '',
      wins: '9',
      podiums: '18',
    },
    {
      id: 2,
      name: 'RB19',
      image: '/imgAssets/cars/rb19.png',
      driver1: 'Max Verstappen',
      driver2: 'Sergio Perez',
      designer: 'Adrian Newey',
      wdc: '/imgAssets/cars/wdc-rb19.svg',
      wcc: '/imgAssets/cars/wcc-rb19.svg',
      wins: '21',
      podiums: '30',
    },
    {
      id: 3,
      name: 'RB18',
      image: '/imgAssets/cars/rb18.png',
      driver1: 'Max Verstappen',
      driver2: 'Sergio Perez',
      designer: 'Adrian Newey',
      wdc: '/imgAssets/cars/wdc-rb18.svg',
      wcc: '/imgAssets/cars/wcc-rb18.svg',
      wins: '17',
      podiums: '28',
    },
    {
      id: 4,
      name: 'RB16B',
      image: '/imgAssets/cars/rb16b.png',
      driver1: 'Max Verstappen',
      driver2: 'Sergio Perez',
      designer: 'Adrian Newey',
      wdc: '/imgAssets/cars/wdc-rb16b.svg',
      wcc: '',
      wins: '11',
      podiums: '23',
    },
    {
      id: 5,
      name: 'RB16',
      image: '/imgAssets/cars/rb16.png',
      driver1: 'Max Verstappen',
      driver2: 'Alexander Albon',
      designer: 'Adrian Newey',
      wdc: '',
      wcc: '',
      wins: '2',
      podiums: '13',
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < cars.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const currentCar = cars[currentIndex];

  return (
    <div className="bg-[#00162b]">
      <div className="container mx-auto py-16 px-4">
        {/* Header with Navigation */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="font-extrabold text-white text-4xl sm:text-6xl text-center sm:text-left">
            All Cars
          </h1>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-lg transition-all duration-300 ${
                currentIndex === 0
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-[#db0a40] text-white hover:bg-[#b00835]'
              }`}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === cars.length - 1}
              className={`p-3 rounded-lg transition-all duration-300 ${
                currentIndex === cars.length - 1
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-[#db0a40] text-white hover:bg-[#b00835]'
              }`}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Car Image */}
          <div className="lg:col-span-3 flex justify-center">
            <img
              src={currentCar.image}
              alt={currentCar.name}
              className="w-full max-w-[900px] h-auto object-contain"
            />
          </div>

          {/* Info Card */}
          <div className="bg-[#1a2e41] text-white rounded-2xl p-6 w-full max-w-md mx-auto lg:mx-0">
            {/* WDC / WCC Section */}
            {(currentCar.wdc || currentCar.wcc) && (
              <>
                <div className="flex gap-4 mb-4">
                  {currentCar.wdc && (
                    <img
                      src={currentCar.wdc}
                      alt={`${currentCar.name} WDC`}
                      className="w-[70px] h-[70px]"
                    />
                  )}
                  {currentCar.wcc && (
                    <img
                      src={currentCar.wcc}
                      alt={`${currentCar.name} WCC`}
                      className="w-[70px] h-[70px]"
                    />
                  )}
                </div>
                {/* Garis pemisah antara icon dan driver */}
                <hr className="border-gray-600 mb-3" />
              </>
            )}

            {/* Drivers */}
            <div className="mb-4">
              <h2 className="text-lg text-[#75787a]">Drivers</h2>
              <p className="text-2xl font-semibold">{currentCar.driver1}</p>
              <p className="text-2xl font-semibold">{currentCar.driver2}</p>
            </div>

            <hr className="border-gray-600 mb-3" />

            {/* Designer */}
            <div className="mb-4">
              <h2 className="text-lg text-[#75787a]">Designer</h2>
              <p className="text-2xl font-semibold">{currentCar.designer}</p>
            </div>

            <hr className="border-gray-600 mb-3" />

            {/* Wins & Podiums */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <p className="text-lg text-[#E1EAF2]">Wins</p>
                <p className="text-2xl font-semibold">{currentCar.wins}</p>
              </div>

              <div className="flex flex-col">
                <p className="text-lg text-[#E1EAF2]">Podiums</p>
                <p className="text-2xl font-semibold">{currentCar.podiums}</p>
              </div>
            </div>

            <div>
              <Button className='w-full rounded-full bg-[#db0a40] hover:bg-slate-600'>
                More Details
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {cars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-[#db0a40]'
                  : 'w-2 bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allcars;
