import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';

export function InfoSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName, containerStyles, parSize } = className;
  return (
    <section
      className={clsx(
        ' flex relative whitespace-pre-line justify-between items-center',
        order === 'img&text' ? 'flex-row' : 'flex-row-reverse',
        containerStyles || 'min-h-svh h-dvh max-h-lh',
      )}
    >
      <ImageColumn
        imageSrc={info.imgSrc}
        className={imgClassName}
      ></ImageColumn>
      <InfoColumn
        className={clsx('bg-white', infoClassName)}
        logo={info.logo}
        title={info.title}
        parSize={parSize}
        info={info.data}
        titleSize='base'
        signature={info.signature}
        infoType={info.type}
      ></InfoColumn>
    </section>
  );
}
