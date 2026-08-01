'use client';

import React from 'react';

interface Props {
  handleClick: () => void;
  isOpen: boolean;
}

const HamButton = ({ handleClick, isOpen }: Props) => {
  return (
    <button
      type='button'
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      onClick={handleClick}
      className='btn btn-ghost btn-square fixed left-2 top-2 z-[60] h-10 min-h-0 w-10 border-0 bg-transparent hover:bg-base-100/60 sm:left-4 lg:hidden'
    >
      <span className='flex w-5 flex-col items-center gap-1.5'>
        <span
          className={`block h-0.5 w-full origin-center rounded-sm bg-primary transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full rounded-sm bg-secondary transition-all duration-300 ease-out ${
            isOpen ? 'scale-x-0 opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-full origin-center rounded-sm bg-accent transition-all duration-300 ease-out ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </span>
    </button>
  );
};

export default HamButton;
