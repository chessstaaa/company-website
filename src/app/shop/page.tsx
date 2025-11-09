import ShopFooter from '@/app/shop/components/ShopFooter'
import Navbar from '@/components/Navbar'
import ProductsCarousel from '@/app/shop/components/ProductsCarousel'
import { Button } from "@/components/ui/button"
import React from 'react'
import NewArrivals from './components/NewArrivals'
import SponsorShop from './components/SponsorShop'

const page = () => {
  const mainProductItems: {title: string, type: string, images: string[], price: string, productLink?: string }[] = [
      {
          title: "RBR 2025 Polo",
          type: "Unisex",
          images: [
            "/imgAssets/product-polo.jpg",
            "/imgAssets/shop/product-polo-2.avif",
            "/imgAssets/shop/product-polo-3.avif"
          ],
          price: "46.95",
          productLink: "#"
      },
      {
          title: "RBR 2025 T-shirt",
          type: "Unisex",
          images: [
            "/imgAssets/shop/product-tshirt-1.avif",
            "/imgAssets/shop/product-tshirt-2.avif",
            "/imgAssets/shop/product-tshirt-3.avif"
          ],
          price: "62.95",
          productLink: "#"
      },
      {
          title: "RBR 2025 Softshell Jacket",
          type: "Unisex",
          images: [
            "/imgAssets/product-softshell-jacket.jpg",
            "/imgAssets/shop/product-softshell-jacket-2.avif",
            "/imgAssets/shop/product-softshell-jacket-3.avif"
          ],
          price: "83.95",
          productLink: "#"
      },
      {
          title: "RBR 2025 Hoodie",
          type: "Unisex",
          images: [
            "/imgAssets/product-hoodie.jpg",
            "/imgAssets/shop/product-hoodie-2.avif",
            "/imgAssets/shop/product-hoodie-3.avif"
          ],
          price: "65.95",
          productLink: "#"
      },
      {
          title: "RBR 2025 Zip Hoodie",
          type: "Unisex",
          images: [
            "/imgAssets/product-zip-hoodie.jpg",
            "/imgAssets/shop/product-zip-hoodie-2.avif",
            "/imgAssets/shop/product-zip-hoodie-3.avif"
          ],
          price: "62.95",
          productLink: "#"
      },
      {
          title: "RBR 2025 New Era 970 Cap",
          type: "Unisex",
          images: [
            "/imgAssets/shop/product-cap.avif",
            "/imgAssets/shop/product-cap-2.avif",
            "/imgAssets/shop/product-cap-3.avif"
          ],
          price: "62.95",
          productLink: "#"
      },
  ];
  
  return (
    <div className='bg-[#00162b]'>
        <Navbar />
        <div className='relative overflow-hidden'>
          <img src="/imgAssets/shop/header-shop.jpg" alt="header" className='w-full h-full object-cover' />

          <div className="absolute inset-0 bg-linear-to-t from-[#00162b] via-black/10 to-transparent"></div>

          <div className='absolute inset-0 flex flex-col justify-end container mx-auto gap-4 pb-10'>
            <h1 className='text-5xl font-bold text-white'>Brazilian GP Caps</h1>
            <Button size='lg' className='bg-[#db0a40] text-white text-lg rounded-full w-fit hover:bg-[#334555]'>Buy Now</Button>
          </div>
        </div>

        <div className='container mx-auto'>
          <div className='py-10'>
            <ProductsCarousel products={mainProductItems} itemsPerPage={4} />
          </div>
        </div>

        <div className='relative overflow-hidden'>
          <img src="/imgAssets/shop/second-header-shop.avif" alt="header" className='w-full h-[420px] object-cover object-[100%_5%]' />

          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent"></div>

          <div className='absolute inset-0 flex flex-col justify-end container mx-auto gap-4 pb-10'>
            <h1 className='text-4xl font-bold text-white'>2025 Collection</h1>
            <Button size='lg' className='bg-[#db0a40] text-white text-lg rounded-full w-fit hover:bg-[#334555]'>Discover Now</Button>
          </div>
        </div>

        <NewArrivals />
        <SponsorShop />

        <ShopFooter />

    </div>
  )
}

export default page