'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type ProjectLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title: string;
};

const MulticolorClose = ({ onClick }: { onClick: () => void }) => (
  <button
    type='button'
    onClick={onClick}
    aria-label='Close image preview'
    className='absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-base-300/85 shadow-md backdrop-blur-sm transition hover:bg-base-300 sm:right-5 sm:top-5'
  >
    <span className='relative block h-5 w-5'>
      <span className='absolute left-0 top-1/2 block h-0.5 w-5 origin-center -translate-y-1/2 rotate-45 rounded-sm bg-primary' />
      <span className='absolute left-0 top-1/2 block h-0.5 w-5 origin-center -translate-y-1/2 -rotate-45 rounded-sm bg-accent' />
    </span>
  </button>
);

const ProjectLightbox = ({
  open,
  onClose,
  src,
  alt,
  title,
}: ProjectLightboxProps) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          role='dialog'
          aria-modal='true'
          aria-label={`${title} preview`}
        >
          <motion.button
            type='button'
            aria-label='Close image preview backdrop'
            className='absolute inset-0 bg-neutral/80 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className='relative z-[1] flex max-h-[88vh] max-w-[92vw] items-center justify-center overflow-hidden rounded-xl border border-base-content/10 bg-base-100 shadow-2xl md:max-w-[88vw] lg:max-w-[80vw]'
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
          >
            <MulticolorClose onClick={onClose} />
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1067}
              priority
              className='max-h-[88vh] w-auto max-w-full object-contain'
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectLightbox;
