'use client';
import React, { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard'
import axios from 'axios';
import { Review } from '@/types/review';
import { Button } from '@/components/ui/button';

const ReviewBlog = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch reviews
  const getReviews = async () => {
    try {
      const result = await axios.get(
        "https://tubularrake-us.backendless.app/api/data/Reviews?sortBy=%60created%60%20desc"
      );
      setReviews(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint (640px)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getReviews();
  }, []);

  // Determine how many reviews to show
  const visibleReviews = showAll
    ? reviews
    : reviews.slice(0, isMobile ? 1 : 3);

  return (
    <div className="container mx-auto px-4 py-8 border-t-2">
      <h1 className="text-3xl font-bold mb-8">Our Reviews</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.objectId} review={review} />
        ))}
      </div>

      {reviews.length > (isMobile ? 1 : 3) && (
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#db0a40] hover:bg-[#ff003c] text-white font-semibold px-6 py-2 rounded-lg"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewBlog;
