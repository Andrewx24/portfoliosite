"use client";

import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import Link from "next/link";
import { Tooltip } from "@nextui-org/tooltip";

const Main = () => {
  return (
    <section className="w-full text-center container mx-auto py-16">
      <main className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center items-center">
        <div className="w-full">
          <h1 className="animate__animated animate__zoomInDown py-4 text-gray-700 dark:text-white text-3xl sm:text-4xl lg:text-5xl">
            Software Engineer &amp; Full Stack Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-fit mx-auto dark:text-white text-lg sm:text-xl">
            Experienced
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong> Software Engineer</strong>
            </span>{" "}
            and{" "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>Full Stack Developer</strong>
            </span>{" "}
            building innovative solutions in the NY Tri-State area. Passionate about creating scalable applications with{" "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>
                JavaScript, React, Next.js, Node.js, TypeScript, Python, SQL
              </strong>
            </span>
            {", "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>AWS</strong>
            </span>
            {", and "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>much more</strong>
            </span>{" "}
            &mdash; transforming ideas into powerful, user-friendly applications. Details are listed below.
          </p>
          
          {/* Call to Action Section */}
          <div className="mt-8 mb-6">
            <p className="text-gray-600 dark:text-white text-lg sm:text-xl">
              Let&apos;s connect and discuss how we can work together!
            </p>
            <Link 
              href="/#contact"
              aria-label="Contact Andrew Aliaj"
              className="inline-block"
            >
              <button className="mt-4 px-8 py-3 text-white bg-[#21568a] rounded-lg hover:bg-[#1a4571] transition-colors duration-300 text-lg font-medium">
                Get in Touch
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-between max-w-[400px] sm:max-w-[430px] mx-auto py-4">
            <Link 
              href="https://www.linkedin.com/in/andrewaliaj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Andrew Aliaj's LinkedIn Profile"
              className="social-link"
            >
              <Tooltip content="Connect on LinkedIn" color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaLinkedinIn aria-hidden="true" />
                  <span className="sr-only">LinkedIn Profile</span>
                </div>
              </Tooltip>
            </Link>
            <Link 
              href="https://github.com/Andrewx24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Andrew Aliaj's GitHub Profile"
              className="social-link"
            >
              <Tooltip content="View GitHub Projects" color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaGithub aria-hidden="true" />
                  <span className="sr-only">GitHub Profile</span>
                </div>
              </Tooltip>
            </Link>
            <Link 
              href="https://medium.com/@andrewaliaj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Andrew Aliaj's Blog Posts on Medium"
              className="social-link"
            >
              <Tooltip content="Read on Medium" color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaMediumM aria-hidden="true" />
                  <span className="sr-only">Medium Blog</span>
                </div>
              </Tooltip>
            </Link>
            <Link 
              href="/#contact"
              aria-label="Send email to Andrew Aliaj"
              className="social-link"
            >
              <Tooltip content="Send an Email" color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <AiOutlineMail aria-hidden="true" />
                  <span className="sr-only">Contact Form</span>
                </div>
              </Tooltip>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Main;