import React from 'react'

const MainHeader = () => {
  return (
    <div className='relative overflow-hidden'>
        <img src="/imgAssets/cars/main-header.avif" alt="header" className='w-full h-[720px] object-cover object-[100%_80%]' />

        <div className="absolute inset-0 bg-linear-to-t from-[#00162b] via-black/10 to-transparent"></div>

        <div className='absolute inset-0 flex flex-col justify-end container mx-auto gap-4 pb-10'>
            <h1 className='text-9xl font-extrabold text-white'>Our Cars</h1>
        </div>
    </div>
  )
}

export default MainHeader