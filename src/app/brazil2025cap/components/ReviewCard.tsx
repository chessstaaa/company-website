'use client';
import { Review } from '@/types/review';
import { format } from 'date-fns';
import React, { useState } from 'react';

interface ReviewCardProps {
    review: Review;
}

const ReviewCard = (props: ReviewCardProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    // Membuat array bintang
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">★</span>);
            }
        }
        return stars;
    };

    return (
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">{props.review.name}</h3>
            <div className="flex gap-2 items-center mb-1">
                <div className="flex text-xl">
                    {renderStars(props.review.rating)}
                </div>
                <p className='text-xs text-gray-500'>
                    {format(new Date(props.review.created), "dd MMM yyyy")}
                </p>
            </div>
            <p className="text-xs text-gray-500 mb-2">
                <span className="font-medium text-gray-800">Product:</span> {props.review.productName}
            </p>
            <p className='text-gray-800 text-base line-clamp-3'>
                {props.review.reviewDesc}
            </p>
        </div>
    );
};

export default ReviewCard;
