import React from 'react'

const Sponsor = () => {
  return (
    <div className='bg-[#00162b]'>
        <div className='container mx-auto py-20 px-4'>
            <div className="flex flex-col items-center md:flex-row md:items-end md:justify-center gap-10 md:gap-4 lg:gap-8">
                <img src="/imgAssets/sponsor/red-bull.3e7bde6b.svg" alt="Oracle Red Bull Racing - Partner Stack" className="w-48 lg:w-64 xl:w-72"/>

                <div className="flex flex-col items-center">

                    <div className="mb-8">
                        <img src="/imgAssets/sponsor/oracle.639f6e4e.svg" alt="Oracle" className="w-[200px] md:w-[250px] lg:w-[300px] h-auto"/>
                    </div>

                    <div className="grid gap-8">
                        <div>
                            <img src="/imgAssets/sponsor/row01.ac35b5b2.svg" alt="Partner Stack Row" className="w-[900px] h-auto"/>
                        </div>
                        <div>
                            <img src="/imgAssets/sponsor/row02.9bf859e5.svg" alt="Partner Stack Row" className="w-[900px] h-auto"/>
                        </div>
                        <div>
                            <img src="/imgAssets/sponsor/row03.284e7d61.svg" alt="Partner Stack Row" className="w-[900px] h-auto"/>
                        </div>
                    </div>
                </div>

                <img src="/imgAssets/sponsor/red-bull.3e7bde6b.svg" alt="Oracle Red Bull Racing - Partner Stack" className="hidden md:block md:w-48 lg:w-64 xl:w-72"/>
            </div>
        </div>
    </div>
  )
}

export default Sponsor