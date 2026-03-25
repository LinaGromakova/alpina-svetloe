import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import { GalleryLayout } from './GalleryLayout/GalleryLayout';

export function GradientSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName, parSize } = className;
  return (
    <section
      className={clsx(
        `w-full min-h-dvh h-auto flex relative max-md:justify-center md:mt-[2.5%] mt-[10%]
        lg:whitespace-pre-line whitespace-normal
         bg-linear-to-l from-white via-white/70 md:to-white/15 to-white/40`,
        order !== 'img&text' && 'bg-linear-to-r',
        info.circleGallery && 'max-md:flex-col',
      )}
    >
      {info.circleGallery && (
        <div className='h-full mx-auto xl:my-[5%] my-auto max-md:mt-[5%]'>
          <GalleryLayout images={info.circleGallery} />
        </div>
      )}
      <InfoColumn
        title={info.title}
        parSize={parSize}
        logo={info.logo}
        info={info.data}
        infoType={info.type}
        titleSize='base'
        className={clsx(
          'z-20 lg:px-25 px-10 max-md:w-auto my-[5%]',
          infoClassName,
        )}
      ></InfoColumn>
      <ImageColumn
        imageSrc={info.backSrc}
        className={clsx('absolute w-full -z-10 h-full', imgClassName)}
      ></ImageColumn>
    </section>
  );
}
