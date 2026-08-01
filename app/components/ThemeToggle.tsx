'use client';

import React, { useEffect, useState } from 'react';

const THEME_KEY = 'portfolio-theme';
type Theme = 'nord' | 'dim';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('dim');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_KEY);
    const initial: Theme =
      stored === 'nord' || stored === 'dim' ? stored : 'dim';
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
    setReady(true);
  }, []);

  const isDark = theme === 'dim';

  const applyTheme = (next: Theme) => {
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    window.localStorage.setItem(THEME_KEY, next);
  };

  return (
    <label
      className={`flex cursor-pointer items-center gap-1.5 px-1 ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden
      >
        <circle cx='12' cy='12' r='5' />
        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
      </svg>
      <input
        type='checkbox'
        className='toggle toggle-sm'
        checked={isDark}
        aria-label='Toggle dark mode'
        onChange={() => applyTheme(isDark ? 'nord' : 'dim')}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden
      >
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
      </svg>
    </label>
  );
};

export default ThemeToggle;
