'use client';
import React, { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard'
import axios from 'axios';
import { Review } from '@/types/review';

const ReviewBlog = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const getReviews = async () => {
    try {
      const result = await axios.get(
        "https://tubularrake-us.backendless.app/api/data/Reviews?sortBy=%60created%60%20desc",
      );
      setReviews(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className='container mx-auto px-4 py-8 border-t-2'>
      <h1 className='text-3xl font-bold mb-8'>
        Our Reviews
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {reviews.map((review) => {
          return <ReviewCard key={review.objectId} review={review} />;
        })}
      </div>
    </div>
  )

}
export default ReviewBlog