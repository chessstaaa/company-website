"use client";
import { Button } from "@/components/ui/button";
import { CgRuler } from "react-icons/cg";
import React, { useState } from "react";
import { BiDetail } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReviewWrite from "./ReviewWrite";

const ProductPage = () => {
  const images = [
    "/imgAssets/shop/rbr-2025-cap-1.avif",
    "/imgAssets/shop/rbr-2025-cap-2.avif",
    "/imgAssets/shop/rbr-2025-cap-3.avif",
    "/imgAssets/shop/rbr-2025-cap-4.avif",
    "/imgAssets/shop/rbr-2025-cap-5.avif",
    "/imgAssets/shop/rbr-2025-cap-6.avif",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current < images.length - 1) setCurrent(current + 1);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* === Desktop Grid === */}
        <div className="hidden lg:grid grid-cols-2 grid-rows-3 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`cap-${idx}`}
              className="border rounded-lg object-cover"
            />
          ))}
        </div>

        {/* === Mobile Carousel === */}
        <div className="lg:hidden relative w-full overflow-hidden rounded-lg">
          <img
            src={images[current]}
            alt={`cap-${current}`}
            className="w-full h-auto border rounded-lg"
          />

          {/* Left button */}
          <button
            onClick={prevSlide}
            disabled={current === 0}
            className={`absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md transition
              ${current === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-white"}`}
          >
            <FaChevronLeft />
          </button>

          {/* Right button */}
          <button
            onClick={nextSlide}
            disabled={current === images.length - 1}
            className={`absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md transition
              ${current === images.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-white"}`}
          >
            <FaChevronRight />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-3 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  idx === current ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* === Product Info === */}
        <div className="flex-1 flex flex-col justify-start">
          <p className="text-sm text-gray-600 mb-2">Unisex</p>

          <div className="flex justify-between items-end mb-4">
            <h1 className="text-3xl font-bold">
              New Era 9Seventy Brazilian GP Cap
            </h1>
            <p className="text-xl font-semibold text-gray-800">€46.95</p>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="bg-white border w-fit px-4 py-2 rounded-full text-sm">
              One Size
            </p>
            <p className="text-sm underline flex items-center gap-1">
              <CgRuler className="text-base" />
              Size Charts
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-xs">Available in checkout.</p>
            <Button className="bg-[#e60000] hover:bg-[#c50000] text-white font-medium rounded-full w-full flex gap-2 justify-center items-center">
              <MdOutlineLocalGroceryStore />
              Add to cart
            </Button>
          </div>

          <h3 className="font-semibold mb-2 text-lg flex items-center gap-1">
            <BiDetail />
            Details
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            Crafted in classic denim, the Oracle Red Bull Racing x New Era
            Brazilian GP cap is a great way to stay cool in the heat while
            showing your support.
          </p>

          <ul className="list-disc pl-5 text-sm space-y-1 mb-6">
            <li>New Era 9SEVENTY Brazilian GP Cap</li>
            <li>
              Oracle Red Bull Racing logo embroidered on the front crown
            </li>
            <li>New Era flag embroidered on the left</li>
            <li>Brazilian flag patch to the rear</li>
            <li>
              Washed denim structured crown with matching curved visor
            </li>
            <li>Adjustable snap closure</li>
            <li>Material: 100% Cotton</li>
          </ul>

          <div className="text-sm text-gray-700">
            <p className="font-semibold">Manufacturer Information:</p>
            <p>New Era Cap GmbH</p>
            <p>
              Midsummer Boulevard, Milton Keynes, Bucks MK9 2EA, United Kingdom
            </p>
            <p>questions@neweracap.com</p>
          </div>

          <div className="mt-6 text-sm">
            <h4 className="font-semibold mb-1">Shipping</h4>
            <p>Free Shipping: from €75 (EU) | from €100 (worldwide)</p>
            <ul className="pl-5 list-disc mt-2 space-y-1">
              <li>DE/AT: €5 (2–5 days)</li>
              <li>EU: €8.50 (2–6 days)</li>
              <li>Rest of the world: €30 (3–8 days)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
