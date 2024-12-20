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
            delivering enterprise-grade solutions in the NY Tri-State area. Specialized in building scalable SaaS applications and cloud architectures with{" "}
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
              <strong>Cloud Technologies</strong>
            </span>
            . From concept to deployment, transforming business requirements into robust, user-centric applications with comprehensive frontend and backend expertise.
          </p>
          
          <div className="mt-8 mb-6">
            <p className="text-gray-600 dark:text-white text-lg sm:text-xl">
              Ready to build your next innovative solution? Let&apos;s collaborate!
            </p>
            <div className="flex justify-center mt-4">
              <Link 
                href="/#contact"
                aria-label="Contact Andrew Aliaj"
                className="inline-block p-2"
              >
                <button className="px-10 py-6 h-14 min-w-[160px] text-white bg-[#21568a] rounded-lg hover:bg-[#1a4571] transition-colors duration-300 text-lg font-medium">
                  Contact Me
               </button>
              </Link>
              <Link 
                href="https://productivitysumo.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Startup: Productivity Sumo"
                className="inline-block p-2"
              >
                <button className="px-10 py-6 h-14 min-w-[160px] text-white bg-[#21568a] rounded-lg hover:bg-[#1a4571] transition-colors duration-300 text-lg font-medium">
                    My SaaS Startup
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between max-w-[440px] sm:max-w-[480px] mx-auto py-4 gap-8">
            <Link 
              href="https://www.linkedin.com/in/andrewaliaj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Andrew Aliaj's LinkedIn Profile"
              className="p-2"
            >
              <Tooltip content="Connect on LinkedIn" color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none h-20 w-20 flex items-center justify-center">
                  <FaLinkedinIn size={24} aria-hidden="true" />
                  <span className="sr-only">LinkedIn Profile</span>
                </div>
              </Tooltip>
            </Link>
            <Link 
              href="https://github.com/Andrewx24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Andrew Aliaj's GitHub Profile"
              className="p-2"
            >
              <Tooltip content="View GitHub Projects" color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none h-20 w-20 flex items-center justify-center">
                  <FaGithub size={24} aria-hidden="true" />
                  <span className="sr-only">GitHub Profile</span>
                </div>
              </Tooltip>
            </Link>
            <Link 
              href="https://medium.com/@andrewaliaj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Andrew Aliaj's Blog Posts on Medium"
              className="p-2"
            >
              <Tooltip content="Read Technical Articles" color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none h-20 w-20 flex items-center justify-center">
                  <FaMediumM size={24} aria-hidden="true" />
                  <span className="sr-only">Medium Blog</span>
                </div>
              </Tooltip>
            </Link>
            <Link 
              href="/#contact"
              aria-label="Send email to Andrew Aliaj"
              className="p-2"
            >
              <Tooltip content="Start a Conversation" color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none h-20 w-20 flex items-center justify-center">
                  <AiOutlineMail size={24} aria-hidden="true" />
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