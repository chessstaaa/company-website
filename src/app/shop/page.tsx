import ShopFooter from '@/app/shop/components/ShopFooter'
import ProductsCarousel from '@/app/shop/components/ProductsCarousel'
import { Button } from "@/components/ui/button"
import React from 'react'
import NewArrivals from './components/NewArrivals'
import SponsorShop from './components/SponsorShop'
import MainHeaderShop from './components/MainHeaderShop'
import SecondHeaderShop from './components/SecondHeaderShop'
import NavbarShop from './components/NavbarShop'

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
        < NavbarShop />
        < MainHeaderShop />


        <div className='container mx-auto'>
          <div className='py-10 px-4'>
            <ProductsCarousel products={mainProductItems} itemsPerPage={4} />
          </div>
        </div>

        <SecondHeaderShop />
        <NewArrivals />
        <SponsorShop />

        <ShopFooter />

    </div>
  )
}

export default page