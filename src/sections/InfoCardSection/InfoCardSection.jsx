import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';

export function InfoCardSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName, parSize, containerStyles } = className;
  return (
    <section
      className={clsx(
        'w-full h-dvh flex relative whitespace-pre-line',
        containerStyles || 'items-center',
      )}
    >
      <ImageColumn
        imageSrc={info.backSrc}
        className={clsx('absolute w-full top-0 left-0', imgClassName)}
      ></ImageColumn>
      <InfoColumn
        title={info.title}
        titleType={info.titleType}
        subtitle={info.subtitle}
        info={info.data}
        infoType={info.type}
        parSize={parSize}
        titleSize='sm'
        className={clsx(
          `relative
         bg-linear-to-t 
         h-max px-7 py-0`,
          order === 'img&text' ? 'ml-auto' : 'mr-auto',
          infoClassName
            ? infoClassName
            : 'from-white from-40% via-90% via-white/60  to-white/60',
        )}
      ></InfoColumn>
    </section>
  );
}


