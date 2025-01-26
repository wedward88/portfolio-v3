import { BiLogoPostgresql } from 'react-icons/bi';
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiFlask, SiRedux, SiSqlalchemy, SiTypescript } from 'react-icons/si';

export const skills = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Python',
    icon: FaPython,
    link: 'https://www.python.org/',
  },
  {
    name: 'React',
    icon: FaReact,
    link: 'https://react.dev/',
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'PostgreSQL',
    icon: BiLogoPostgresql,
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'SQLAlchemy',
    icon: SiSqlalchemy,
    link: 'https://www.sqlalchemy.org/',
  },
  {
    name: 'NextJS',
    icon: RiNextjsLine,
    link: 'https://nextjs.org/',
  },
  {
    name: 'Tailwind',
    icon: RiTailwindCssFill,
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Redux',
    icon: SiRedux,
    link: 'https://redux.js.org/',
  },
  {
    name: 'Docker',
    icon: FaDocker,
    link: 'https://www.docker.com/',
  },
  {
    name: 'Html5',
    icon: FaHtml5,
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    name: 'Flask',
    icon: SiFlask,
    link: 'https://flask.palletsprojects.com/en/stable/',
  },
];
