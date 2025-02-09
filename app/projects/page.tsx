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
      initial='hidden'
      animate='visible'
    >
      {projects.map((project, idx) => (
        <motion.div key={idx} initial='hidden' animate='visible' variants={itemVariants}>
          <Project project={project} isLast={idx === projects.length - 1} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsPage;
