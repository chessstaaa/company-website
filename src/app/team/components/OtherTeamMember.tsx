import React from 'react'

const OtherTeamMember = () => {
  return (
    <div className='w-full bg-[#00162b]'>
        <div className='container mx-auto py-26 px-4'>
            <h1 className='text-4xl md:text-5xl font-extrabold text-white pb-8 sm:pb-10'>Meet Our Departments</h1>
            <div className='flex flex-col gap-6 md:gap-8 px-4'>
                <a href="/team/production"><p className='text-4xl sm:text-6xl md:text-7xl font-extrabold text-white hover:text-gray-400'>Production</p></a>
                <a href="/team/powertrains"><p className='text-4xl sm:text-6xl md:text-7xl font-extrabold text-white hover:text-gray-400'>Powertrains</p></a>
                <a href="/team/engineering"><p className='text-4xl sm:text-6xl md:text-7xl font-extrabold text-white hover:text-gray-400'>Engineering</p></a>
                <a href="/team/marketing"><p className='text-4xl sm:text-6xl md:text-7xl font-extrabold text-white hover:text-gray-400'>Marketing</p></a>
                <a href="/team/logistics"><p className='text-4xl sm:text-6xl md:text-7xl font-extrabold text-white hover:text-gray-400'>Logistics</p></a>
            </div>
        </div>
    </div>
  )
}

export default OtherTeamMember