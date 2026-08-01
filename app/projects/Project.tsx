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
  index: number;
}

const Project = ({ project, isLast, index }: ProjectProps) => {
  const handleLinkClick = (eventName: string) => {
    sendGAEvent('event', eventName);
  };

  const reverse = index % 2 === 1;

  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { ease: 'easeIn', duration: 0.5 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { ease: 'easeIn', duration: 0.5 },
    },
  };

  const badgeVariant = {
    hidden: { y: 24 },
    visible: {
      y: 0,
      transition: { staggerChildren: 0.04, ease: 'easeIn' },
    },
  };

  const itemVariant = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const eleRef = useRef(null);
  const isInView = useInView(eleRef, { once: true, amount: 'some' });
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, amount: 0.3 });

  return (
    <section className='w-full'>
      <div
        className={`flex flex-col items-stretch gap-6 md:gap-8 xl:items-center xl:gap-10 ${
          reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
        }`}
      >
        <motion.div
          variants={imageVariant}
          initial='hidden'
          animate={imgInView ? 'visible' : 'hidden'}
          className='w-full shrink-0 xl:w-[58%]'
        >
          <Link
            href={project.link}
            target='_blank'
            onClick={() => handleLinkClick(`projectVisited:${project.title}`)}
            className='group block'
          >
            <div className='overflow-hidden rounded-lg border border-base-content/10 bg-base-100 shadow-md transition duration-300 md:rounded-xl md:group-hover:scale-[1.02] md:group-hover:border-base-content/20 md:group-hover:shadow-lg'>
              <Image
                id={project.name}
                alt={project.name}
                src={project.url}
                width={960}
                height={640}
                ref={imgRef}
                priority={index === 0}
                sizes='(max-width: 1280px) 90vw, 45vw'
                className='aspect-[3/2] h-auto w-full object-cover object-top'
              />
            </div>
          </Link>
        </motion.div>

        <motion.div
          variants={sectionVariant}
          animate={isInView ? 'visible' : 'hidden'}
          initial='hidden'
          className='flex w-full flex-col items-start gap-4 md:gap-5 xl:max-w-md'
          ref={eleRef}
        >
          <div className='flex flex-col gap-2'>
            <Link
              className='project-title text-3xl font-thin hover:text-primary hover:underline hover:underline-offset-8 md:text-4xl'
              href={project.link}
              target='_blank'
              onClick={() =>
                handleLinkClick(`projectVisited:${project.title}`)
              }
            >
              {project.title}
            </Link>
            <div className='flex items-center gap-3 text-sm text-base-content/70 md:gap-4 md:text-base'>
              <span>{project.date}</span>
              <Link
                className='text-lg hover:text-accent md:text-xl'
                target='_blank'
                href={project.github}
                onClick={() =>
                  handleLinkClick(`githubVisited:${project.name}`)
                }
                aria-label={`${project.title} on GitHub`}
              >
                <FaGithub />
              </Link>
            </div>
          </div>

          <p className='text-base leading-relaxed text-base-content md:text-xl'>
            {project.desc}
          </p>

          <motion.div
            className='flex flex-wrap gap-2'
            variants={badgeVariant}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            {project.badges.map((badge, i) => (
              <motion.span
                key={`${project.name}-${i}`}
                className='rounded-full border border-base-content/10 bg-base-100 px-2.5 py-0.5 text-xs text-base-content/80 will-change-transform md:px-3 md:py-1 md:text-sm'
                variants={itemVariant}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {!isLast && <div className='divider divider-base-100 my-8 md:my-12' />}
    </section>
  );
};

export default Project;
