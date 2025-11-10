import { Button } from '@/components/ui/button'
import Link  from 'next/link'
import React from 'react'

const MainHeaderShop = () => {
    return (
        <div className='relative overflow-hidden'>
            <img src="/imgAssets/shop/header-shop.jpg" alt="header" className='w-full h-[480px] sm:h-full object-cover object-[65%_100%] sm:object-center' />

            <div className="absolute inset-0 bg-linear-to-t from-[#00162b] via-black/10 to-transparent"></div>

            <div className='absolute inset-0 flex flex-col justify-end container mx-auto gap-2 lg:gap-4 pb-10 px-4'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>Brazilian GP Caps</h1>
                {/* src/app/brazil2025cap */}
                <Link href='/brazil2025cap'>
                    <Button size='lg' className='bg-[#db0a40] text-white text-base lg:text-lg rounded-full w-fit hover:bg-[#334555]'>Buy Now</Button>
                </Link>
                
            </div>
        </div>
    )
}

export default MainHeaderShop