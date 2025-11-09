'use client';
import React, { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import { Button } from "@/components/ui/button"
import { GrShop } from "react-icons/gr";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link'

const ShopMain = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    const productItems: { title: string; image?: string; price: string; productLink?: string }[] = [
        {
            title: "RBR 2025 Polo",
            image: "imgAssets/product-polo.jpg",
            price: "46.95",
            productLink: "#"
        },
        {
            title: "RBR 2025 Softshell Jacket",
            image: "imgAssets/product-softshell-jacket.jpg",
            price: "83.95",
            productLink: "#"
        },
        {
            title: "RBR 2025 Hoodie",
            image: "imgAssets/product-hoodie.jpg",
            price: "65.95",
            productLink: "#"
        },
        {
            title: "RBR 2025 Zip Hoodie",
            image: "imgAssets/product-zip-hoodie.jpg",
            price: "62.95",
            productLink: "#"
        },
    ];

    // 🔍 Deteksi ukuran layar untuk menentukan jumlah item per halaman
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1024) setItemsPerPage(4); // lg ke atas
            else if (window.innerWidth >= 768) setItemsPerPage(2); // md sampai < lg
            else setItemsPerPage(1); // bawah md
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(productItems.length / itemsPerPage);

    const nextProduct = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevProduct = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    // Ambil item yang ditampilkan di halaman aktif
    const visibleItems = productItems.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <div className="bg-[#00162b] overflow-hidden">
            <div className="w-full max-w-[100vw] overflow-x-hidden">
                <div className="container mx-auto py-20 px-4 relative">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-0">
                            Shop our 2025 Collection!
                        </h1>
                        <Link href="/shop">
                            <Button
                                size="lg"
                                className="bg-[#db0a40] rounded-full text-sm md:text-base lg:text-lg hover:bg-[#c3093b] flex items-center"
                            >
                                <GrShop /> More Products
                            </Button>
                        </Link>
                    </div>

                    {/* 👇 Carousel untuk layar < lg */}
                    {/* 👇 Carousel untuk layar < lg */}
                    <div className="lg:hidden flex flex-col items-center">
                        <div
                            className={`grid w-full ${itemsPerPage === 2 ? 'grid-cols-2 gap-4' : 'grid-cols-1'
                                }`}
                        >
                            {visibleItems.map((item, index) => (
                                <div key={index} className="w-full">
                                    <ProductCard
                                        title={item.title}
                                        price={item.price}
                                        image={item.image}
                                        productLink={item.productLink}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Chevron & indikator titik */}
                        <div className="flex items-center justify-between w-40 mt-6">
                            <button
                                onClick={prevProduct}
                                className="p-2 rounded-full bg-[#db0a40] hover:bg-[#c3093b] text-white"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <div className="flex gap-1">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-3 h-1 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-gray-500'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextProduct}
                                className="p-2 rounded-full bg-[#db0a40] hover:bg-[#c3093b] text-white"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>


                    {/* 👇 Grid tetap untuk layar besar */}
                    <div className="hidden lg:grid grid-cols-4 gap-4">
                        {productItems.map((productItems, index) => (
                            <ProductCard
                                key={index}
                                title={productItems.title}
                                price={productItems.price}
                                image={productItems.image}
                                productLink={productItems.productLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopMain;
