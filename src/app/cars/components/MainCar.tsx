import React from 'react'

const MainCar = () => {
  return (
    <div className="bg-[#00162b]">
        <div className='container mx-auto py-16'>
            <div className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="select-none leading-none font-extrabold text-white text-[720px]">
                    RB<span className="text-[#db0a40]">21</span>
                </h1>
                </div>

                <div className="relative z-10 top-10 h-full">
                <img
                    src="/imgAssets/cars/rb21-main.png"
                    alt="rb-21"
                    className="absolute w-full object-contain"
                />
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <h1 className="select-none leading-none font-extrabold text-white opacity-10 text-[720px]">
                    RB21
                </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainCar