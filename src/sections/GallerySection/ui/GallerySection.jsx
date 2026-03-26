import { GALLERY_ITEMS } from '../constants/GALLERY_ITEMS';
import { Slider } from './slider/Slider';

export function GallerySection() {
  return (
    <section className='max-w-full md:my-[5%] my-[10%] h-auto overflow-hidden px-4 max-md:px-2'>
      <Slider slider={GALLERY_ITEMS} />
    </section>
  );
}
