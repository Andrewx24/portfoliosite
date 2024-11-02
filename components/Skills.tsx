
import Image from 'next/image';

import javascriptImg from '/public/assets/skills/javascript.png';
import pythonImg from '/public/assets/skills/python.png';
import typescriptImg from '/public/assets/skills/typescript.png';
import reactImg from '/public/assets/skills/react.png';
import reduxImg from '/public/assets/skills/redux.png';
import tailwindImg from '/public/assets/skills/tailwind.png';
import nextjsImg from '/public/assets/skills/nextjs.png';
import nodeImg from '/public/assets/skills/node.png';
import expressImg from '/public/assets/skills/express.png';
import djangoImg from '/public/assets/skills/django.png';
import sqlImg from '/public/assets/skills/sql.png';
import mongoImg from '/public/assets/skills/mongo.png';
import awsImg from '/public/assets/skills/aws.png';
import jestImg from '/public/assets/skills/jest.png';
import graphQLImg from '/public/assets/skills/graphQL.png';
import dockerImg from '/public/assets/skills/docker.png';
import gitImg from '/public/assets/skills/git.png';
import gitHubImg from '/public/assets/skills/github.png';
import flaskImg from '/public/assets/skills/flask.png';
import reactqueryImg from '/public/assets/skills/reactquery.png';
import reacttestingImg from '/public/assets/skills/reacttesting.png'; 
import kubernetesImg from '/public/assets/skills/kubernetes.png';
import goImg from '/public/assets/skills/go.png';
import vercelImg from '/public/assets/skills/vercel.png';
import reactnativeImg from '/public/assets/skills/reactnative.png';
import figmaImg from '/public/assets/skills/figma.png';


const skills = [
 
  { img: javascriptImg, label: 'JavaScript' },
  { img: reactImg, label: 'React' },
  { img: nextjsImg, label: 'Next.js' }, 
  { img: typescriptImg, label: 'TypeScript' },
  { img: pythonImg, label: 'Python' },
  { img: reduxImg, label: 'Redux' },
  { img: tailwindImg, label: 'Tailwind CSS' },
  { img: nodeImg, label: 'Node.js' },
  { img: expressImg, label: 'Express.js' },
  { img: djangoImg, label: 'Django' },
  { img: sqlImg, label: 'SQL' },
  { img: mongoImg, label: 'MongoDB' },
  { img: awsImg, label: 'AWS' },
  { img: jestImg, label: 'Jest' },
  { img: graphQLImg, label: 'GraphQL' },
  { img: dockerImg, label: 'Docker' },
  { img: gitImg, label: 'Git' },
  { img: gitHubImg, label: 'GitHub' },
  { img: flaskImg, label: 'Flask' },
  { img: reactqueryImg, label: 'React Query' },
  { img: reacttestingImg, label: 'React Testing Library' },
  { img: kubernetesImg, label: 'Kubernetes' },
  { img: goImg, label: 'Go' },
  { img: vercelImg, label: 'Vercel' },
  { img: reactnativeImg, label: 'React Native' },
  { img: figmaImg, label: 'Figma' },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full container p-2 pt-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#21568a] dark:text-white">
          Skills
        </p>
        <h2 className="py-4 dark:text-white">What I Can Do</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 sm:mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-none">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={skill.img} alt={skill.label} width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="dark:text-white">{skill.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
 


export default Skills