'use client';
import React, { useState } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { LuPencilRuler } from 'react-icons/lu';
import { RxReader } from 'react-icons/rx';
import Link from 'next/link';

import HamButton from './HamButton';
import ThemeToggle from '../ThemeToggle';

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='drawer z-50 relative bg-base-300'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
        checked={isOpen}
        onChange={handleClick}
      />
      <HamButton handleClick={handleClick} isOpen={isOpen} />
      <div className='drawer-content'>
        {/* Navbar */}
        <div className='navbar bg-base-300 w-full justify-end'>
          <div className='hidden flex-none lg:block'>
            <ul className='menu menu-horizontal text-xl font-light text-primary'>
              <li>
                <Link
                  className='hidden md:flex lg:flex hover:bg-base-300 hover:text-primary'
                  href={'/'}
                >
                  <BiHomeAlt className='text-accent' />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='hover:bg-base-300 hover:text-primary'
                  href={'/projects'}
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
                >
                  <HiOutlineMail className='text-accent' />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className='hover:bg-base-300 hover:text-primary'
                  href={
                    'https://drive.google.com/file/d/19jhf328V_IUY3r6d4ir2O-Okmlxm57Vy/view?usp=drive_link'
                  }
                  target='_blank'
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
        <ul className='menu bg-base-100 min-h-full w-80 navdrawer'>
          {/* Sidebar content here */}
          <li className='text-2xl'>
            <Link onClick={handleClick} href={'/'}>
              <BiHomeAlt className='text-accent' />
              William Dunn
            </Link>
          </li>
          <li>
            <Link className='text-2xl' onClick={handleClick} href={'/projects'}>
              <LuPencilRuler className='text-accent' />
              Projects
            </Link>
          </li>
          <li>
            <Link
              className='text-2xl'
              onClick={handleClick}
              href={'mailto:will@wedward.com'}
              target='_blank'
            >
              <HiOutlineMail className='text-accent' />
              Contact
            </Link>
          </li>
          <li>
            <Link
              className='text-2xl'
              onClick={handleClick}
              href={
                'https://drive.google.com/file/d/19jhf328V_IUY3r6d4ir2O-Okmlxm57Vy/view?usp=drive_link'
              }
              target='_blank'
            >
              <RxReader className='text-accent' />
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
