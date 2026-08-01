'use client';

import { motion } from 'motion/react';

import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <motion.div
      className='w-full max-w-3xl pb-12 md:pb-16'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.4 }}
    >
      <header className='mb-2 pt-4 md:pt-0'>
        <div className='relative inline-block'>
          <h1 className='relative z-10 text-4xl font-thin md:text-5xl lg:text-6xl'>
            Contact
          </h1>
          <span className='absolute inset-x-[-10px] bottom-0 z-0 h-[50%] rounded-full bg-base-100' />
        </div>
      </header>

      <p className='mt-6 max-w-xl text-xl text-base-content md:text-2xl'>
        Have a question, idea, or opportunity? Drop a note and I&apos;ll get
        back to you.
      </p>

      <ContactForm />
    </motion.div>
  );
};

export default ContactPage;
