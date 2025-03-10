import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className='bg-slate-800'>
            <header className="fix top-0 flex  justify-between items-center p-4  text-white max-w-[85%] mx-auto">
                <Link to={'/'} className='flex items-center gap-3'>
                    <img src="/icon.svg" className='size-12' alt="" />
                    <span className='font-semibold text-xl'>Weathernow</span>
                </Link>

                <div className="flex space-x-4">
                    <nav className="hidden md:flex space-x-4 -mt-1">
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">News</a>
                        <a href="" className="hover:underline">Contacts</a>
                    </nav>
                    <a href="#" target="_blank" className="hover:text-gray-300"><FaFacebookF /></a>
                    <a href="#" target="_blank" className="hover:text-gray-300 text-lg"><BiLogoGmail /></a>
                    <a href="#" target="_blank" className="hover:text-gray-300"><FaXTwitter /></a>
                </div>
            </header>
        </header>
    )
}

export default Header
