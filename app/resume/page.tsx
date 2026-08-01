'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

import { sendGAEvent } from '@next/third-parties/google';

const ResumePage = () => {
  const handleDownload = () => {
    sendGAEvent('event', 'resumeDownload');
  };

  const handleOpen = () => {
    sendGAEvent('event', 'resumeOpen');
  };

  return (
    <motion.div
      className='flex w-full max-w-4xl flex-col pb-12 md:pb-16'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.4 }}
    >
      <header className='mb-6 flex flex-col gap-5 pt-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between md:pt-0'>
        <div className='relative inline-block w-fit self-start'>
          <h1 className='relative z-10 text-4xl font-thin md:text-5xl lg:text-6xl'>
            Resume
          </h1>
          <span className='absolute inset-x-[-10px] bottom-0 z-0 h-[50%] rounded-full bg-base-100' />
        </div>

        <div className='flex flex-wrap gap-3'>
          <a
            href='/resume.pdf'
            download='William-Dunn-Resume.pdf'
            onClick={handleDownload}
            className='btn btn-primary btn-sm gap-2 md:btn-md'
          >
            <FiDownload />
            Download
          </a>
          <Link
            href='/resume.pdf'
            target='_blank'
            rel='noreferrer'
            onClick={handleOpen}
            className='btn btn-ghost btn-sm gap-2 border border-base-content/15 md:btn-md'
          >
            <FiExternalLink />
            Open
          </Link>
        </div>
      </header>

      <motion.div
        className='overflow-hidden rounded-xl border border-base-content/10 bg-base-100 shadow-md'
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.45, delay: 0.1 }}
      >
        <object
          data='/resume.pdf#view=FitH'
          type='application/pdf'
          className='h-[70vh] w-full md:h-[75vh]'
          aria-label="William Dunn's resume"
        >
          <div className='flex flex-col items-center gap-4 p-10 text-center'>
            <p className='text-lg text-base-content/80'>
              PDF preview isn&apos;t available in this browser.
            </p>
            <a
              href='/resume.pdf'
              download='William-Dunn-Resume.pdf'
              onClick={handleDownload}
              className='btn btn-primary gap-2'
            >
              <FiDownload />
              Download resume
            </a>
          </div>
        </object>
      </motion.div>
    </motion.div>
  );
};

export default ResumePage;
