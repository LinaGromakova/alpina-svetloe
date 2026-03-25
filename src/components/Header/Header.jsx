import { Link } from '../../ui/Link';
import { Logo } from '../../ui/Logo';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='w-full flex md:px-10 px-5 py-4 bg-[#f8f9fa] absolute top-0 left-0 
    justify-between items-center md:text-base text-sm'
    >
      <div className='flex items-center'>
        <Logo variant='xs'></Logo>
        <motion.h3
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className='text-gray sm:ml-15 ml-2.5'
        >
          Альпина Светлое
        </motion.h3>
      </div>
      <div className='max-sm:flex max-sm:flex-col'>
        <Link
          href='mailto:info@alpina-svetloe.ru'
          text='info@alpina-svetloe.ru'
        ></Link>
        <Link
          href='tel:+78129007267'
          className='sm:ml-7.5 max-sm:mt-2'
          filled={true}
          text=' + 7 (812) 900-72-67'
        ></Link>
      </div>
    </motion.header>
  );
}
