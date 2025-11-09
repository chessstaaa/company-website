import React from 'react'

const TeamCulture = () => {
  return (
    <div className='relative overflow-hidden'>
        <img src="/imgAssets/team/culture-header.jpg" alt="header" className='w-full h-[580px] sm:h-[640px] md:h-[840px] object-cover object-center' />
        {/* w-full h-[840px] object-cover */}

        <div className="absolute inset-0 bg-linear-to-t from-[#00162b] via-black/20 to-transparent"></div>

        <div className='absolute inset-0 flex flex-col justify-end container mx-auto gap-4 px-4 pb-10'>
        <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white'>Our Culture</h1>
        <p className='text-xs sm:text-base md:text-lg font-semibold text-white text-justify'>
            At Red Bull Racing, we believe in innovation, teamwork, and the pursuit of perfection.
            Our culture blends creativity with precision — where bold ideas are encouraged, and performance is measured in milliseconds. The workplace thrives on collaboration, constant learning, and an open-minded approach to challenges.
            From the factory floor to the pit wall, every individual plays a crucial role in driving progress. We celebrate diversity, ambition, and a shared love for pushing limits — both human and mechanical. Red Bull Racing isn't just a Formula 1 team — it's a family that lives and breathes racing.
        </p>
        </div>
    </div>
  )
}

export default TeamCulture