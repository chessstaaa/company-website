import React from 'react'
import { Review } from '@/types/review'
import { Star } from 'lucide-react'

interface Props {
  review: Review
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="bg-[#0a2540] border border-[#112b45] p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
      <h3 className="text-xl font-semibold mb-2 text-[#db0a40]">{review.productName}</h3>
      <p className="text-gray-300 text-sm mb-4 italic">by {review.name}</p>

      <div className="flex items-center mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-200 text-sm">{review.reviewDesc}</p>
    </div>
  )
}

export default ReviewCard
