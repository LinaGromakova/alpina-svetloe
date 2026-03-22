import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';

export function GradientSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName, parSize } = className;
  return (
    <section
      className={clsx(
        'w-full min-h-svh h-dvh flex relative whitespace-pre-line bg-linear-to-l from-white via-white/70 to-white/15',
        order !== 'img&text' && 'bg-linear-to-r',
      )}
    >
      <InfoColumn
        title={info.title}
        parSize={parSize}
        logo={info.logo}
        info={info.data}
        infoType={info.type}
        titleSize='base'
        className={clsx(
          'z-20 px-25',
          order === 'img&text' && 'ml-auto',
          infoClassName,
        )}
      ></InfoColumn>
      <ImageColumn
        imageSrc={info.backSrc}
        className={clsx('absolute w-full -z-10', imgClassName)}
      ></ImageColumn>
    </section>
  );
}
