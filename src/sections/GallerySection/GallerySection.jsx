import { GALLERY_ITEMS } from './constants/GALLERY_ITEMS';
import useEmblaCarousel from 'embla-carousel-react';
import { useEmblaWheel } from './hooks/useEmblaWheel';

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
      <div
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
                  src={item.src}
                  alt=''
                  className='w-95 h-112.5 rounded-2xl object-cover mx-5 select-none cursor-grabbing'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
