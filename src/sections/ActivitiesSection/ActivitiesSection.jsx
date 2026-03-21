import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import backSrc from './assets/back.jpg';
import { INFO } from './data/info';

export function ActivitiesSection() {
  return (
    <section
      className='w-full h-dvh flex relative whitespace-pre-line justify-between 
    bg-linear-to-l from-white via-white/70 to-white/15'
    >
      <ImageColumn
        imageSrc={backSrc}
        className='absolute w-full -z-10'
      ></ImageColumn>
      <InfoColumn
        title={`«Золотая Долина» —\n ваш личный пропуск \n к склонам`}
        titleSize='base'
        info={INFO}
        infoType='list'
        className='z-20 relative ml-auto w-1/2 px-25'
      ></InfoColumn>
    </section>
  );
}
