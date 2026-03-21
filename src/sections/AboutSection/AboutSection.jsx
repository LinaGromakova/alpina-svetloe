import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import { Logo } from '../../ui/Logo';
import src from './assets/image.png';
import { INFO } from './data/info';

export function AboutSection() {
  return (
    <section className='h-dvh flex relative whitespace-pre-line'>
      <ImageColumn
        imageSrc={src}
        className='w-2/5'
      ></ImageColumn>
      <InfoColumn
        className='max-w-3/5 bg-white px-25'
        title={`Альпина Светлое — \nВаш капитал в стиле шале. \nВаш отдых — круглый год`}
        info={INFO}
        parSize='max-w-112.5'
        titleSize='base'
        infoType='paragraph'
      ></InfoColumn>
      <Logo
        variant='sm'
        className='absolute right-16 bottom-10'
      ></Logo>
    </section>
  );
}
