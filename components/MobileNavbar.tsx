'use client';
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
    const [collapse, setCollapse] = useState(true);

    const handleCollapse = () => {
        setCollapse(!collapse);
    };

    const navItems = [
        { name: "Home", path: "/", current: true },
        { name: "About", path: "/#about", current: false },
        { name: "Skills", path: "/#skills", current: false },
        { name: "Contact", path: "/#contact", current: false },
        { name: "Blog", path: "https://medium.com/@andrewaliaj", external: true, current: false }
    ];

    const navItemClasses = "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-transparent dark:border-gray-700 dark:hover:text-slate-400 w-full text-center transition-colors duration-200";

    return (
        <nav className="bg-[#f4f3ee] px-2 sm:px-4 py-2.5 w-full dark:bg-[#152028] shadow-md">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="text-4xl sm:text-5xl font-bold hover:italic tracking-widest pt-2 pl-2 font-sans text-[#21568a] dark:text-white transition-all duration-300">
                    <Link href="/">Andrew Aliaj</Link>
                </div>
                <div className="block md:hidden">
                    <button 
                        onClick={handleCollapse}
                        className="text-gray-700 dark:text-white focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200"
                        aria-label="Toggle navigation menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div 
                    className={`${
                        collapse ? "hidden" : "block"
                    } w-full md:hidden transition-all duration-300 ease-in-out`}
                >
                    <ul className="flex flex-col items-center mt-4 space-y-2">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className="w-full"
                                onClick={() => setCollapse(true)}
                            >
                                {item.external ? (
                                    <a
                                        href={item.path}
                                        className={navItemClasses}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${item.name} page`}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link 
                                        href={item.path}
                                        className={navItemClasses}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavbar;
