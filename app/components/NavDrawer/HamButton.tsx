'use client';
import React from 'react';

interface Props {
  handleClick: () => void;
  isOpen: boolean;
}
const HamButton = (props: Props) => {
  const { handleClick, isOpen } = props;
  return (
    <button
      onClick={handleClick}
      className='flex flex-col z-10 pt-10 px-5 absolute drawer-button lg:hidden'
    >
      <span
        className={`bg-primary block transition-all duration-300 ease-out
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                      }`}
      ></span>
      <span
        className={`bg-secondary block transition-all duration-300 ease-out
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
      ></span>
      <span
        className={`bg-accent block transition-all duration-300 ease-out
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                      }`}
      ></span>
    </button>
  );
};

export default HamButton;
