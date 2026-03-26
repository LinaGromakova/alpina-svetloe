import { motion } from 'framer-motion';
import clsx from 'clsx';
import { CaptionTitle } from '../CaptionTitle';

export function Paragraph({ text, bold, className, title }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={clsx(
        'text-xl lg:text-2xl pb-4',
        bold ? 'text-dark-blue font-bold' : 'text-foreground',
        className,
      )}
    >
      {title && <CaptionTitle text={title}> </CaptionTitle>}
      {text}
    </motion.p>
  );
}
