'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

import { sendGAEvent } from '@next/third-parties/google';

import { ProjectType } from './manifest';

interface ProjectProps {
  project: ProjectType;
  isLast: boolean;
}

const Project = ({ project, isLast }: ProjectProps) => {
  const handleLinkClick = (eventName: string) => {
    sendGAEvent('event', eventName);
  };

  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { ease: 'easeIn', duration: 0.5 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0.1 },
    visible: {
      opacity: 1,
      transition: { ease: 'easeIn', duration: 0.5 },
    },
  };

  const badgeVariant = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      transition: { staggerChildren: 0.05, ease: 'easeIn' },
    },
  };

  const itemVariant = {
    hidden: { y: 50, scale: 0 },
    visible: { y: 0, scale: 1 },
  };

  const eleRef = useRef(null);
  const isInView = useInView(eleRef, { once: true, amount: 'some' });
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { amount: 'all' });

  return (
    <section>
      <div className='flex flex-col items-center xl:space-x-10 xl:flex-row my-8 xl:my-16'>
        <motion.div
          variants={imageVariant}
          initial='hidden'
          animate={imgInView ? 'visible' : 'hidden'}
          whileHover={{ scale: 1.05, opacity: 1 }}
        >
          <Link
            className='text-3xl project-title'
            href={project.link}
            target='_blank'
            onClick={() => handleLinkClick(`projectVisited:${project.title}`)}
          >
            <Image
              id={project.name}
              alt={project.name}
              src={project.url}
              width={400}
              height={500}
              ref={imgRef}
              priority
              className={`shadow-2xl w-full transition-opacity md:max-w-[40vw] mb-10 duration-300 rounded-3xl object-cover aspect-[3/2.2]`}
            />
          </Link>
        </motion.div>
        <motion.section
          variants={sectionVariant}
          animate={isInView ? 'visible' : 'hidden'}
          initial='hidden'
          className='flex flex-col w-full space-y-5 items-center 2xl:items-center 2xl:max-w-lg'
        >
          <div className='flex flex-col items-start'>
            <div className='flex items-center'>
              <Link
                className='text-3xl project-title'
                href={project.link}
                target='_blank'
                onClick={() =>
                  handleLinkClick(`projectVisited:${project.title}`)
                }
              >
                <div className='relative inline-block'>
                  <span className='relative z-10 hover:text-primary'>
                    {project.title}
                  </span>
                  <span className='absolute rounded-full inset-x-[-10px] bottom-[-90%] h-[140%] bg-base-100' />
                </div>
              </Link>
            </div>
            <span className='flex text-base-content z-10'>
              {project.date}{' '}
              <Link
                className='ml-5 text-2xl hover:text-accent'
                target='_blank'
                href={project.github}
                onClick={() => handleLinkClick(`githubVisited:${project.name}`)}
              >
                <FaGithub />
              </Link>
            </span>
          </div>
          <motion.p className='md:text-xl'>{project.desc}</motion.p>
          <motion.div
            className='flex flex-wrap justify-center space-x-2'
            variants={badgeVariant}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            ref={eleRef}
          >
            {project.badges.map((badge, i) => (
              <motion.div
                key={`${project.name}-${i}`}
                className='badge badge-xl text-base-content mb-2 will-change-transform'
                variants={itemVariant}
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
      {!isLast && <div className='divider divider-base-100' />}
    </section>
  );
};

export default Project;
