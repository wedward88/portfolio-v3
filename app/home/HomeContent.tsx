import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import SkillsSection from '../skills/SkillsSection';

const HomeContent = () => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex mt-10 items-center animate-fadeIn'>
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
      </div>
      <p className='text-xl lg:text-2xl text-base-content mt-10 animate-fadeIn'>
        I&apos;m&nbsp;
        <a
          className='text-3xl text-secondary hover:text-primary'
          href='https://www.linkedin.com/in/wedward88/'
          target='_blank'
        >
          William Dunn
        </a>
        , a software engineer and problem solver based out of Nashville, TN.
      </p>
      <div className='flex flex-col md:text-2xl lg:text-2xl mt-10 lg:mt-20'>
        <div className='flex justify-evenly items-center'>
          <div className='flex w-full flex-col'>
            <div className='divider divider-accent text-2xl lg:text-3xl'>
              A little about me
            </div>
          </div>
        </div>
        <div className='animate-fadeInFromBottom'>
          <p className='mt-5 lg:mt-20'>
            Born and raised in the NYC area, my interest in computers started in
            middle school, when I needed to upgrade my mother&apos;s computer
            with a new video card. 18 years later, equipped with a degree in
            Computer Information Systems, I&apos;m on a mission to create
            enjoyable web experiences by creating clean, user-friendly
            applications.
          </p>
          <p className='mt-5 lg:mt-10'>
            With over 9 years of experience as an IT professional, and 5 years
            in software development, I&apos;ve developed the problem solving and
            analytical skills necessary to tackle difficult bugs, and
            troubleshoot effectively.
          </p>
          <p className='mt-5 lg:mt-10'>
            Please take a moment to check out some of my{' '}
            <Link
              className='text-xl lg:text-3xl text-secondary hover:text-primary'
              href={'/projects'}
            >
              projects!
            </Link>
          </p>
        </div>
        <SkillsSection />
      </div>
    </div>
  );
};

export default HomeContent;
