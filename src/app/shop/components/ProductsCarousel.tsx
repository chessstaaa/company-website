'use client'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ProductCard from '@/app/shop/components/MainProductCard'

interface ProductItem {
  title: string
  type: string
  images: string[]
  price: string
  productLink?: string
}

interface Props {
  products: ProductItem[]
  itemsPerPage?: number
  title?: string
}

const ProductsCarousel = ({ products, itemsPerPage = 4, title }: Props) => {
  const [curr, setCurr] = useState(0)
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const prev = () => {
    if (curr > 0) {
      setCurr(curr - 1)
    }
  }

  const next = () => {
    if (curr < totalPages - 1) {
      setCurr(curr + 1)
    }
  }

  return (
    <div>
      {/* Header with Title and Navigation */}
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-white text-4xl font-bold'>2025 Collection</h1>
        
        {totalPages > 1 && (
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              disabled={curr === 0}
              className={`rounded-full bg-[#db0a40] p-3 text-white shadow hover:bg-[#c3093b] transition-all
                ${curr === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
              aria-label="Previous products"
            >
              <FaChevronLeft size={24} />
            </button>

            <button
              onClick={next}
              disabled={curr === totalPages - 1}
              className={`rounded-full bg-[#db0a40] p-3 text-white shadow hover:bg-[#c3093b] transition-all
                ${curr === totalPages - 1 ? 'cursor-not-allowed opacity-50' : ''}`}
              aria-label="Next products"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        )}
      </div>

      {/* Products Grid with Animation */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {/* Group products into pages */}
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div 
              key={pageIndex} 
              className="grid grid-cols-4 gap-4 min-w-full"
            >
              {products
                .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((item, index) => (
                  <ProductCard
                    key={pageIndex * itemsPerPage + index}
                    title={item.title}
                    type={item.type}
                    price={item.price}
                    images={item.images}
                    productLink={item.productLink}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsCarousel