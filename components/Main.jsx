'use client';
import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Tooltip } from "@nextui-org/tooltip";

const Main = () => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div  className="w-full text-center container">
      <Head>
        <title>Andrew Aliaj - Home</title>
      </Head>
      <main
        className={
          collapse
            ? "max-w-[1240px] mx-auto p-2 flex justify-center items-center"
            : "mt-60"
        }
      >
        <div>
          <h1 className="animate__animated animate__zoomInDown py-4 text-gray-700 dark:text-white">
           Full Stack Developer
          </h1>
   
          <p className="py-4 text-gray-600 max-w-[41em] m-auto dark:text-white">
            
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>Software Engineer</strong>
            </span>{" "}
            and a{" "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>Full Stack Developer</strong>
            </span>{" "}
            based out of the  New York City Area. I specialize in <span className="text-[#21568a] font-bold dark:text-white"> <strong>Javascript,React,Next.js,Node.js,Typescript,Python,SQL, and AWS.</strong> </span> Details are listed below. 
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/andrewaliaj/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content={"LinkedIn"} rounded color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaLinkedinIn />
                </div>
              </Tooltip>
            </a>
            <a
              href="https://github.com/Andrewx24"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content={"GitHub"} rounded color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaGithub />
                </div>
              </Tooltip>
            </a>
            <Tooltip content={"Email me below"} rounded color="primary">
              <Link href="/#contact">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <AiOutlineMail />
                </div>
              </Link>
            </Tooltip>
    
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;