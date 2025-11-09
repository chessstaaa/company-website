import React from 'react'
import NewArrivalProductCard from './NewArrivalProductCard';

const NewArrivals = () => {
    const newArrivalProductItems: {title: string, images: string[], price: string, productLink?: string }[] = [
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
    ];

  return (
    <div className='bg-white'>
        <div className='container mx-auto py-10'>
            <h1 className='text-black text-4xl font-bold mb-10'>New Arrivals</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
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
        </div>
    </div>
  )
}

export default NewArrivals