import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import srcImage from './assets/img.png';
import { INFO } from './data/info';

export function PrivateInfoSection() {
  return (
    <section className='h-dvh flex relative whitespace-pre-line justify-between items-center'>
      <ImageColumn
        imageSrc={srcImage}
        className='w-4/5'
      ></ImageColumn>
      <InfoColumn
        className='w-3/5 bg-white px-25'
        title={`Участок \n и благоустройство \n — ваша частная \n территория`}
        info={INFO}
        parSize='max-w-[300px]'
        titleSize='base'
        infoType='list'
      ></InfoColumn>
    </section>
  );
}
