'use client'
import React, { useState, useEffect } from 'react'
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
  const [perPage, setPerPage] = useState(itemsPerPage)

  // 🔧 Responsive adjustment
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setPerPage(1) // sm
      else if (window.innerWidth < 1024) setPerPage(2) // md–lg
      else setPerPage(itemsPerPage) // default (4)
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [itemsPerPage])

  const totalPages = Math.ceil(products.length / perPage)

  const prev = () => {
    if (curr > 0) setCurr(curr - 1)
  }

  const next = () => {
    if (curr < totalPages - 1) setCurr(curr + 1)
  }

  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-white text-4xl font-bold'>
          {title || '2025 Collection'}
        </h1>

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

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div 
              key={pageIndex} 
              className={`grid gap-4 min-w-full ${
                perPage === 1 ? 'grid-cols-1' : perPage === 2 ? 'grid-cols-2' : 'grid-cols-4'
              }`}
            >
              {products
                .slice(pageIndex * perPage, (pageIndex + 1) * perPage)
                .map((item, index) => (
                  <ProductCard
                    key={pageIndex * perPage + index}
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
