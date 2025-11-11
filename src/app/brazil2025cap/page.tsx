import NavbarShop from '../shop/components/NavbarShop'
import Footer from '../shop/components/ShopFooter'
import SponsorShop from '../shop/components/SponsorShop'
import ProductPage from './components/ProductPage'
import ReviewBlog from './components/ReviewBlog'
import WriteSection from './components/WriteSection'

const page = () => {
  return (
    <div>
        < NavbarShop />
        < ProductPage />
        < ReviewBlog />
        < WriteSection />
        < SponsorShop />
        < Footer />
    </div>
  )
}

export default page