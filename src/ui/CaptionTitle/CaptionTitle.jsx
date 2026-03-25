import clsx from 'clsx';
import { motion } from 'framer-motion';

export function CaptionTitle({ text, className }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={clsx(
        'lg:text-2xl text-xl font-bold text-dark-blue',
        className,
      )}
    >
      {text + ' '}
    </motion.span>
  );
}
