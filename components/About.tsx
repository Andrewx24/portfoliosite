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
              />
            </figure>
            <div className="text-center md:text-left">
              <p className="py-2 text-gray-600 dark:text-white">
                Detail-oriented Full Stack Developer, I bring extensive experience with <strong>JavaScript, TypeScript, and Python</strong> to every project. I specialize in designing modern applications with a strong focus on user interface aesthetics. By leveraging the capabilities of <strong>React and Next.js</strong>, combined with the flexibility of <strong>Tailwind CSS</strong>, I create intuitive and visually compelling frontends that enhance user interactions. On the backend, I utilize <strong>Node.js and Django</strong> to deliver robust solutions aligned with strategic business goals. My expertise extends to managing databases with <strong>SQL and MongoDB</strong>, and I implement <strong>AWS</strong> for hosting solutions that are reliable, scalable, and secure. Additionally, I am proficient in <strong>Redux, React Query, Jest, React Testing Library, GraphQL, Git, GitHub, Express.js, and Flask</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;