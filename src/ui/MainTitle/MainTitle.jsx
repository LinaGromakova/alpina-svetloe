import { motion } from 'framer-motion';

export function MainTitle({ text }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='font-bold mb-6 text-dark-blue lg:text-5xl text-4xl max-sm:text-3xl'
    >
      {text}
    </motion.h2>
  );
}
