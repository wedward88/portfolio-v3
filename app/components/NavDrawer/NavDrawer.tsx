'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import HamButton from './HamButton';
import ThemeToggle from '../ThemeToggle';

const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='drawer z-50'>
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
            <ul className='menu menu-horizontal'>
              <li>
                <Link
                  className='hidden md:block lg:block hover:bg-base-300 hover:text-primary'
                  href={'/'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='hover:bg-base-300 hover:text-primary'
                  href={'/projects'}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className='hover:bg-base-300 hover:text-primary'
                  href={'mailto:will@wedward.com'}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className='hover:bg-base-300 hover:text-primary'
                  href={
                    'https://drive.google.com/file/d/1-R4QzLSF6e4Cs1YvXk3xT2T4E8azQOuv/view?usp=sharing'
                  }
                  target='_blank'
                >
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
        <ul className='menu bg-base-100 text-black dark:text-secondary min-h-full w-80 p-4 pt-20'>
          {/* Sidebar content here */}
          <li className='text-xl'>
            <Link onClick={handleClick} href={'/'}>
              William Dunn
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={'/projects'}>
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href={'mailto:will@wedward.com'}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              href={
                'https://drive.google.com/file/d/1-R4QzLSF6e4Cs1YvXk3xT2T4E8azQOuv/view?usp=sharing'
              }
              target='_blank'
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
