import { GallerySection } from './sections/GallerySection';
import { PreviewSection } from './sections/PreviewSection';
import { SECTIONS } from './constants/SECTIONS.JS';
import { SECTION_COMPONENTS } from './constants/SECTION_COMPONENTS';

function App() {
  return (
    <div className='font-sans w-full h-full'>
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
