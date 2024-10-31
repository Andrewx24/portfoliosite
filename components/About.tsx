import Image from "next/image";
import React from "react";
import profileImg from '@/public/assets/profile/profile.png';

const About = () => {
  return (
    <section id="about" className="w-full p-2 flex items-center pt-8 mx-auto">
      <div className="max-w-[1240px] mx-auto px-4">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#21568a] dark:text-white text-center md:text-left">
            About
          </p>
          <h2 className="py-4 dark:text-white text-center md:text-left">Who I Am</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 items-center">
            {/* Enhanced Profile Image Container */}
            <div className="relative group w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto mb-6 md:mb-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#21568a] to-[#3178c6] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <figure className="relative w-full h-auto bg-white dark:bg-gray-800 ring-1 ring-gray-200/20 dark:ring-gray-800/30 rounded-xl flex items-center justify-center p-4 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#21568a]/10 to-transparent rounded-xl"></div>
                <Image
                  src={profileImg}
                  alt="Andrew Aliaj - Dynamic Software Engineer"
                  width={400}
                  height={400}
                  className="rounded-lg transform transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </figure>
            </div>

            <div className="text-center md:text-left space-y-4">
              <p className="py-2 text-gray-600 dark:text-white leading-relaxed">
                Dynamic Software Engineer and Full Stack Developer specializing in <span className="text-[#21568a] font-bold">AI</span>, <span className="text-[#21568a] font-bold">LLMs</span>, and scalable web applications with deep expertise in <span className="text-[#21568a] font-bold">JavaScript</span>, <span className="text-[#21568a] font-bold">TypeScript</span>, <span className="text-[#21568a] font-bold">Golang</span>, and <span className="text-[#21568a] font-bold">Python</span>.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#21568a] dark:text-white mb-2">Frontend Development</h3>
                  <p className="text-gray-600 dark:text-white">
                    I design and build high-performance applications that prioritize both usability and aesthetic excellence, leveraging <span className="text-[#21568a] font-bold">React</span>, <span className="text-[#21568a] font-bold">Next.js</span>, and <span className="text-[#21568a] font-bold">Tailwind CSS</span> to create engaging user experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#21568a] dark:text-white mb-2">Backend Architecture</h3>
                  <p className="text-gray-600 dark:text-white">
                    On the backend, I create resilient solutions with <span className="text-[#21568a] font-bold">Node.js</span>, <span className="text-[#21568a] font-bold">Django</span>, and <span className="text-[#21568a] font-bold">Golang</span>, managing data effectively with <span className="text-[#21568a] font-bold">SQL</span> and <span className="text-[#21568a] font-bold">MongoDB</span>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#21568a] dark:text-white mb-2">Cloud & AI Innovation</h3>
                  <p className="text-gray-600 dark:text-white">
                    I ensure secure, scalable deployment through <span className="text-[#21568a] font-bold">AWS</span>, while specializing in implementing cutting-edge <span className="text-[#21568a] font-bold">AI</span> and <span className="text-[#21568a] font-bold">LLM</span> solutions that drive innovation and business value.
                  </p>
                </div>

                <p className="text-gray-600 dark:text-white">
                  My approach combines technical expertise with creative problem-solving, delivering solutions that are not just functional but transformative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;