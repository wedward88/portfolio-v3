'use client';
import { motion } from 'motion/react';

import { projects } from './manifest';
import Project from './Project';

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className='flex flex-col w-full items-center pb-10 xl:max-w-[50vw]'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex w-full flex-col'>
        <div className='divider divider-accent text-2xl'>My projects</div>
      </div>
      {projects.map((project, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <Project
            name={project.name}
            url={project.url}
            title={project.title}
            desc={project.desc}
            badges={project.badges}
            github={project.github}
            link={project.link}
            idx={idx}
            isLast={idx === projects.length - 1}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsPage;
