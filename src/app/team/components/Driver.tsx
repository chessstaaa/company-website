import React from 'react'
import { Button } from "@/components/ui/button"

const Driver = () => {
  return (
    <div className='bg-[#00162b]'>
        <div className='container mx-auto py-10 px-4'>
            <h1 className='text-4xl font-bold text-white mb-10'>
                Drivers
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {/* max verstappen */}
                <div className='relative group overflow-hidden'>

                    <img src="/imgAssets/team/max-verstappen-1.svg" alt="max-verstappen-1" className='h-[140px] lg:h-[200px] absolute translate-y-6' />
                    <div className='relative'>
                        <img src="/imgAssets/team/max-verstappen.webp" alt="max-verstappen" className='h-[480px] sm:h-[520px] lg:h-[640px] w-fit object-cover relative z-10' />
                        
                        <div className='absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#00162b] z-10'></div>
                    </div>
                    
                    <Button size='lg' className='absolute bottom-6 left-6 z-30 bg-[#db0a40] text-white text-base md:text-lg rounded-full w-fit hover:bg-[#334555]'>View Profile</Button>
                </div>

                <div className='block md:hidden h-0.5 w-full bg-white my-6 opacity-50'></div>
                
                {/* yuki tsunoda */}
                <div className='relative group overflow-hidden'>
                    <img src="/imgAssets/team/yuki-tsunoda-22.svg" alt="yuki-tsunoda-22" className='h-[140px] lg:h-[200px] absolute translate-y-6' />
                    
                    <div className='relative'>
                        <img src="/imgAssets/team/yuki-tsunoda.webp" alt="yuki-tsunoda" className='h-[480px] sm:h-[520px] lg:h-[640px] w-fit object-cover relative z-10' />
                        
                        <div className='absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#00162b] z-10'></div>
                    </div>
                    
                    <Button size='lg' className='absolute bottom-6 left-6 z-30 bg-[#db0a40] text-white text-base md:text-lg rounded-full w-fit hover:bg-[#334555]'>View Profile</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Driver