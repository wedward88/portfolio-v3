'use client';
import { motion } from 'motion/react';

import { projects } from './manifest';
import Project from './Project';

const ProjectsPage = () => {
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className='w-full pb-12 md:pb-16'
      initial='hidden'
      animate='visible'
    >
      <motion.header
        className='mb-8 pt-4 md:mb-12 md:pt-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.4 }}
      >
        <div className='relative inline-block'>
          <h1 className='relative z-10 text-4xl font-thin md:text-5xl lg:text-6xl'>
            Projects
          </h1>
          <span className='absolute inset-x-[-10px] bottom-0 z-0 h-[50%] rounded-full bg-base-100' />
        </div>
      </motion.header>

      {projects.map((project, idx) => (
        <motion.div
          key={project.name}
          initial='hidden'
          animate='visible'
          variants={itemVariants}
        >
          <Project
            project={project}
            index={idx}
            isLast={idx === projects.length - 1}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsPage;
