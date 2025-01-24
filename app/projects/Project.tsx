'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

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
          <p>{desc}</p>
          <motion.div
            className='flex flex-wrap justify-center space-x-2'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {badges.map((badge, i) => (
              <motion.div
                key={`${name}-${i}`}
                className='badge badge-secondary font-semibold mb-2'
                variants={itemVariants}
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
