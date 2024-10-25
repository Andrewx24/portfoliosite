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
            <figure className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mb-6 md:mb-0 dark:shadow-none">
              <Image
                src={profileImg}
                alt="Profile Image"
                width={400}
                height={400}
                className="rounded-xl"
                priority
              />
            </figure>
            <div className="text-center md:text-left">
              <p className="py-2 text-gray-600 dark:text-white leading-relaxed">
                As a detail-oriented Full Stack Developer, I specialize in creating modern web applications with a focus on exceptional user experiences. My expertise spans both frontend and backend development, utilizing <span className="text-[#21568a] font-bold">JavaScript</span>, <span className="text-[#21568a] font-bold">TypeScript</span>, and <span className="text-[#21568a] font-bold">Python</span>. On the frontend, I craft intuitive interfaces with <span className="text-[#21568a] font-bold">React</span> and <span className="text-[#21568a] font-bold">Next.js</span>, enhanced by <span className="text-[#21568a] font-bold">Tailwind CSS</span> for responsive design. For backend solutions, I leverage <span className="text-[#21568a] font-bold">Node.js</span> and <span className="text-[#21568a] font-bold">Django</span>, implementing robust database systems with <span className="text-[#21568a] font-bold">SQL</span> and <span className="text-[#21568a] font-bold">MongoDB</span>. I ensure scalability and reliability through <span className="text-[#21568a] font-bold">AWS</span> cloud infrastructure. My technical toolkit includes <span className="text-[#21568a] font-bold">Redux</span> for state management, <span className="text-[#21568a] font-bold">React Query</span> for efficient data handling, <span className="text-[#21568a] font-bold">Jest</span> and <span className="text-[#21568a] font-bold">React Testing Library</span> for comprehensive testing, and <span className="text-[#21568a] font-bold">GraphQL</span> for API development, all managed through <span className="text-[#21568a] font-bold">Git</span> for version control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;