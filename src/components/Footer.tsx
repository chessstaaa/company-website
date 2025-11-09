import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#00162b] border-t-2 border-[#db0a40] w-full'>
      <div className='container mx-auto py-10 px-4'>
        <div className='flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-col gap-4'>
            <a href="#" className='text-white font-semibold hover:text-[#99a2aa]'>Privacy Policy</a>
            <a href="#" className='text-white font-semibold hover:text-[#99a2aa]'>Terms of Service</a>
            <a href="#" className='text-white font-semibold hover:text-[#99a2aa]'>Imprint</a>
          </div>
          <div className='text-white space-y-4'>
            <img src="imgAssets/redbullracing-logo.svg" alt="logo-rb-footer" className='w-[150px]' />
            <p className='text-lg text-[#99a2aa] flex items-center gap-1'><FaRegCopyright className='text-sm' />2025 Red Bull Technology Limited</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer