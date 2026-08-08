'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import { sendGAEvent } from '@next/third-parties/google';

import { ProjectType } from './manifest';
import ProjectLightbox from './ProjectLightbox';

interface ProjectProps {
  project: ProjectType;
  index: number;
}

const Project = ({ project, index }: ProjectProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleLinkClick = (eventName: string) => {
    sendGAEvent('event', eventName);
  };

  const openLightbox = () => {
    setLightboxOpen(true);
    sendGAEvent('event', `projectImageExpanded:${project.name}`);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

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
        className={`flex flex-col items-stretch gap-6 md:gap-8 xl:items-center xl:gap-12 ${
          reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
        }`}
      >
        <motion.div
          variants={imageVariant}
          initial='hidden'
          animate={imgInView ? 'visible' : 'hidden'}
          className='w-full shrink-0 xl:w-[64%]'
        >
          <button
            type='button'
            onClick={openLightbox}
            className='group block w-full cursor-zoom-in text-left'
            aria-label={`Expand ${project.title} screenshot`}
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
                sizes='(max-width: 1280px) 90vw, 55vw'
                className='aspect-[3/2] h-auto w-full object-cover object-top'
              />
            </div>
          </button>
        </motion.div>

        <motion.div
          variants={sectionVariant}
          animate={isInView ? 'visible' : 'hidden'}
          initial='hidden'
          className='flex w-full flex-col items-start gap-4 md:gap-5 xl:max-w-sm'
          ref={eleRef}
        >
          <div className='flex flex-col gap-1.5'>
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
            <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-base-content/55 md:text-base'>
              <span>{project.date}</span>
              {project.deprecated && (
                <span className='text-base-content/40'>Deprecated</span>
              )}
              <Link
                className='text-base hover:text-accent md:text-lg'
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

          <p className='text-base leading-relaxed text-base-content/90 md:text-lg'>
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
                className='rounded-full border border-base-content/10 bg-base-100 px-2.5 py-0.5 text-xs text-base-content/70 will-change-transform md:px-3 md:py-1 md:text-sm'
                variants={itemVariant}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          <Link
            href={project.link}
            target='_blank'
            onClick={() => handleLinkClick(`projectVisited:${project.title}`)}
            className='group mt-1 inline-flex items-center gap-1.5 text-base text-primary transition-colors hover:text-accent md:text-lg'
          >
            View project
            <span
              aria-hidden
              className='transition-transform duration-300 group-hover:translate-x-1'
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>

      <ProjectLightbox
        open={lightboxOpen}
        onClose={closeLightbox}
        src={project.url}
        alt={project.name}
        title={project.title}
      />
    </section>
  );
};

export default Project;
