import DriverStandings from '@/components/DriverStandings'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import ShopMain from '@/components/ShopMain'
import Sponsor from '@/components/Sponsor'
import React from 'react'

const page = () => {
  return (
    <div>
      < Navbar />
      < Main />
      < DriverStandings />
      < ShopMain />
      < Sponsor />
      < Footer />
    </div>
  )
}

export default page