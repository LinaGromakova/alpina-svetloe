import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import backSrc from './assets/back.webp';
import { INFO } from './data/info';

export function RedLakeSection() {
  return (
    <section className='w-full h-dvh flex relative whitespace-pre-line justify-between items-center'>
      <ImageColumn
        imageSrc={backSrc}
        className='absolute w-full'
      ></ImageColumn>
      <InfoColumn
        title={`Красное озеро —\n летняя жемчужина \n Карельского перешейка`}
        subtitle={`Сезонный ритм жизни владельца:\n зима, весна, лето, осень`}
        info={INFO}
        infoType='list'
        parSize='w-[350px]'
        titleSize='sm'
        className='relative ml-auto bg-linear-to-t
         from-white from-20% via-white/50 via-40% to-white/15
         h-max px-7 mx-10 w-137.5'
      ></InfoColumn>
    </section>
  );
}
