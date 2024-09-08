'use client';

import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Tooltip } from "@nextui-org/tooltip";

const Main = () => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="w-full text-center container mx-auto py-16">
      <Head>
        <title>Andrew Aliaj - Home</title>
      </Head>
      <main className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center items-center">
        <div className="w-full">
          <h1 className="animate__animated animate__zoomInDown py-4 text-gray-700 dark:text-white text-3xl sm:text-4xl lg:text-5xl">
            Full Stack Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-fit mx-auto dark:text-white text-lg sm:text-xl">
            I am a
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong> Software Engineer</strong>
            </span>{" "}
            and{" "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>Full Stack Developer</strong>
            </span>{" "}
            based in the New York City area, specializing in{" "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>
                JavaScript, React, Next.js, Node.js, TypeScript, Python, SQL,
                and AWS.
              </strong>
            </span>{" "}
            Details are listed below.
          </p>
          <div className="flex items-center justify-between max-w-[300px] sm:max-w-[330px] mx-auto py-4">
            <a
              href="https://www.linkedin.com/in/andrewaliaj/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content={"LinkedIn"} color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaLinkedinIn />
                </div>
              </Tooltip>
            </a>
            <a
              href="https://github.com/Andrewx24"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content={"GitHub"} color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaGithub />
                </div>
              </Tooltip>
            </a>
            <Tooltip content={"Email me below"} color="primary">
              <Link href="/#contact">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <AiOutlineMail />
                </div>
              </Link>
            </Tooltip>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
