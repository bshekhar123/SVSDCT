import React, { useState } from 'react';
import orgLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

function LinkN({ text, to, closeDropdown }) {
    return (
        <div
            className='py-2 mx-2 rounded text-orange-600 hover:bg-orange-600 hover:text-white font-semibold transition duration-200 ease-in-out'
            onClick={closeDropdown}
        >
            <Link className='px-4 py-2' to={to}>{text}</Link>
        </div>
    );
}

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className='bg-black px-3 py-1 flex flex-wrap items-center'>
            <div className='mb-2 md:mb-0'>
                <Link to='/'>
                    <img src={orgLogo} alt="Organization Logo" className="w-16" />
                </Link>
            </div>

            <div className='md:hidden flex items-center ml-auto'>
                <div className="relative">
                    <button className="text-white focus:outline-none me-3" onClick={toggleDropdown}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>

                    <div className={`absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden ${isDropdownOpen ? 'block' : 'hidden'}`}>
                        <LinkN text="Home" to="/" closeDropdown={closeDropdown} />
                        <LinkN text="Message" to="/message" closeDropdown={closeDropdown} />
                        <LinkN text="AboutUs" to="/about-us" closeDropdown={closeDropdown} />
                        <LinkN text="Events" to="/events" closeDropdown={closeDropdown} />
                        <LinkN text="Gallery" to="/Gallery" closeDropdown={closeDropdown} />
                    </div>
                </div>
            </div>

            <div className='hidden md:flex-1 md:flex md:justify-center md:items-center'>
                <LinkN text="Home" to="/" />
                <LinkN text="Message" to="/message" />
                <LinkN text="About Us" to="/about-us" />
                <LinkN text="Events" to="/events" />
                <LinkN text="Gallery" to="/Gallery" />
            </div>
        </div>
    );
}

export default Navbar;
