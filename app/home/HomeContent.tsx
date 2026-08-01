'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import SkillsSection from '../skills/SkillsSection';
import Svg from './Svg';

const spring = { type: 'spring' as const, stiffness: 120, damping: 18 };

const HomeContent = () => {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
        }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { ...spring, delay },
        };

  return (
    <div className='flex w-full max-w-3xl flex-col pb-12'>
      <div className='mt-6 flex items-center md:mt-8'>
        <motion.div
          {...fadeUp(0)}
          className='mr-10 text-5xl font-thin sm:mr-16 lg:mr-20 lg:text-7xl'
        >
          <div className='relative inline-block'>
            <span className='relative z-10'>Hello!</span>
            <motion.span
              className='absolute inset-x-[-10px] bottom-0 z-0 h-[50%] rounded-full bg-base-100'
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scaleX: [1, 1.06, 1],
                      opacity: [0.85, 1, 0.85],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1.2,
                    }
              }
            />
          </div>
        </motion.div>

        <motion.div
          className='relative'
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.85 },
                animate: {
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0],
                },
                transition: {
                  opacity: { ...spring, delay: 0.15 },
                  scale: { ...spring, delay: 0.15 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.4,
                  },
                },
                whileHover: {
                  scale: 1.05,
                  rotate: 2,
                  transition: { type: 'spring', stiffness: 260, damping: 16 },
                },
              })}
        >
          <div className='avatar relative z-20'>
            <div className='mask mask-hexagon w-[150px] lg:w-[200px]'>
              <Image
                id='headshot'
                alt='headshot'
                src='/images/headshot.jpg'
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
          <Svg
            className='absolute -top-[8px] z-10 w-[150px] fill-accent lg:-top-[11px] lg:w-[200px]'
            reduceMotion={!!reduceMotion}
          />
        </motion.div>
      </div>

      <motion.p
        {...fadeUp(0.3)}
        className='mt-6 text-xl text-base-content md:mt-8 lg:text-2xl'
      >
        I&apos;m&nbsp;
        <a
          className='text-primary underline-offset-8 hover:underline hover:decoration-primary'
          href='https://www.linkedin.com/in/wedward88/'
          target='_blank'
          rel='noreferrer'
        >
          William Dunn
        </a>
        , a software engineer and problem solver based out of Nashville, TN.
      </motion.p>

      <motion.p
        {...fadeUp(0.45)}
        className='mt-5 text-xl text-base-content md:mt-6 md:text-2xl'
      >
        New York born and raised, I&apos;ve been building clean, intuitive web
        experiences since 2019, and I&apos;m always learning. Take a look at some of my{' '}
        <ProjectsLink reduceMotion={!!reduceMotion} />
      </motion.p>

      <SkillsSection />
    </div>
  );
};

const ProjectsLink = ({ reduceMotion }: { reduceMotion: boolean }) => {
  return (
    <Link
      href='/projects'
      className='group relative inline-flex items-baseline gap-1.5 text-primary'
    >
      <span className='relative inline-block'>
        projects!
        <span
          aria-hidden
          className='absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100'
        />
      </span>
      <motion.span
        aria-hidden
        className='inline-block text-accent transition-transform duration-300 group-hover:translate-x-1'
        initial={false}
        whileHover={reduceMotion ? undefined : { x: 4 }}
      >
        →
      </motion.span>
    </Link>
  );
};

export default HomeContent;
