'use client';
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Allcars = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const cars = [
    {
      id: 1,
      name: 'RB20',
      image: '/imgAssets/cars/rb20.webp',
      number: '20',
      color: '#db0a40'
    },
    {
      id: 2,
      name: 'RB19',
      image: '/imgAssets/cars/rb19.webp',
      number: '19',
      color: '#db0a40'
    },
    {
      id: 3,
      name: 'RB18',
      image: '/imgAssets/cars/rb18.webp',
      number: '18',
      color: '#db0a40'
    },
    {
      id: 4,
      name: 'RB16B',
      image: '/imgAssets/cars/rb16b.webp',
      number: '16B',
      color: '#db0a40'
    },
    {
      id: 5,
      name: 'RB16',
      image: '/imgAssets/cars/rb16.webp',
      number: '16',
      color: '#db0a40'
    }
  ]

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < cars.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const currentCar = cars[currentIndex]

  return (
    <div className="bg-[#00162b]">
      <div className='container mx-auto py-16'>
        {/* Header with Navigation */}
        <div className='mb-8 flex items-center justify-between'>
          <h1 className='font-extrabold text-white text-6xl'>All Cars</h1>
          
          <div className='flex gap-4'>
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-lg transition-all duration-300 ${
                currentIndex === 0
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-[#db0a40] text-white hover:bg-[#b00835]'
              }`}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentIndex === cars.length - 1}
              className={`p-3 rounded-lg transition-all duration-300 ${
                currentIndex === cars.length - 1
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-[#db0a40] text-white hover:bg-[#b00835]'
              }`}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Car Display */}
        <div className="relative h-[560px] overflow-hidden">
          {/* Background Text Layer */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-start pointer-events-none">
            <h1 className="select-none leading-none font-extrabold text-white text-[480px]">
              RB<span className="text-[#db0a40]">{currentCar.number}</span>
            </h1>
          </div>

          {/* Car Image */}
          <div className="relative z-10 h-full flex items-end justify-center">
            <img
              src={currentCar.image}
              alt={currentCar.name}
              className="w-full object-contain transition-opacity duration-500"
            />
          </div>

          {/* Overlay Text with 15% Opacity - Above Car */}
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-start pointer-events-none">
            <h1 className="select-none leading-none font-extrabold text-white opacity-15 text-[480px]">
              RB<span className="text-[#db0a40]">{currentCar.number}</span>
            </h1>
          </div>
        </div>

        {/* Optional: Carousel Indicators */}
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
  )
}

export default Allcars