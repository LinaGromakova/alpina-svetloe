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
        const Component = SECTION_COMPONENTS[section.component];
        return (
          <Component
            key={index}
            section={section}
            first={index === 0}
          />
        );
      })}
    </div>
  );
}

export default App;
