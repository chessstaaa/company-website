'use client';
import { Button } from "@/components/ui/button"
import { FaEuroSign } from "react-icons/fa";

interface ProductCardProps {
  title: string;
  image?: string;
  price: string;
  productLink?: string;
}

function ProductCard(props: ProductCardProps) {
  return (
    <div className="rounded-lg shadow-md relative overflow-hidden">
      {props.image && (
        <img src={props.image} alt={props.title} className="w-full h-full object-cover" />
      )}
      
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/10 to-transparent"></div>

      <div className="text-white absolute inset-0 flex flex-col justify-end p-4 space-y-4">
        <p className="text-xl sm:text-xl lg:text-sm xl:text-xl 2xl:text-2xl font-bold">{props.title}</p>
        <div className="flex items-center justify-between gap-4">
            <p className="text-base lg:text-lg font-semibold flex items-center"><FaEuroSign />{props.price}</p>
            <Button className="bg-[#db0a40] rounded-full text-sm md:text-base hover:bg-[#c3093b] w-fit flex items-center gap-2">
            Buy Now
            </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;