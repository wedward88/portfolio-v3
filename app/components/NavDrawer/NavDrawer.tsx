'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isProjects = pathname === '/projects';
  const isContact = pathname === '/contact';
  const isResume = pathname === '/resume';

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

  const desktopLinkClass = (active: boolean) =>
    `hover:bg-base-300 hover:text-primary ${
      active
        ? 'text-primary bg-base-100/60 underline underline-offset-8 decoration-primary'
        : ''
    }`;

  const mobileLinkClass = (active: boolean) =>
    `text-2xl ${
      active
        ? 'text-primary bg-base-300/60 underline underline-offset-8 decoration-primary'
        : 'text-base-content'
    }`;

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
                  className={`hidden md:flex ${desktopLinkClass(isHome)}`}
                  href={'/'}
                  aria-current={isHome ? 'page' : undefined}
                  onClick={() => handleClick('homeNavClick', false)}
                >
                  <BiHomeAlt className='text-accent' />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={desktopLinkClass(isProjects)}
                  href={'/projects'}
                  aria-current={isProjects ? 'page' : undefined}
                  onClick={() => handleClick('projectNavClick', false)}
                >
                  <LuPencilRuler className='text-accent' />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={desktopLinkClass(isContact)}
                  href={'/contact'}
                  aria-current={isContact ? 'page' : undefined}
                  onClick={() => handleClick('contactNavClick', false)}
                >
                  <HiOutlineMail className='text-accent' />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={desktopLinkClass(isResume)}
                  href={'/resume'}
                  aria-current={isResume ? 'page' : undefined}
                  onClick={() => handleClick('resumeNavClick', false)}
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
              className={mobileLinkClass(isHome)}
              onClick={() => handleClick('homeNavClick', true)}
              href='/'
              aria-current={isHome ? 'page' : undefined}
            >
              <BiHomeAlt className='text-accent' />
              Home
            </Link>
          </MotionLi>
          <MotionLi variants={itemVariants}>
            <Link
              className={mobileLinkClass(isProjects)}
              onClick={() => handleClick('projectNavClick', true)}
              href={'/projects'}
              aria-current={isProjects ? 'page' : undefined}
            >
              <LuPencilRuler className='text-accent' />
              Projects
            </Link>
          </MotionLi>
          <MotionLi variants={itemVariants}>
            <Link
              className={mobileLinkClass(isContact)}
              onClick={() => handleClick('contactNavClick', true)}
              href={'/contact'}
              aria-current={isContact ? 'page' : undefined}
            >
              <HiOutlineMail className='text-accent' />
              Contact
            </Link>
          </MotionLi>
          <MotionLi variants={itemVariants}>
            <Link
              className={mobileLinkClass(isResume)}
              onClick={() => handleClick('resumeNavClick', true)}
              href={'/resume'}
              aria-current={isResume ? 'page' : undefined}
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
