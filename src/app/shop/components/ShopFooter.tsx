import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#00162b] border-t-2 border-[#db0a40] font-poppins'>
      <div className='container mx-auto py-10'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-4'>
            <a href="#" className='text-white font-semibold hover:text-[#99a2aa]'>Privacy Policy</a>
            <a href="#" className='text-white font-semibold hover:text-[#99a2aa]'>Terms of Service</a>
            <a href="#" className='text-white font-semibold hover:text-[#99a2aa]'>Help & FAQs</a>
          </div>
          <div className='text-white space-y-4'>
            <img src="imgAssets/shop/redbull-shop-logo.png" alt="logo-rb-footer" className='w-[200px] h-auto' />
            <p className='text-lg text-[#99a2aa] flex items-center gap-1'><FaRegCopyright className='text-sm' />2025 Red Bull Company</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer