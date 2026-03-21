import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import shemaSrc from './assets/schemaImg.png';
import { INFO } from './data/info';

export function LocationInfoSection() {
  return (
    <section className='w-full h-[150dvh] flex whitespace-pre-line'>
      <ImageColumn
        imageSrc={shemaSrc}
        className='w-full'
      ></ImageColumn>
      <InfoColumn
        className='w-[45%] px-25'
        infoType='paragraph'
        titleSize='base'
        title={`Локация — \n идеальный \n треугольник: \n город, горы, \n озеро`}
        info={INFO}
      ></InfoColumn>
    </section>
  );
}
