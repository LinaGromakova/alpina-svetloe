import { AboutSection } from './sections/AboutSection';
import { ActivitiesSection } from './sections/ActivitiesSection';
import { AmenitiesSection } from './sections/AmenitiesSection';
import { ConceptSection } from './sections/ConceptSection';
import { LocationInfoSection } from './sections/LocationInfoSection';
import { PreviewSection } from './sections/PreviewSection';
import { RedLakeSection } from './sections/RedLakeSection';
import { SectionPhilosophy } from './sections/SectionPhilosophy';

function App() {
  return (
    <div className='font-sans w-full h-full'>
      <PreviewSection></PreviewSection>
      <AboutSection></AboutSection>
      <SectionPhilosophy></SectionPhilosophy>
      <LocationInfoSection></LocationInfoSection>
      <ActivitiesSection></ActivitiesSection>
      <RedLakeSection></RedLakeSection>
      <ConceptSection></ConceptSection>
      <AmenitiesSection></AmenitiesSection>
    </div>
  );
}

export default App;
