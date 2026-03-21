import { INFO } from './data/info';
import backSrc from './assets/background.png';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';

export function ConceptSection() {
  return (
    <section className='w-full h-dvh flex relative justify-between '>
      <div className='z-20 px-[4%] py-[5%]'>
        <h3 className='text-light-beige text-5xl font-bold mb-8'>
          Архитектурная концепция
        </h3>
        <InfoColumn
          title=''
          info={INFO}
          infoType='list'
          parSize='w-[350px]'
          titleSize='sm'
          className='bg-linear-to-t 
           from-white from-75%  to-white/40 px-6 py-1.5 w-105
           '
        ></InfoColumn>
      </div>

      <ImageColumn
        imageSrc={backSrc}
        className='absolute w-full'
      ></ImageColumn>
    </section>
  );
}
