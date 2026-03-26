import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import { styleForAdaptive } from './styleForAdaptive/styleForAdaptive';

export function InfoSection({ section, first }) {
  const { layout, content, media, styles } = section;
  const adaptiveType = layout?.typeAdaptive || 'default';
  const adaptive = styleForAdaptive[adaptiveType] || {};

  return (
    <section
      className={clsx(
        `flex bg-white h-auto relative lg:whitespace-pre-line md:mt-[2.5%] mt-[10%]
        whitespace-normal justify-between max-md:justify-center items-center min-h-dvh`,
        layout?.order === 'img&text' ? 'flex-row' : 'flex-row-reverse',
        styles?.container,
        adaptive?.sectionStyles,
      )}
    >
      {media?.type === 'image' && (
        <ImageColumn
          imageSrc={media.src}
          fit={media?.fit || styles?.imgFit}
          className={clsx(styles?.img, adaptive?.imgStyles)}
        />
      )}

      <InfoColumn
        className={clsx('bg-white py-[2%]', styles?.info, adaptive?.infoStyles)}
        content={content}
        parSize={styles?.parSize}
        titleOrder={first}
      />
    </section>
  );
}
