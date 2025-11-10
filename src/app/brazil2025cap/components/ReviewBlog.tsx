'use client'
import { Review } from '@/types/review'
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import ReviewCard from './ReviewCard'

const ReviewBlog = () => {
  const [reviews, setReviews] = useState<Review[]>([])

  const getReviews = async () => {
    try {
      const result = await axios.get('https://tubularrake-us.backendless.app/api/data/Reviews')
      setReviews(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="bg-blue-300 text-white">
      <div className="container mx-auto py-10 px-4 border">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Customer Reviews</h1>
          <p className="text-gray-400 text-lg">
            See what our fans think about the <span className="text-[#db0a40]">Red Bull Racing</span> products.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.objectId} review={review} />
          ))}
        </div>

        {/* Empty State */}
        {reviews.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <p>No reviews yet. Be the first to leave one!</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => alert('Nanti diarahkan ke halaman tulis ulasan')}
            className="bg-[#db0a40] hover:bg-[#c3093b] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
          >
            Write a Review
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewBlog
