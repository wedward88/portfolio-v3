import React from 'react';

import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
  return (
    <div className='flex flex-col w-full items-center pb-20'>
      <div className='flex w-full flex-col'>
        <div className='divider divider-accent text-2xl'>My projects</div>
      </div>
      <div className='grid grid-cols-1 gap-10 mt-10 md:gap-20 lg:gap-20'>
        <div className='animate-fadeIn'>
          <ProjectCard
            name='nyt-headliner'
            url='/images/nyt-headliner.png'
            title='NYT Headliner'
            desc='A small app to browse New York Times articles from a specified date.'
            badges={['NextJS', 'React', 'Tailwind CSS']}
            github='https://github.com/wedward88/nyt-headliner'
            link='https://nyt-headliner.wedward.com/'
          />
        </div>
        <div className='animate-fadeIn'>
          <ProjectCard
            name='twodeeskate'
            url='/images/twodeeskate.png'
            title='Two Dee Skate'
            desc='A 2D side-scrolling skateboarding game.'
            badges={['Javascript', 'HTML5', 'Canvas', 'CSS3', 'Webpack']}
            github='https://github.com/wedward88/TwoDeeSkate'
            link='https://wedward88.github.io/TwoDeeSkate/'
          />
        </div>
        <div className='animate-fadeIn'>
          <ProjectCard
            name='endeavornote'
            url='/images/endeavornote.png'
            title='Endeavornote'
            desc='A single page clone of Evernote with custom authentication.'
            badges={[
              'React',
              'Redux',
              'Ruby',
              'Rails',
              'PostgreSQL',
              'HTML5',
              'CSS3',
            ]}
            github='https://github.com/wedward88/Endeavornote'
            link='https://endeavornote.wedward.com/#/'
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
