import clsx from 'clsx';
import { motion } from 'framer-motion';

export function Link({ href, text, filled, className }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={clsx(
        'text-gray hover:text-dark-blue transition-colors',
        filled &&
          'bg-light-blue md:p-3 p-2 rounded-xl whitespace-nowrap hover:opacity-80 transition-opacity',
        className,
      )}
    >
      {text}
    </motion.a>
  );
}
