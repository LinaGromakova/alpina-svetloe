import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';

export function InfoCardSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName } = className;
  return (
    <section className='w-full h-dvh flex relative whitespace-pre-line justify-between items-center'>
      <ImageColumn
        imageSrc={info.backSrc}
        className={clsx('absolute w-full', imgClassName)}
      ></ImageColumn>
      <InfoColumn
        title={info.title}
        subtitle={info.subtitle}
        info={info.data}
        infoType={info.type}
        parSize='w-[600px] nth-of-type-5:w-[450px] nth-of-type-5:ml-auto
        nth-of-type-6:w-[450px] nth-of-type-6:ml-auto nth-of-type-6:-mb-4
        nth-of-type-5:-mb-4 nth-of-type-7:-mb-4 
        nth-of-type-7:w-[450px] nth-of-type-7:ml-auto
        '
        titleSize='sm'
        className={clsx(
          `relative
         bg-linear-to-t 
           from-white from-40% via-90% via-white/60  to-white/60
         h-max px-7 mx-10 py-7`,
          order === 'img&text' && 'ml-auto',
          infoClassName,
        )}
      ></InfoColumn>
    </section>
  );
}
