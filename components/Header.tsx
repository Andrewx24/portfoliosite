'use client';

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const navItemClasses = 
        "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 " +
        "md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white " +
        "dark:hover:bg-transparent dark:border-gray-700 dark:hover:text-slate-400";

    return (
        <nav className="bg-[#f4f3ee] px-2 sm:px-4 py-2.5 w-full dark:bg-[#152028]">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="text-4xl sm:text-5xl font-bold tracking-widest pt-2 pl-2 font-sans text-[#21568a] dark:text-white">
                    <Link href="/" className="hover:italic">Andrew Aliaj</Link>
                </div>
                
                <div className="block md:hidden">
                    <button 
                        onClick={handleToggle}
                        className="text-gray-700 dark:text-white focus:outline-none"
                        aria-expanded={!isCollapsed}
                        aria-controls="navbar-menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div id="navbar-menu" className={`${isCollapsed ? "hidden" : "block"} w-full md:block md:w-auto transition-all duration-300 ease-in-out`}>
                    <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium">
                        {["Home", "About", "Skills", "Contact"].map((item, index) => (
                            <li key={index} className={navItemClasses} onClick={() => setIsCollapsed(true)}>
                                <Link href={item === "Home" ? "/" : `/#${item.toLowerCase()}`} aria-current={item === "Home" ? "page" : undefined}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;



