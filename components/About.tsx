import Image from "next/image";
import React from "react";
import profileImg from '@/public/assets/profile/profile.png';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="w-full p-2 flex items-center pt-16 pb-24 mx-auto bg-gradient-to-b from-white to-gray-50 dark:from-[#152028] dark:to-[#1a2634]">
      <div className="max-w-[1240px] mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#21568a] dark:text-white text-center md:text-left">
            Building Modern Enterprise Solutions
          </h2>
          
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 items-start">
            <div className="relative group w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto mb-8 md:mb-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#21568a] to-[#3178c6] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <figure className="relative w-full h-auto bg-white dark:bg-gray-800 ring-1 ring-gray-200/20 dark:ring-gray-800/30 rounded-xl p-4 shadow-xl">
                <Image
                  src={profileImg}
                  alt="Andrew Aliaj - Software Solutions Expert"
                  width={400}
                  height={400}
                  className="rounded-lg transform transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </figure>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#21568a] dark:text-white mb-3">
                  Why Partner With Me?
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#21568a] mr-2">→</span>
                    <span><strong>Technical Excellence:</strong> Deep expertise in modern web technologies and AI integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#21568a] mr-2">→</span>
                    <span><strong>Full-Stack Capabilities:</strong> Comprehensive development from responsive UIs to robust backend systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#21568a] mr-2">→</span>
                    <span><strong>Innovation Focus:</strong> Leveraging cutting-edge AI and cloud technologies for optimal solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#21568a] dark:text-white mb-3">
                  What I Deliver
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#21568a] mr-2">→</span>
                    <span><strong>Custom Software Solutions:</strong> Tailored applications that address your specific business needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#21568a] mr-2">→</span>
                    <span><strong>Modern Architecture:</strong> Scalable applications built with React, Next.js, and cloud technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#21568a] mr-2">→</span>
                    <span><strong>AI Integration:</strong> Smart features that enhance your application&apos;s capabilities</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-center md:text-left">
                <Link 
                  href="/#contact"
                  className="inline-block px-8 py-4 bg-[#21568a] text-white rounded-lg hover:bg-[#1a4571] transition-colors duration-300 font-medium"
                >
                  Let&apos;s Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;