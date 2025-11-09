import React from 'react'

const MainTeam = () => {
  return (
    <div className='relative overflow-hidden'>
        <img src="/imgAssets/team/main-header.avif" alt="header" className='w-full h-[580px] sm:h-[640px] md:h-[768px] object-cover object-center xl:object-[100%_20%]' />

        <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#00162b] via-black/10 to-transparent"></div>

        <div className='absolute inset-0 flex flex-col justify-end container mx-auto gap-4 px-4 pb-10'>
          <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white'>The Team</h1>
          <p className='text-xs sm:text-base md:text-lg font-semibold text-white text-justify'>
              Founded in 2005, Oracle Red Bull Racing was born from the vision of combining passion, innovation, and performance to redefine what's possible in Formula 1. Emerging from the ashes of Jaguar Racing, Red Bull Racing quickly became a symbol of youthful energy, fearless competition, and cutting-edge technology.
              From the team's first race in Australia to its first World Championship in 2010, Red Bull Racing has grown into one of the most dominant forces in the sport. Over the years, we have achieved multiple Drivers' and Constructors' Championships, led by legendary drivers such as Sebastian Vettel and Max Verstappen.
              Our history is built on the spirit of pushing boundaries — on and off the track.
          </p>
        </div>
    </div>
  )
}

export default MainTeam