import clsx from 'clsx';
import { motion } from 'framer-motion';

export function ListItem({ text, className }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={clsx(
        'text-xl lg:text-2xl pb-4 text-foreground ml-6 leading-6 ',
        className,
      )}
    >
      {text}
    </motion.li>
  );
}
