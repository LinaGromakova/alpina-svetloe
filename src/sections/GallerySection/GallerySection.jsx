import { GALLERY_ITEMS } from './constants/GALLERY_ITEMS';
import useEmblaCarousel from 'embla-carousel-react';
import { useEmblaWheel } from './hooks/useEmblaWheel';
import { motion } from 'framer-motion';
export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    duration: 45,
    dragFree: true,
  });
  useEmblaWheel(emblaApi);

  return (
    <section className='max-w-full md:my-[5%] my-[10%] h-auto overflow-hidden px-4 max-md:px-2'>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='overflow-hidden active:cursor-grabbing'
        ref={emblaRef}
      >
        <div className='flex'>
          {GALLERY_ITEMS.map((item, index) => {
            return (
              <div
                key={index}
                className='flex-[0_0_auto]'
              >
                <img
                  key={index}
                  loading='lazy'
                  src={item.src}
                  alt=''
                  className='w-85 h-112.5 rounded-2xl object-cover mx-5 select-none cursor-grabbing'
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
