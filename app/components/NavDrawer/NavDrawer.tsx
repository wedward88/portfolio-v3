'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { LuPencilRuler } from 'react-icons/lu';
import { RxReader } from 'react-icons/rx';

import { sendGAEvent } from '@next/third-parties/google';

import ThemeToggle from '../ThemeToggle';
import HamButton from './HamButton';

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (eventName: string, navDrawer: boolean) => {
    if (navDrawer) {
      setIsOpen(!isOpen);
    }
    sendGAEvent('event', eventName);
  };

  const MotionUl = motion.ul;
  const MotionLi = motion.li;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: 'easeIn' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='drawer z-50 sticky top-0 bg-base-300'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
        checked={isOpen}
        onChange={() => handleClick('hamburgerMenuClick', true)}
      />
      <HamButton
        handleClick={() => handleClick('hamburgerMenuClick', true)}
        isOpen={isOpen}
      />
      <div className='drawer-content'>
        <div className='navbar bg-base-300 w-full justify-end'>
          <div className='hidden flex-none lg:block'>
            <ul className='menu menu-horizontal text-xl font-light'>
              <li>
                <Link
                  className='hidden md:flex hover:bg-base-300 hover:text-primary'
                  href={'/'}
                  onClick={() => handleClick('homeNavClick', false)}
                >
                  <BiHomeAlt className='text-accent' />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='hover:bg-base-300 hover:text-primary'
                  href={'/projects'}
                  onClick={() => handleClick('projectNavClick', false)}
                >
                  <LuPencilRuler className='text-accent' />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className='hover:bg-base-300 hover:text-primary'
                  href={'mailto:will@wedward.com'}
                  target='_blank'
                  onClick={() => handleClick('emailClick', false)}
                >
                  <HiOutlineMail className='text-accent' />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className='hover:bg-base-300 hover:text-primary'
                  href={
                    'https://drive.google.com/file/d/1dNRa_L5hxITHF3k3bqte5DwiGnSHrM2b/view?usp=sharing'
                  }
                  target='_blank'
                  onClick={() => handleClick('resumeDownload', false)}
                >
                  <RxReader className='text-accent' />
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <ThemeToggle />
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <MotionUl
          variants={containerVariants}
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
          className='menu bg-base-100 min-h-full w-80 navdrawer'
        >
          <MotionLi variants={itemVariants} className='text-2xl'>
            <Link
              className='text-2xl text-base-content'
              onClick={() => handleClick('homeNavClick', true)}
              href='/'
            >
              <BiHomeAlt className='text-accent' />
              Home
            </Link>
          </MotionLi>
          <MotionLi variants={itemVariants}>
            <Link
              className='text-2xl text-base-content'
              onClick={() => handleClick('projectNavClick', true)}
              href={'/projects'}
            >
              <LuPencilRuler className='text-accent' />
              Projects
            </Link>
          </MotionLi>
          <MotionLi variants={itemVariants}>
            <Link
              className='text-2xl text-base-content'
              onClick={() => handleClick('emailClick', true)}
              href={'mailto:will@wedward.com'}
              target='_blank'
            >
              <HiOutlineMail className='text-accent' />
              Contact
            </Link>
          </MotionLi>
          <MotionLi variants={itemVariants}>
            <Link
              className='text-2xl text-base-content'
              onClick={() => handleClick('resumeDownload', true)}
              href={
                'https://drive.google.com/file/d/19jhf328V_IUY3r6d4ir2O-Okmlxm57Vy/view?usp=drive_link'
              }
              target='_blank'
            >
              <RxReader className='text-accent' />
              Resume
            </Link>
          </MotionLi>
        </MotionUl>
      </div>
    </div>
  );
};

export default NavDrawer;
