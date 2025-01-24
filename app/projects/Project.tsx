'use client';

import clsx from 'clsx';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

import { sendGAEvent } from '@next/third-parties/google';

interface Props {
  badges: Array<string>;
  desc: string;
  github: string;
  link: string;
  name: string;
  title: string;
  url: string;
  idx: number;
  isLast: boolean;
}

const ProjectCard = ({
  badges,
  desc,
  github,
  link,
  name,
  title,
  url,
  idx,
  isLast,
}: Props) => {
  const handleLinkClick = (eventName: string) => {
    sendGAEvent('event', eventName);
  };

  const isOdd = idx % 2 === 0;

  const paragraphVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { ease: 'easeIn', duration: 0.5 },
    },
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, ease: 'easeIn' },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { ease: 'easeIn' },
  };

  const eleRef = useRef(null);
  const isInView = useInView(eleRef, { once: true, amount: 'some' });

  return (
    <div>
      <div
        className={clsx(
          'flex flex-col items-center my-10  md:space-x-5',
          isOdd ? 'md:flex-row' : 'md:flex-row-reverse'
        )}
      >
        <Image
          id={name}
          alt={name}
          src={url}
          width={400}
          height={500}
          className={`shadow-2xl transition-opacity duration-300 rounded-3xl md:mx-5 mb-5`}
        />
        <div className='flex flex-col space-y-5 items-start md:max-w-lg'>
          <div className='flex items-center'>
            <Link
              className='hover:text-accent text-3xl'
              href={link}
              target='_blank'
              onClick={() => handleLinkClick(`projectVisited:${title}`)}
            >
              {title}
            </Link>
            <Link
              className='ml-5 text-2xl hover:text-accent'
              target='_blank'
              href={github}
              onClick={() => handleLinkClick(`githubVisited:${github}`)}
            >
              <FaGithub />
            </Link>
          </div>
          <motion.p
            variants={paragraphVariant}
            animate={isInView ? 'visible' : 'hidden'}
          >
            {desc}
          </motion.p>
          <motion.div
            className='flex flex-wrap justify-center space-x-2'
            variants={badgeVariant}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
          >
            {badges.map((badge, i) => (
              <motion.div
                key={`${name}-${i}`}
                className='badge badge-secondary font-semibold mb-2'
                variants={itemVariant}
                ref={eleRef}
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {!isLast && <div className='divider divider-base-100' />}
    </div>
  );
};

export default ProjectCard;
