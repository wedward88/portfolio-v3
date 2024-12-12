import React from 'react';

import ProjectCard from './ProjectCard';
import { projects } from './manifest';

const ProjectsPage = () => {
  return (
    <div className='flex flex-col w-full items-center pb-20'>
      <div className='flex w-full flex-col'>
        <div className='divider divider-accent text-2xl'>My projects</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 md:gap-20 lg:gap-20'>
        {projects.map((project, idx) => (
          <div className='animate-fadeIn' key={idx}>
            <ProjectCard
              name={project.name}
              url={project.url}
              title={project.title}
              desc={project.desc}
              badges={project.badges}
              github={project.github}
              link={project.link}
            />
          </div>
        ))}
        <div className='animate-fadeIn'></div>
      </div>
    </div>
  );
};

export default ProjectsPage;
