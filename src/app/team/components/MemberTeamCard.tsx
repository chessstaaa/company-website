'use client';
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react";
import { FaEuroSign } from "react-icons/fa";

interface MemberTeamCardProps {
  name: string;
  image?: string;
  profileLink?: string;
}

const MemberTeamCard = (props: MemberTeamCardProps) => {
  return (
    <div className="rounded-lg shadow-md relative overflow-hidden">
      {props.image && (
        <img src={props.image} alt={props.name} className="w-full h-[200px] lg:h-full object-cover" />
      )}
      
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/10 to-transparent"></div>

      <div className="text-white absolute inset-0 flex flex-col justify-end p-5 space-y-2">
        <p className="text-lg lg:text-2xl xl:text-3xl font-bold">{props.name}</p>
        <div className="flex items-center justify-between gap-4">
            <Button className="bg-[#db0a40] rounded-full text-md hover:bg-[#c3093b] w-fit flex items-center gap-2">
                View Profile
            </Button>
        </div>
      </div>
    </div>
  )
}

export default MemberTeamCard