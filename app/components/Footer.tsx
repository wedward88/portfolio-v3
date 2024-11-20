import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='footer text-2xl bg-neutral text-neutral-content justify-end p-4'>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <Link href='https://github.com/wedward88' target='_blank'>
          <FaGithub />
        </Link>
        <Link href='https://www.linkedin.com/in/wedward88/' target='_blank'>
          <FaLinkedin />
        </Link>
        <Link href='https://www.instagram.com/wedward88/' target='_blank'>
          <FaInstagram />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
