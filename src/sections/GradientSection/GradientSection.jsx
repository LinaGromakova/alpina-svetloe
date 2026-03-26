import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import { GalleryLayout } from './GalleryLayout/GalleryLayout';

export function GradientSection({ section, first }) {
  const { layout, content, media, styles } = section;
  const hasCircleGallery = content?.circleGallery?.length > 0;

  return (
    <section
      className={clsx(
        `w-full min-h-dvh h-auto flex relative max-md:justify-center md:mt-[2.5%] mt-[10%]
        lg:whitespace-pre-line whitespace-normal
        bg-linear-to-l from-white via-white/70 md:to-white/15 to-white/40`,
        layout?.order !== 'img&text' && 'bg-linear-to-r',
        hasCircleGallery && 'max-md:flex-col',
        styles?.container,
      )}
    >
      {hasCircleGallery && (
        <div className='h-full mx-auto xl:my-[5%] my-auto max-md:mt-[5%]'>
          <GalleryLayout images={content.circleGallery} />
        </div>
      )}
      <InfoColumn
        content={content}
        parSize={styles?.parSize}
        titleOrder={first}
        className={clsx(
          'z-20 lg:px-25 px-10 max-md:w-auto my-[5%]',
          styles?.info,
        )}
      />
      {media?.type === 'background' && (
        <ImageColumn
          imageSrc={media.src}
          className={clsx('absolute w-full -z-10 h-full', styles?.img)}
        />
      )}
    </section>
  );
}
