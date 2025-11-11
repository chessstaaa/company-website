'use client';
import { useState } from 'react';
import React from 'react'
import { Button } from "@/components/ui/button"
import { IoMenu, IoClose } from "react-icons/io5";
import Link from 'next/link'
import { useAuth } from '@/stores/auth';

const Navbar = () => {

    const { user, clearAuth } = useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className='bg-[#00162b] border-b-2 border-[#db0a40]'>
            <div className='container mx-auto py-5 px-4 flex items-center justify-between'>
                <a href="/">
                    <img src="/imgAssets/redbullracing-logo.svg" alt="logo-navbar" />
                </a>

                <div className='sm:flex items-center gap-6 hidden'>
                    <a href="/" className='font-bold text-white hover:underline underline-offset-8 decoration-3 decoration-[#db0a40]'>Home</a>
                    <a href="/team" className='font-bold text-white hover:underline underline-offset-8 decoration-3 decoration-[#db0a40]'>Team</a>
                    <a href="/cars" className='font-bold text-white hover:underline underline-offset-8 decoration-3 decoration-[#db0a40]'>Cars</a>
                    <a href="/shop" className='font-bold text-white hover:underline underline-offset-8 decoration-3 decoration-[#db0a40]'>Shop</a>
                    {!user ?
                        <Link href="/signin">
                            <Button className='bg-[#1a2e41] text-white rounded-full hover:bg-[#334555]'>Sign In</Button>
                        </Link>
                        :
                        <Button className='bg-[#1a2e41] text-white rounded-full hover:bg-[#334555]'
                            onClick={clearAuth}
                        >Sign Out</Button>
                    }
                </div>

                <div className='sm:hidden' onClick={toggleMenu}>
                    <Button className='bg-[#1a2e41] text-white rounded-full hover:bg-[#334555]'>
                        {isMenuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="px-4 py-4 sm:hidden bg-[#00162b] border-t-2 border-[#db0a40] animate-slide-down">
                    <div className="flex flex-col space-y-4">
                        <Link href="/signup" onClick={closeMenu}>
                            <Button className="bg-[#1a2e41] text-white rounded-full hover:bg-[#334555] w-full">Sign Up</Button>
                        </Link>
                        <Link href="/signin" onClick={closeMenu}>
                            <Button className="bg-[#1a2e41] text-white rounded-full hover:bg-[#334555] w-full">Sign In</Button>
                        </Link>
                    </div>
                    <hr className="mt-4 border-[#db0a40] border" />
                    <div className="flex flex-col mt-4 space-y-4">
                        <a href="/" onClick={closeMenu} className="text-white font-semibold hover:text-[#db0a40]">Home</a>
                        <a href="/team" onClick={closeMenu} className="text-white font-semibold hover:text-[#db0a40]">Team</a>
                        <a href="/cars" onClick={closeMenu} className="text-white font-semibold hover:text-[#db0a40]">Cars</a>
                        <a href="/shop" onClick={closeMenu} className="text-white font-semibold hover:text-[#db0a40]">Shop</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar