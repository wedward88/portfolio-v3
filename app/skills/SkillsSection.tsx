import React from 'react';
import Link from 'next/link';
import { RiNextjsLine } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';
import { SiSqlalchemy } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';

const SkillsSection = () => {
  return (
    <div className='text-center text-2xl lg:text-7xl justify-items-center my-10 lg:my-20'>
      <div className='flex w-full flex-col'>
        <div className='divider divider-accent lg:text-3xl'>
          My toolbox includes
        </div>
      </div>
      <div className='animate-fadeInFromBottom grid grid-cols-3 gap-5 text-6xl pt-10 md:grid-cols-3 md:gap-10 md:text-9xl lg:py-20 lg:grid-cols-3 lg:gap-10 lg:text-9xl'>
        <div title='Javascript'>
          <Link href='https://www.javascript.com/' target='_blank'>
            <SiJavascript />
          </Link>
        </div>
        <div title='Python'>
          <Link href='https://www.python.org/' target='_blank'>
            <FaPython />
          </Link>
        </div>
        <div title='NextJS'>
          <Link href='https://nextjs.org/' target='_blank'>
            <RiNextjsLine />
          </Link>
        </div>
        <div title='Css3'>
          <Link
            href='https://developer.mozilla.org/en-US/docs/Web/CSS'
            target='_blank'
          >
            <FaCss3Alt />
          </Link>
        </div>
        <div title='React' className='text-secondary'>
          <Link href='https://react.dev/' target='_blank'>
            <FaReact />
          </Link>
        </div>
        <div title='Html5'>
          <Link
            href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
            target='_blank'
          >
            <FaHtml5 />
          </Link>
        </div>
        <div title='PostgreSQL'>
          <Link href='https://www.postgresql.org/' target='_blank'>
            <BiLogoPostgresql />
          </Link>
        </div>
        <div title='Docker'>
          <Link href='https://www.docker.com/' target='_blank'>
            <FaDocker />
          </Link>
        </div>
        <div title='Tailwind CSS'>
          <Link href='https://tailwindcss.com/' target='_blank'>
            <RiTailwindCssFill />
          </Link>
        </div>
        <div title='SQLAlchemy'>
          <Link href='https://www.sqlalchemy.org/' target='_blank'>
            <SiSqlalchemy />
          </Link>
        </div>
        <div title='Redux'>
          <Link href='https://redux.js.org/' target='_blank'>
            <SiRedux />
          </Link>
        </div>
        <div title='Flask'>
          <Link
            href='https://flask.palletsprojects.com/en/stable/'
            target='_blank'
          >
            <SiFlask />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
