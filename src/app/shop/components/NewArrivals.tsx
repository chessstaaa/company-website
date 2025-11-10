'use client';
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import NewArrivalProductCard from './NewArrivalProductCard'

const NewArrivals = () => {
  const newArrivalProductItems: { title: string; images: string[]; price: string; productLink?: string }[] = [
    {
      title: "Funko POP! Max Verstappen",
      images: [
        "/imgAssets/shop/funko-1.avif",
        "/imgAssets/shop/funko-2.avif",
        "/imgAssets/shop/funko-2.avif"
      ],
      price: "17.95",
      productLink: "#"
    },
    {
      title: "1:12 Oracle Red Bull Racing RB19",
      images: [
        "/imgAssets/shop/model-rb19-1.avif",
        "/imgAssets/shop/model-rb19-2.avif",
        "/imgAssets/shop/model-rb19-3.avif"
      ],
      price: "689.95",
      productLink: "#"
    },
    {
      title: "1:18 Oracle Red Bull Racing RB20",
      images: [
        "/imgAssets/shop/model-rb20-1.avif",
        "/imgAssets/shop/model-rb20-2.avif",
        "/imgAssets/shop/model-rb20-3.avif"
      ],
      price: "199.95",
      productLink: "#"
    },
    {
      title: "1:2 Max Verstappen Brazil GP 2025 Mini Helmet",
      images: [
        "/imgAssets/shop/helmet-1.avif",
        "/imgAssets/shop/helmet-2.avif",
        "/imgAssets/shop/helmet-3.avif"
      ],
      price: "179.95",
      productLink: "#"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const nextSlide = () => {
    if (currentIndex < newArrivalProductItems.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto py-10 px-4">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-black text-3xl md:text-4xl font-bold">New Arrivals</h1>

          {/* chevron (mobile only) */}
          <div className="flex gap-4 md:hidden">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`rounded-full bg-[#db0a40] p-3 text-white shadow hover:bg-[#c3093b] transition-all
                ${currentIndex === 0 ? 'cursor-not-allowed opacity-50 hover:bg-[#db0a40]' : ''}`}
            >
              <FaChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === newArrivalProductItems.length - 1}
              className={`rounded-full bg-[#db0a40] p-3 text-white shadow hover:bg-[#c3093b] transition-all
                ${currentIndex === newArrivalProductItems.length - 1 ? 'cursor-not-allowed opacity-50 hover:bg-[#db0a40]' : ''}`}
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* grid view for desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivalProductItems.map((item, index) => (
            <NewArrivalProductCard
              key={index}
              title={item.title}
              price={item.price}
              images={item.images}
              productLink={item.productLink}
            />
          ))}
        </div>

        {/* carousel view for mobile */}
        <div className="md:hidden overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {newArrivalProductItems.map((item, index) => (
              <div key={index} className="w-full shrink-0">
                <NewArrivalProductCard
                  title={item.title}
                  price={item.price}
                  images={item.images}
                  productLink={item.productLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals
