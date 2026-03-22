import clsx from 'clsx';
import { ImageColumn } from '../../modules/imageColumn/ui';
import { InfoColumn } from '../../modules/InfoColumn/ui';
import { Paragraph } from '../../ui/Paragraph';

export function InfoSection({ order, className = {}, info }) {
  const { imgClassName, infoClassName } = className;
  return (
    <section
      className={clsx(
        'h-dvh flex relative whitespace-pre-line justify-between items-center',
        order === 'img&text' ? 'flex-row' : 'flex-row-reverse',
      )}
    >
      <ImageColumn
        imageSrc={info.imgSrc}
        className={imgClassName}
      ></ImageColumn>

      <InfoColumn
        className={clsx('bg-white px-15', infoClassName)}
        title={info.title}
        info={info.data}
        titleSize='base'
        signature={info.signature}
        infoType={info.type}
      ></InfoColumn>
    </section>
  );
}
