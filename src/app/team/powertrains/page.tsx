'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const TeamPage = () => {
    const [members, setMembers] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const roles = ["Production Team"];
    const bios = [
        "Passionate about creative production and teamwork.",
        "Bringing vision and precision to every project.",
        "Loves the challenge of making ideas come alive.",
        "Dedicated to turning imagination into results.",
        "Always striving for perfection on and off set.",
    ];

    const usersPerPage = 8;

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=150")
            .then((res) => res.json())
            .then((data) => setMembers(data.results));
    }, []);

    // pagination logic
    const totalPages = Math.ceil(members.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = members.slice(startIndex, startIndex + usersPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="bg-[#00162b] min-h-screen">
            <Navbar />
            <div className="container mx-auto py-16 px-4">
                <div className="flex items-center justify-between mb-16">
                    <h1 className="text-4xl font-bold text-white">
                        Powertrains Department
                    </h1>
                    <div className="flex gap-4">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-lg transition-all duration-300 ${currentPage === 1 ? "bg-slate-800 text-slate-600 cursor-not-allowed" : "bg-[#db0a40] text-white hover:bg-[#b00835]"
                                }`}
                        >
                            <IoChevronBack size={24} />
                        </button>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-lg transition-all duration-300 ${currentPage === totalPages ? "bg-slate-800 text-slate-600 cursor-not-allowed" : "bg-[#db0a40] text-white hover:bg-[#b00835]"
                                }`}
                        >
                            <IoChevronForward size={24} />
                        </button>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentUsers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-white"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={member.picture.large}
                                    alt={member.name.first}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-103"
                                />
                            </div>

                            <div className="p-6 text-center">
                                <p className="text-sm text-[#0b253f] mb-1">
                                    {member.location.country}
                                </p>
                                <h2 className="text-xl font-semibold text-[#0b253f]">
                                    {member.name.first} {member.name.last}
                                </h2>
                                <p className="text-[#db0a40] font-medium mt-1">
                                    {roles[0]}
                                </p>
                                <p className="text-[#0b253f] text-sm mt-3">
                                    {bios[Math.floor(Math.random() * bios.length)]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* pagination indicator */}
                <div className="flex justify-center mt-10 gap-1 sm:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-3 sm:w-4 h-1 rounded-full transition ${currentPage === i + 1
                                    ? "bg-[#db0a40] scale-110"
                                    : "bg-gray-400 hover:bg-[#db0a40]/60"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TeamPage;
