'use client';

import { motion } from 'motion/react';

import { projects } from './manifest';
import Project from './Project';

const ProjectsPage = () => {
  return (
    <motion.div
      className='w-full pb-16 md:pb-24'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.4 }}
    >
      <header className='mb-12 pt-4 md:mb-16 md:pt-0'>
        <div className='relative inline-block w-fit self-start'>
          <h1 className='relative z-10 text-4xl font-thin md:text-5xl lg:text-6xl'>
            Projects
          </h1>
          <span className='absolute inset-x-[-10px] bottom-0 z-0 h-[50%] rounded-full bg-base-100' />
        </div>
      </header>

      <div className='flex flex-col gap-16 md:gap-24'>
        {projects.map((project, idx) => (
          <Project key={project.name} project={project} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
