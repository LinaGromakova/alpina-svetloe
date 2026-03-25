import { GallerySection } from './sections/GallerySection';
import { PreviewSection } from './sections/PreviewSection';
import { SECTIONS } from './constants/SECTIONS';
import { SECTION_COMPONENTS } from './constants/SECTION_COMPONENTS';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();
  return (
    <div className='font-sans w-full overflow-x-hidden'>
      <PreviewSection />
      {SECTIONS.map((section, index) => {
        const Component =
          SECTION_COMPONENTS[section.sectionType] || GallerySection;
        return (
          <Component
            key={index}
            order={section.order}
            className={section.styles}
            info={section}
          />
        );
      })}
    </div>
  );
}

export default App;
