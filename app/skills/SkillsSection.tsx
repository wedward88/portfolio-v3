'use client';

import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';

import { skills } from './manifest';

type Skill = (typeof skills)[number];

const SkillChip = ({
  skill,
  reduceMotion,
}: {
  skill: Skill;
  reduceMotion: boolean;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.92 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,
              transition: { type: 'spring', stiffness: 400, damping: 14 },
            }
      }
    >
      <Link
        href={skill.link}
        target='_blank'
        rel='noreferrer'
        title={skill.name}
        className='group flex items-center gap-2 rounded-full border border-base-content/10 bg-base-100 px-3.5 py-2 text-sm transition-colors duration-200 hover:border-primary/40 hover:text-primary md:text-base'
      >
        <skill.icon className='text-lg text-secondary transition-colors duration-200 group-hover:text-accent md:text-xl' />
        <span>{skill.name}</span>
      </Link>
    </motion.div>
  );
};

const SkillsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : 'hidden'}
      whileInView='visible'
      viewport={{ amount: 0.3, once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.04,
            delayChildren: reduceMotion ? 0 : 0.1,
          },
        },
      }}
      className='mt-10 w-full md:mt-12'
    >
      <motion.h2
        className='mb-4 text-lg font-light text-base-content/70 md:text-xl'
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Toolbox
      </motion.h2>

      <div className='flex flex-wrap gap-2.5 md:gap-3'>
        {skills.map((skill) => (
          <SkillChip
            key={skill.name}
            skill={skill}
            reduceMotion={!!reduceMotion}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
