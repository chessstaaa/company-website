import React from 'react'
import ReviewWrite from './ReviewWrite'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';

const WriteSection = async () => {
    const session = await auth();

    // Allow everyone to view the page. Only show the review form when the user is signed in.
    if (session?.user?.email) {
        return (
            <div>
                <ReviewWrite />
            </div>
        )
    }

    // Not signed in: show a friendly prompt to sign in to write a review
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="bg-[#071627] p-6 rounded-md text-white text-center">
                <h3 className="text-xl font-semibold mb-2">Sign in to write a review</h3>
                <p className="mb-4">You can still view this product and other reviews. Please sign in to add your own.</p>
                <a href="/signin" className="inline-block bg-[#db0a40] hover:bg-[#c3093b] text-white font-semibold px-4 py-2 rounded-full">Sign in</a>
            </div>
        </div>
    )
}

export default WriteSection