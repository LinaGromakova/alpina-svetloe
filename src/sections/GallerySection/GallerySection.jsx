import { GALLERY_ITEMS } from './constants/GALLERY_ITEMS';
import { LAYOUTS } from './constants/LAYOUTS';

export function GallerySection() {
  return (
    <section className='max-w-full h-auto overflow-x-hidden flex flex-col gap-4 m-4 max-md:gap-2 max-md:m-2'>
      {GALLERY_ITEMS.map((item, index) => {
        const Component = LAYOUTS[item.type];
        return (
          <Component
            key={index}
            {...item}
          />
        );
      })}
    </section>
  );
}
