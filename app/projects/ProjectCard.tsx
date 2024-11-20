import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  badges: Array<string>;
  desc: string;
  github: string;
  link: string;
  name: string;
  title: string;
  url: string;
}

const ProjectCard = ({
  badges,
  desc,
  github,
  link,
  name,
  title,
  url,
}: Props) => {
  return (
    <div className='card bg-base-100 shadow-xl z-0'>
      <figure>
        <Image
          id={name}
          alt={name}
          src={url}
          width='1000'
          height='1000'
          style={{ width: '100%', height: '100%' }}
          className='project-card shadow-2xl'
        />
      </figure>
      <div className='card-body'>
        <div className='flex items-center'>
          <h2 className='card-title'>
            <Link className='hover:text-accent' href={link} target='_blank'>
              {title}
            </Link>
          </h2>
          <Link
            className='ml-5 text-xl hover:text-accent'
            target='_blank'
            href={github}
          >
            <FaGithub />
          </Link>
        </div>
        <p>{desc}</p>
        <div className='card-actions justify-center'>
          {badges.map((badge, i) => (
            <div
              key={`${name}-${i}`}
              className='badge badge-secondary font-semibold'
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
