'use client';
import React, { useState } from "react";
import MemberTeamCard from './MemberTeamCard';
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { Button } from '@/components/ui/button';

const MemberTeam = () => {
  const [showAll, setShowAll] = useState(false);

  const memberTeamstItems: { name: string, image?: string, profileLink?: string }[] = [
    { name: "Laurent Mekies", image: "imgAssets/team/laurent-mekies.jpeg", profileLink: "#" },
    { name: "Pierre Waché", image: "/imgAssets/team/pierre-wache.jpeg", profileLink: "#" },
    { name: "GianPiero Lambiase", image: "/imgAssets/team/gianpiero-lambiase.jpeg", profileLink: "#" },
    { name: "Paul Monaghan", image: "/imgAssets/team/paul-monaghan.jpeg", profileLink: "#" },
    { name: "Ben Waterhouse", image: "/imgAssets/team/ben-waterhouse.jpeg", profileLink: "#" },
    { name: "Stephen Knowles", image: "/imgAssets/team/stephen-knowles.jpeg", profileLink: "#" },
  ];

  return (
    <div className='bg-[#db0a40]'>
      <div className='container mx-auto py-16 px-4'>
        <h1 className='text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-10'>
          Main Team
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6'>
          {memberTeamstItems.map((member, index) => {
            const isMobileHidden = index > 1 ? (!showAll ? "hidden md:block" : "block") : "block";
            return (
              <div key={index} className={`${isMobileHidden}`}>
                <MemberTeamCard
                  name={member.name}
                  image={member.image}
                  profileLink={member.profileLink}
                />
              </div>
            );
          })}
        </div>

        {/* show more */}
        <div className="mt-4 flex justify-center md:hidden">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#00162b] hover:bg-[#c3093b] rounded-full text-xs px-6 py-2 flex items-center gap-2"
          >
            {showAll ? <FiChevronsUp /> : <FiChevronsDown />}
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MemberTeam;
