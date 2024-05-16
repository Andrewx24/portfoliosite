'use client';
import Link from "next/link";
import React from "react";

const Header = ({ collapse, setCollapse }) => {
    const handleCollapse = () => {
        setCollapse(!collapse);
    };

    return (
        <nav className="bg-[#f4f3ee] px-2 sm:px-4 py-2.5 w-full dark:bg-[#152028]">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="text-4xl sm:text-5xl font-bold hover:italic tracking-widest pt-2 pl-2 font-sans text-[#21568a] dark:text-white">
                    <Link href="/">Andrew Aliaj</Link>
                </div>
                <div
                    className={`${collapse ? "hidden" : "block"} w-full md:block md:w-auto`}
                    
                >
                    <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium">
                        <li
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-transparent dark:border-gray-700 dark:hover:text-slate-400"
                            onClick={() => setCollapse(true)}
                        >
                            <Link href="/" aria-current="page">Home</Link>
                        </li>
                        <li
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-transparent dark:border-gray-700 dark:hover:text-slate-400"
                            onClick={() => setCollapse(true)}
                        >
                            <Link href="/#about">About</Link>
                        </li>
                        <li
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-transparent dark:border-gray-700 dark:hover:text-slate-400"
                            onClick={() => setCollapse(true)}
                        >
                            <Link href="/#skills">Skills</Link>
                        </li>
                        <li
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-transparent dark:border-gray-700 dark:hover:text-slate-400"
                            onClick={() => setCollapse(true)}
                        >
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
