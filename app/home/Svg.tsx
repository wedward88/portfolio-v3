import { motion } from 'motion/react';

type SvgTypes = {
  className?: string;
};

const Svg = ({ className }: SvgTypes) => {
  const variants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };
  return (
    <motion.svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 182 201'
      animate={{
        scale: [0, 1.2, 1.2, 1],
        rotate: [0, 90, 90, 0],
      }}
    >
      <motion.path
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={{
          fill: { duration: 2, ease: 'easeIn', repeat: 'once' },
        }}
        d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z'
      />
    </motion.svg>
  );
};

export default Svg;
