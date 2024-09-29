'use client';

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaCloudDownloadAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { MdDevices, MdSearch } from 'react-icons/md';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
  { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
  { name: 'SCSS', icon: <FaSass className="text-pink-500" /> },
  { name: 'Responsive Design', icon: <MdDevices className="text-purple-600" /> },
  { name: 'SEO', icon: <MdSearch className="text-green-500" /> },
];

const SkillCard = ({ name, icon }) => (
  <div className="flex flex-col items-center p-4 border rounded-lg cursor-pointer shadow-md hover:shadow-xl bg-gray-100 dark:bg-gray-800 transition-transform transform hover:-translate-y-1 w-full sm:w-auto">
    <div className="text-4xl mb-2">{icon}</div>
    <span className="text-center text-sm sm:text-base">{name}</span>
  </div>
);

const DownloadButton = () => (
  <a
    href="/files/mycv.pdf"
    download
    className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 overflow-hidden font-bold text-gray-900 rounded-md shadow-2xl bg-white transition-all duration-300 ease-out hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
  >
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative flex items-center">
      <FaCloudDownloadAlt className="mr-2 text-xl sm:text-2xl transition-transform duration-300 ease-in-out group-hover:animate-bounce" />
      <span className="tracking-wider text-xs sm:text-sm">Download CV</span>
    </span>
  </a>
);

export default function About() {
  return (
    <section className="h-fit bg-white p-4 sm:p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 sm:mb-8 text-center text-2xl sm:text-4xl font-bold">About Me</h1>
        <div className="mb-4 sm:mb-8 text-center text-base sm:text-lg leading-relaxed">
          <p>
            I'm a junior front-end developer with strong skills in various web technologies. 
            I can develop responsive client-side or server-side web pages with proper SEO and excellent user experience.
          </p>
        </div>
        
        <div className="mb-6 sm:mb-12 flex justify-center">
          <DownloadButton />
        </div>
        
        <h2 className="mb-4 sm:mb-6 text-center text-xl sm:text-2xl font-semibold">My Skills</h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
