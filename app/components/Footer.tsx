import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='flex w-full items-center justify-end gap-4 bg-neutral px-4 py-3 text-neutral-content md:px-6 md:py-3.5'>
      <nav className='flex items-center gap-4 text-xl md:gap-5 md:text-xl'>
        <Link
          href='https://github.com/wedward88'
          target='_blank'
          rel='noreferrer'
          aria-label='GitHub'
          className='transition-colors hover:text-primary'
        >
          <FaGithub />
        </Link>
        <Link
          href='https://www.linkedin.com/in/wedward88/'
          target='_blank'
          rel='noreferrer'
          aria-label='LinkedIn'
          className='transition-colors hover:text-primary'
        >
          <FaLinkedin />
        </Link>
        <Link
          href='https://www.instagram.com/wedward88/'
          target='_blank'
          rel='noreferrer'
          aria-label='Instagram'
          className='transition-colors hover:text-primary'
        >
          <FaInstagram />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
