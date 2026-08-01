'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { IconType } from 'react-icons';
import { LuPencilRuler } from 'react-icons/lu';
import { RxReader } from 'react-icons/rx';

import { sendGAEvent } from '@next/third-parties/google';

import ThemeToggle from '../ThemeToggle';
import HamButton from './HamButton';

type NavItem = {
  href: string;
  label: string;
  icon: IconType;
  event: string;
  match: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: BiHomeAlt,
    event: 'homeNavClick',
    match: (pathname) => pathname === '/',
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: LuPencilRuler,
    event: 'projectNavClick',
    match: (pathname) => pathname === '/projects',
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: HiOutlineMail,
    event: 'contactNavClick',
    match: (pathname) => pathname === '/contact',
  },
  {
    href: '/resume',
    label: 'Resume',
    icon: RxReader,
    event: 'resumeNavClick',
    match: (pathname) => pathname === '/resume',
  },
];

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen((open) => !open);
    sendGAEvent('event', 'hamburgerMenuClick');
  };

  const handleNavClick = (
    eventName: string,
    fromDrawer: boolean,
    event?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (fromDrawer) setIsOpen(false);
    event?.currentTarget.blur();
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
    `gap-2 hover:bg-transparent hover:text-primary focus:!bg-transparent active:!bg-transparent ${
      active
        ? 'text-primary underline underline-offset-4 decoration-primary'
        : ''
    }`;

  const mobileLinkClass = (active: boolean) =>
    `gap-3 text-2xl hover:bg-transparent focus:!bg-transparent active:!bg-transparent ${
      active
        ? 'text-primary underline underline-offset-4 decoration-primary'
        : 'text-base-content'
    }`;

  return (
    <div className='drawer z-50 sticky top-0 bg-base-300'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
        checked={isOpen}
        onChange={toggleDrawer}
      />
      <HamButton handleClick={toggleDrawer} isOpen={isOpen} />
      <div className='drawer-content'>
        <div className='navbar min-h-14 w-full bg-base-300 px-2 sm:px-4'>
          <div className='navbar-start'>
            {/* Spacer keeps bar alignment; real button is fixed above the drawer */}
            <span className='inline-block h-10 w-10 lg:hidden' aria-hidden />
          </div>
          <div className='navbar-end gap-1'>
            <div className='hidden flex-none lg:block'>
              <ul className='menu menu-horizontal gap-2 bg-transparent p-0 text-lg font-light'>
                {navItems.map((item) => {
                  const active = item.match(pathname);
                  return (
                    <li key={item.href} className='bg-transparent'>
                      <Link
                        className={desktopLinkClass(active)}
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        onClick={(event) =>
                          handleNavClick(item.event, false, event)
                        }
                      >
                        <item.icon className='text-lg text-accent' />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className='drawer-side z-50'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <MotionUl
          variants={containerVariants}
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
          className='menu min-h-full w-80 bg-transparent bg-base-100 p-2 navdrawer'
        >
          {navItems.map((item) => {
            const active = item.match(pathname);
            return (
              <MotionLi key={item.href} variants={itemVariants}>
                <Link
                  className={mobileLinkClass(active)}
                  onClick={(event) => handleNavClick(item.event, true, event)}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                >
                  <item.icon className='text-xl text-accent' />
                  {item.label}
                </Link>
              </MotionLi>
            );
          })}
        </MotionUl>
      </div>
    </div>
  );
};

export default NavDrawer;
