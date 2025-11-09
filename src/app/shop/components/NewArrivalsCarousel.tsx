'use client'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Props {
  images: string[]
  altBase?: string
}

const NewArrivalsCarousel = ({ images, altBase = 'product' }: Props) => {
  const [curr, setCurr] = useState(0)

  const prev = () => {
    if (curr > 0) {
      setCurr(curr - 1)
    }
  }
  
  const next = () => {
    if (curr < images.length - 1) {
      setCurr(curr + 1)
    }
  }

  if (!images || images.length === 0) return null

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-out"
           style={{ transform: `translateX(-${curr * 100}%)` }}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`${altBase} ${i+1}`} className="w-full h-full object-cover min-w-full" />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button 
            onClick={prev} 
            disabled={curr === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-md bg-[#db0a40] p-2 text-white shadow hover:bg-[#00162b] opacity-0 group-hover:opacity-100 transition-opacity
              ${curr === 0 ? 'cursor-not-allowed group-hover:opacity-50' : ''}`}
            aria-label="Previous image"
          >
            <FaChevronLeft size={20} />
          </button>
          <button 
            onClick={next} 
            disabled={curr === images.length - 1}
            className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-[#db0a40] p-2 text-white shadow hover:bg-[#00162b] opacity-0 group-hover:opacity-100 transition-opacity
              ${curr === images.length - 1 ? 'cursor-not-allowed group-hover:opacity-50' : ''}`}
            aria-label="Next image"
          >
            <FaChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
              {images.map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full bg-[#a0a0a1] transition-all ${curr === i ? 'w-4' : 'bg-opacity-50'}`} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default NewArrivalsCarousel