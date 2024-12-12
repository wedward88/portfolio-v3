'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import Loading from '../components/Loading';

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
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='card bg-base-100 shadow-xl z-0 h-full'>
      <figure className='relative w-auto'>
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
            <Loading />
          </div>
        )}
        <Image
          id={name}
          alt={name}
          src={url}
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto',
          }}
          className={`project-card shadow-2xl transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleImageLoad}
        />
      </figure>
      <div className={`card-body ${isLoading ? 'hidden' : 'flex'}`}>
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
        <p className='my-5'>{desc}</p>
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
