import { GALLERY_ITEMS } from './constants/GALLERY_ITEMS';
import { LAYOUTS } from './constants/LAYOUTS';

export function GallerySection() {
  return (
    <section className='max-w-full h-auto overflow-x-hidden'>
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
