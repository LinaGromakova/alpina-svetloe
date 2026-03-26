import clsx from 'clsx';
import { motion } from 'framer-motion';

export function ImageColumn({ imageSrc, className, fit }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={clsx('self-stretch', className)}
    >
      <img
        src={imageSrc}
        loading='lazy'
        alt='imageBackgroundColumn'
        className={clsx('h-full w-full', fit ? fit : 'object-cover')}
      />
    </motion.div>
  );
}
