import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import backSrc from './assets/background.png';
import { INFO } from './data/info';

export function SectionPhilosophy() {
  return (
    <section className='w-full h-dvh flex relative whitespace-pre-line'>
      <InfoColumn
        title={`Концепция проекта — \n не просто дома, а сообщество`}
        info={INFO}
        infoType='paragraph'
        titleSize='base'
        parSize='w-[500px] first-of-type:w-[650px]'
        className='bg-linear-to-r from-white via-white/70 to-white/15 z-20 w-full px-25'
      ></InfoColumn>
      <ImageColumn
        imageSrc={backSrc}
        className='absolute w-full z-10'
      ></ImageColumn>
    </section>
  );
}
