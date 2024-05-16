import Image from "next/image";
import React from "react";
import Link from "next/link";
import profileImg from '@/public/assets/profile/profile.png';
const About = () => {
  return (
    <section id="about" className="w-full container p-2 flex items-center pt-8 mx-5">
      <div className="max-w-[1240px] m-auto">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#21568a] dark:text-white">
            About
          </p>
          <h2 className="py-4 dark:text-white">Who I Am</h2>
          <div className="mx-5 md:grid md:grid-cols-2 md:gap-1 content-center items-center">
            <figure className="w-96 md:w-80 lg:w-96 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mb-6 md:my-auto dark:shadow-none">
              <Image
                src={profileImg}
                alt="/"
                width="400"
                height="400"
                className="rounded-xl"
              />
            </figure>
            <div>
            

              <p className="py-2 text-gray-600 dark:text-white">
              Detail-oriented Full Stack Developer, I bring extensive experience with JavaScript, TypeScript, and Python to every project. I specialize in designing modern applications with a strong focus on user interface aesthetics. By leveraging the capabilities of React and Next.js, combined with the flexibility of Tailwind CSS, I create intuitive and visually compelling frontends that enhance user interactions. On the backend, I utilize Node.js and Django to deliver robust solutions aligned with strategic business goals. My expertise extends to managing databases with SQL and MongoDB, and I implement AWS for hosting solutions that are reliable, scalable, and secure.
                
              </p>

        
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;