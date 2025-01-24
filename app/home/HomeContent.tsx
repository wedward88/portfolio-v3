'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import SkillsSection from '../skills/SkillsSection';
import Svg from './Svg';

const HomeContent = () => {
  return (
    <div className='flex flex-col justify-between lg:max-w-[40vw]'>
      <div className='flex mt-10 items-center'>
        <div className=' mr-10 text-5xl lg:text-7xl text-primary font-thin'>
          Hello!
        </div>
        <div className='relative'>
          <div className='avatar  z-20'>
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
          <Svg className='absolute z-10 -top-[8px] lg:-top-[11px] w-[150px] lg:w-[200px]' />
        </div>
      </div>
      <p className='text-xl lg:text-2xl text-base-content mt-10'>
        I&apos;m&nbsp;
        <a
          className='text-2xl text-secondary hover:text-primary'
          href='https://www.linkedin.com/in/wedward88/'
          target='_blank'
        >
          William Dunn
        </a>
        , a software engineer and problem solver based out of Nashville, TN.
      </p>
      <div className='flex flex-col text-xl md:text-2xl lg:text-2xl mt-10 lg:mt-20'>
        <div className='flex justify-evenly items-center'>
          <div className='flex w-full flex-col'>
            <div className='divider divider-accent text-2xl lg:text-3xl'>
              A little about me
            </div>
          </div>
        </div>
        <div>
          <motion.p className='mt-5 lg:mt-20'>
            Born and raised in the NYC area, my passion for technology started
            in middle school, when I needed to upgrade the family computer with
            a new video card. Many years later, equipped with a degree in
            Computer Information Systems, I&apos;ve dedicated my career to
            crafting clean, intuitive, and enjoyable web experiences.
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              amount: 'all',
            }}
            className='mt-5 lg:mt-10'
          >
            With over 9 years of IT experience and 5 years (and counting) in
            software development, I possess a strong foundation in
            problem-solving and analytical thinking, allowing me to effectively
            troubleshoot.
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              amount: 'all',
            }}
            className='mt-5 lg:mt-10'
          >
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
        <div>
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
