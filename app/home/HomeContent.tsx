'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import SkillsSection from '../skills/SkillsSection';

const HomeContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className='flex flex-col justify-between'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div className='flex mt-10 items-center' variants={fadeInVariant}>
        <div className='text-5xl lg:text-7xl text-primary font-thin'>
          Hello!
        </div>
        <div className='avatar ml-10'>
          <div className='mask mask-hexagon w-[150px] lg:w-[200px]'>
            <Image
              id='headshot'
              alt='headshot'
              src='/images/headshot.jpg'
              width='200'
              height='200'
            />
          </div>
        </div>
      </motion.div>
      <motion.p
        className='text-xl lg:text-2xl text-base-content mt-10'
        variants={fadeInVariant}
      >
        I&apos;m&nbsp;
        <a
          className='text-2xl text-secondary hover:text-primary'
          href='https://www.linkedin.com/in/wedward88/'
          target='_blank'
        >
          William Dunn
        </a>
        , a software engineer and problem solver based out of Nashville, TN.
      </motion.p>
      <div className='flex flex-col text-xl md:text-2xl lg:text-2xl mt-10 lg:mt-20'>
        <div className='flex justify-evenly items-center'>
          <div className='flex w-full flex-col'>
            <motion.div
              className='divider divider-accent text-2xl lg:text-3xl'
              variants={slideUpVariant}
            >
              A little about me
            </motion.div>
          </div>
        </div>
        <div>
          <motion.p className='mt-5 lg:mt-20' variants={slideUpVariant}>
            Born and raised in the NYC area, my passion for technology started
            in middle school, when I needed to upgrade the family computer with
            a new video card. Many years later, equipped with a degree in
            Computer Information Systems, I&apos;ve dedicated my career to
            crafting clean, intuitive, and enjoyable web experiences.
          </motion.p>
          <motion.p className='mt-5 lg:mt-10' variants={slideUpVariant}>
            With over 9 years of IT experience and 5 years (and counting) in
            software development, I possess a strong foundation in
            problem-solving and analytical thinking, allowing me to effectively
            troubleshoot.
          </motion.p>
          <motion.p className='mt-5 lg:mt-10' variants={slideUpVariant}>
            I&apos;m always looking to learn new technologies, and expand my
            skill set. Please take a moment to check out some of my{' '}
            <Link
              className='text-xl lg:text-3xl text-secondary hover:text-primary'
              href={'/projects'}
            >
              projects!
            </Link>
          </motion.p>
        </div>
        <motion.div variants={fadeInVariant}>
          <SkillsSection />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomeContent;
