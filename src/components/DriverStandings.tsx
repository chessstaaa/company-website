import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";

const DriverStandings = () => {
  return (
    <div className='bg-[#00162b]'>
        <div className='container mx-auto py-20 px-4'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                {/* Left Content */}
                <div className="bg-[#1a2e41] text-white rounded-2xl p-6 w-full h-full col-span-2 lg:col-span-1">
                    <h2 className="text-xl xl:text-2xl font-semibold text-center mb-4">2025 Driver Standings</h2>
                    <hr className="border-gray-600 mb-4" />

                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                        <p className="text-lg font-bold text-[#E1EAF2]">03</p>
                        <div>
                            <p className="text-base font-semibold">Max Verstappen</p>
                            <p className="text-sm text-gray-400">Oracle Red Bull Racing</p>
                        </div>
                        </div>
                        <p className="text-xl font-bold">321</p>
                    </div>

                    <hr className="border-gray-600 mb-3" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                        <p className="text-lg font-bold text-[#E1EAF2]">17</p>
                        <div>
                            <p className="text-base font-semibold">Yuki Tsunoda</p>
                            <p className="text-sm text-gray-400">Oracle Red Bull Racing</p>
                        </div>
                        </div>
                        <p className="text-xl font-bold">28</p>
                    </div>
                </div>

                {/* Right Content */}
                <div className='text-white rounded-2xl relative overflow-hidden col-span-2'>
                    <img src="/imgAssets/brazilgp-picture.jpeg" alt="brazilgp-picture" className='w-2000 h-58 object-cover object-left sm:object-[100%_18%]'/>

                    <div className="absolute inset-0 bg-black/40"></div>
                    
                    <div className='absolute inset-0 flex flex-col justify-end p-6'>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">Sao Paulo Grand Prix</h2>
                        <div className='space-y-1'>
                            <p className='text-sm sm:text-base flex items-center gap-2'><MdOutlineDateRange />7 - 9 November 2025</p>
                            <div className='text-sm sm:text-base flex items-center gap-2'>
                                <img src="/imgAssets/BR-flag.svg" alt="BR-flag" /><p>Autódromo José Carlos Pace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DriverStandings