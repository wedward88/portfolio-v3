'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import SkillsSection from '../skills/SkillsSection';
import Svg from './Svg';

const HomeContent = () => {
  const transitionConfig = {
    opacity: 0,
    whileInView: {
      opacity: 1,
    },
    transition: {
      ease: 'easeIn',
      delay: 0.2,
    },
    initial: {
      opacity: 0,
    },
  };

  return (
    <div className='flex flex-col justify-between lg:max-w-[40vw]'>
      <div className='flex mt-10 items-center'>
        <motion.div
          {...transitionConfig}
          viewport={{ amount: 'all', once: true }}
          className='mr-20 text-5xl lg:text-7xl font-thin'
        >
          <div className='relative inline-block'>
            <span className='relative z-10'>Hello!</span>
            <span className='absolute rounded-full inset-x-[-10px] bottom-0 h-[50%] bg-base-100'></span>
          </div>
        </motion.div>
        <div className='relative'>
          <div className='avatar  z-20'>
            <div className='mask mask-hexagon w-[150px] lg:w-[200px]'>
              <Image
                id='headshot'
                alt='headshot'
                src='/images/headshot.jpg'
                width='200'
                height='200'
                priority
              />
            </div>
          </div>
          <Svg className='fill-accent absolute z-10 -top-[8px] lg:-top-[11px] w-[150px] lg:w-[200px]' />
        </div>
      </div>
      <motion.p
        {...transitionConfig}
        viewport={{ amount: 'all', once: true }}
        className='text-xl lg:text-2xl text-base-content mt-10'
      >
        I&apos;m&nbsp;
        <a
          className='hover:decoration-primary hover:underline underline-offset-8 text-primary'
          href='https://www.linkedin.com/in/wedward88/'
          target='_blank'
        >
          William Dunn
        </a>
        , a software engineer and problem solver based out of Nashville, TN.
      </motion.p>
      <div className='flex flex-col text-xl md:text-2xl mt-5 md:mt-10'>
        <div>
          <motion.p
            {...transitionConfig}
            viewport={{ amount: 'all', once: true }}
          >
            Born and raised in the NYC area, my passion for technology started
            in middle school, when I needed to upgrade the family computer with
            a new video card. Many years later, equipped with a degree in
            Computer Information Systems, I&apos;ve dedicated my career to
            crafting clean, intuitive, and enjoyable web experiences.
          </motion.p>
          <motion.p
            {...transitionConfig}
            viewport={{ amount: 'all', once: true }}
            className='mt-5 md:mt-10'
          >
            With over 9 years of IT experience and 5 years (and counting) in
            software development, I possess a strong foundation in
            problem-solving and analytical thinking.
          </motion.p>
          <motion.p
            {...transitionConfig}
            viewport={{ amount: 'all', once: true }}
            className='mt-5 md:mt-10'
          >
            I&apos;m always looking to learn new technologies, and expand my
            skill set. Please take a moment to check out some of my{' '}
            <Link
              className='hover:decoration-primary hover:underline text-primary underline-offset-8'
              href={'/projects'}
            >
              projects!
            </Link>
          </motion.p>
        </div>
        <div>
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
