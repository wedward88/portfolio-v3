import { motion } from 'motion/react';
import Link from 'next/link';

import { skills } from './manifest';

const SkillsSection = () => {
  const leftHalf = skills.slice(0, skills.length / 2);
  const rightHalf = skills.slice(skills.length / 2);

  return (
    <div className='flex flex-col text-center justify-center items-center my-10 lg:my-20'>
      <div className='flex w-full flex-col'>
        <div className='divider divider-accent lg:text-3xl'>
          My toolbox includes
        </div>
      </div>
      <div className='flex space-x-5 md:space-x-16 text-xl md:text-2xl pt-10 lg:py-20'>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            amount: 'all',
            once: true,
          }}
        >
          {leftHalf.map((skill, index) => (
            <div
              key={index}
              title={skill.name}
              className='flex items-center space-x-3'
            >
              <skill.icon className='text-secondary' />
              <Link
                href={skill.link}
                target='_blank'
                className='hover:text-primary'
              >
                <p>{skill.name}</p>
              </Link>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            amount: 'all',
            once: true,
          }}
        >
          {rightHalf.map((skill, index) => (
            <div
              key={index}
              title={skill.name}
              className='flex items-center space-x-3'
            >
              <skill.icon className='text-secondary' />
              <Link
                href={skill.link}
                target='_blank'
                className='hover:text-primary'
              >
                <p>{skill.name}</p>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
