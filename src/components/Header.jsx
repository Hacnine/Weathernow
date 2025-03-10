import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="fix top-0 flex justify-between items-center p-4  text-white">
            <img src="/icon.svg" className='size-12' alt="" />
           
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
    )
}

export default Header
