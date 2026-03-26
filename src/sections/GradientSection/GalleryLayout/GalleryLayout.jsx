import { motion } from 'framer-motion';
import { stylesImageGallery } from './styles/imageStyle';
import clsx from 'clsx';

export function GalleryLayout({ images }) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 xl:gap-6 gap-2 max-md:gap-0 mx-auto'>
      {images.map((image, idx) => (
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 12,
            delay: idx * 0.2,
          }}
          key={idx}
          src={image.srcCircle}
          loading='lazy'
          className={clsx(
            'object-cover rounded-full select-none',
            stylesImageGallery,
          )}
        />
      ))}
    </div>
  );
}
