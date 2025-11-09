import React from 'react'
import Navbar from '@/components/Navbar'
import MainHeader from './components/MainHeader'
import MainCar from './components/MainCar'
import Sponsor from '@/components/Sponsor'
import Footer from '@/components/Footer'
import Allcars from './components/AllCars'

const page = () => {
  return (
    <div className='bg-[#00162b]'>
        <Navbar />
        <MainHeader />
        <MainCar />
        <Allcars />
        <Sponsor />
        <Footer />
    </div>
  )
}

export default page