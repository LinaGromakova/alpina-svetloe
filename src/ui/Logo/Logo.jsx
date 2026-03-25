import clsx from 'clsx';
import LogoImage from './assets/logo.webp';
import { styles } from './styles/styles';
import { motion } from 'framer-motion';

export function Logo({ variant, className }) {
  const style = styles[variant];
  return (
    <motion.img
      alt='Альпина-Светлое'
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.2,
      }}
      src={LogoImage}
      className={clsx(style, className)}
    />
  );
}
