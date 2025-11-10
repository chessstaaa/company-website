import { Button } from '@/components/ui/button'
import React from 'react'

const SecondHeaderShop = () => {
    return (
        <div className='relative overflow-hidden'>
            <img src="/imgAssets/shop/second-header-shop.avif" alt="header" className='w-full h-[420px] object-cover object-center lg:object-[100%_5%]' />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent"></div>

            <div className='absolute inset-0 flex flex-col justify-end container mx-auto gap-2 lg:gap-4 pb-10 px-4'>
                <h1 className='text-3xl md:text-4xl font-bold text-white'>2025 Collection</h1>
                <Button size='lg' className='bg-[#db0a40] text-white text-base lg:text-lg rounded-full w-fit hover:bg-[#334555]'>Discover Now</Button>
            </div>
        </div>
    )
}

export default SecondHeaderShop