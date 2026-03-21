import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import srcImage from './assets/img.png';
import { INFO } from './data/info';

export function AmenitiesSection() {
  return (
    <section className='h-dvh flex relative whitespace-pre-line justify-between items-center'>
      <InfoColumn
        className='max-w-3/5 bg-white px-25'
        title={`Сердце дома —\nдетали, которые \n делают жизнь \n комфортной`}
        info={INFO}
        parSize='max-w-112.5'
        titleSize='base'
        infoType='list'
      ></InfoColumn>
      <ImageColumn
        imageSrc={srcImage}
        className='w-3/5'
      ></ImageColumn>
    </section>
  );
}
