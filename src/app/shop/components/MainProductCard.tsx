'use client';
import { Button } from "@/components/ui/button"
import { FaEuroSign } from "react-icons/fa";
import ProductImagesCarousel from './ProductImagesCarousel'

interface ProductCardProps {
  title: string;
  images: string[];
  price: string;
  type?: string;
  productLink?: string;
}

const MainProductCard = (props: ProductCardProps) => {
  return (
    <div className="rounded-lg shadow-md relative overflow-hidden group">
      {/* Use separated carousel component */}
      <ProductImagesCarousel images={props.images} altBase={props.title} />

      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/10 to-transparent pointer-events-none"></div>

      <div className="text-white absolute inset-0 flex flex-col justify-end p-4 space-y-4 pointer-events-none">
        <div>
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p>{props.type}</p>
        </div>
        <div className="flex items-center justify-between gap-4 pointer-events-auto">
          <p className="text-lg font-semibold flex items-center"><FaEuroSign />{props.price}</p>
          <Button className="bg-[#db0a40] rounded-full text-md hover:bg-[#c3093b] w-fit flex items-center gap-2">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainProductCard