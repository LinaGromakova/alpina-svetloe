import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';

export function GradientSection({ order, className, info }) {
  return (
    <section className={clsx('w-full h-dvh flex relative whitespace-pre-line')}>
      <InfoColumn
        title={info.title}
        logo={info.logo}
        info={info.data}
        infoType={info.type}
        titleSize='base'
        parSize='w-[500px] first-of-type:w-[650px]'
        className={clsx(
          'bg-linear-to-r from-white via-white/70 to-white/15 z-20 w-full px-25',
          order === 'img&text' && 'ml-auto',
        )}
      ></InfoColumn>
      <ImageColumn
        imageSrc={info.backSrc}
        className='absolute w-full z-10'
      ></ImageColumn>
    </section>
  );
}
