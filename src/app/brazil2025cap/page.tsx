import React from 'react'
import ReviewBlog from './components/ReviewBlog'
import ReviewWrite from './components/ReviewWrite'
import Footer from '../shop/components/ShopFooter'
import ProductPage from './components/ProductPage'
import SponsorShop from '../shop/components/SponsorShop'
import NavbarShop from '../shop/components/NavbarShop'

const page = () => {
  return (
    <div>
        < NavbarShop />
        < ProductPage />
        < ReviewBlog />
        < SponsorShop />
        < Footer />
    </div>
  )
}

export default page